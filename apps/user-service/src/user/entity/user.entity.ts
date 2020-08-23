import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from 'typeorm';
import { hash } from 'bcryptjs';
import { Exclude, classToPlain } from 'class-transformer';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  verified: boolean;

  @Column()
  verificationCode: string;

  @Exclude()
  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    const salt = 10;
    this.password = await hash(this.password, salt);
  }

  toJSON(): Record<string, any> {
    return classToPlain(this);
  }
}
