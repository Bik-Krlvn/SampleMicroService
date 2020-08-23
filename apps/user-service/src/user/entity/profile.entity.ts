import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('profile')
export class ProfileEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: '' })
  contact: string;

  @Column({ default: '' })
  address: string;

  @Column()
  bio: string;

  @Column({ default: '' })
  gender: string;

  @Column({ default: '' })
  avatar: string;

  @OneToOne(
    type => UserEntity,
    user => user.id,
    { cascade: true },
  )
  @JoinColumn()
  user: UserEntity;
}
