import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetUserQuery } from '../impl/get-user.query';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../repository/user.repository';
import { UserEntity } from '../../entity/user.entity';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  logger = new Logger(this.constructor.name);

  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async execute(query: GetUserQuery): Promise<UserEntity> {
    this.logger.log(
      `async ${this.constructor.name}...`,
      query.constructor.name,
    );
    const { userId } = query;
    return this.userRepository.findOne({ where: { id: userId } });
  }
}
