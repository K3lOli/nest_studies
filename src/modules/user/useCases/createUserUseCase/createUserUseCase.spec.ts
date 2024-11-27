import { compare } from 'bcrypt';
import { UserRepositoryTest } from '../../repositories/UserRepositoryTest';
import { CreateUserUseCase } from './createUserUseCase';

let createUserUseCase: CreateUserUseCase;
let userRepositoryTest: UserRepositoryTest;

describe('Create User', () => {
  beforeEach(() => {
    userRepositoryTest = new UserRepositoryTest();
    createUserUseCase = new CreateUserUseCase(userRepositoryTest);
  });

  it('should be able to create a new user', async () => {
    expect(userRepositoryTest.users).toEqual([]);

    const user = await createUserUseCase.execute({
      email: 'email@email.com0',
      name: 'kel',
      password: '123456',
    });

    expect(userRepositoryTest.users).toEqual([user]);
  });

  it('Should be able to create a new user with encrypted password', async () => {
    const userPasswordWithoutHash = '123456';

    const user = await createUserUseCase.execute({
      email: 'email@email.com',
      name: 'kel',
      password: userPasswordWithoutHash,
    });

    const userHasPasswordHash = await compare(
      userPasswordWithoutHash,
      user.password,
    );

    expect(userHasPasswordHash).toBeTruthy();
  });
});
