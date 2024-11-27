import { User } from '@prisma/client';

export class UserViewModel {
  static toHttp({ createdAt, email, id, name }: User) {
    return {
      createdAt,
      email,
      id,
      name,
    };
  }
}
