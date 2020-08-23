import { ICommandHandler, CommandHandler, EventBus } from '@nestjs/cqrs';
import { CreateProfileCommand } from '../impl/create-profile.command';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileRepository } from '../../repository/profile.repository';
import { Logger } from '@nestjs/common';
import { ProfileEntity } from '../../entity/profile.entity';
import { ProfileCreatedEvent } from '../../event/impl/profile-created.event';
import { RpcException } from '@nestjs/microservices';

@CommandHandler(CreateProfileCommand)
export class CreateProfileHandler
  implements ICommandHandler<CreateProfileCommand> {
  logger = new Logger(this.constructor.name);

  constructor(
    @InjectRepository(ProfileRepository)
    private readonly profileRepository: ProfileRepository,
    private readonly event$: EventBus,
  ) {}

  async execute(command: CreateProfileCommand) {
    try {
      this.logger.log(
        `async ${this.constructor.name}...`,
        command.constructor.name,
      );

      const { userEntity } = command;

      const profile: ProfileEntity = new ProfileEntity();
      profile.user = userEntity;
      profile.bio = `My name is ${userEntity.name}`;

      const profileResult = await this.profileRepository.createProfile(profile);

      this.event$.publish(new ProfileCreatedEvent(profileResult));
      return { success: true };
    } catch (err) {
      this.logger.error(err);
      throw new RpcException(err);
    }
  }
}
