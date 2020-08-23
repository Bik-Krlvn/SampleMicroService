import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(userEntity: UserEntity): Promise<UserEntity> {
    const user = this.create(userEntity);
    return this.save(user);
  }

  async exist(email: string): Promise<boolean> {
    const user = await this.findOne({ where: { email } });
    return user != null;
  }
}
