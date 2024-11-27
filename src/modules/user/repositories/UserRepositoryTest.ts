import { User } from '@prisma/client';
import { UserRepository } from './UserRepository';

export class UserRepositoryTest implements UserRepository {
  public users: User[] = [];
  async create(user: User): Promise<void> {
    this.users.push(user);
  }
}
