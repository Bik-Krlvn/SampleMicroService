import { Repository, EntityRepository } from 'typeorm';
import { ProfileEntity } from '../entity/profile.entity';

@EntityRepository(ProfileEntity)
export class ProfileRepository extends Repository<ProfileEntity> {
  async createProfile(profileEntity: ProfileEntity): Promise<ProfileEntity> {
    const profile = this.create(profileEntity);
    return this.save(profile);
  }
}
