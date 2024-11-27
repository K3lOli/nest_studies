import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../entities/User';
import { hash } from 'bcrypt';

//Implementa a lógica de criação de um novo usuário.
//Recebe UserRepository como dependência, o que permite desacoplar a lógica de negócio (criação de usuários) da implementação específica do repositório de dados.
//Na função execute, cria uma instância da entidade User, onde a senha é criptografada com bcrypt antes de salvar.
//Chama o método create do UserRepository para persistir o usuário no banco de dados.

interface CreateUserRequest {
  email: string;
  name: string;
  password: string;
}

//princípio da reponsabilidade única
@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {} //um constructor serve para injetar as dependências necessárias para o funcionamento do useCase. Aqui no código estamos injetando o userRepository que é responsável por salvar e buscar dados de usuário
  //sem o contructor não seria possível usar o userRepository
  async execute({ email, name, password }: CreateUserRequest) {
    //regra de negócio
    //aqui vamos usar o repositories para salvar o usuário. Repositories são responsáveis por salvar e buscar dados
    const user = new User({
      email,
      name,
      password: await hash(password, 10),
    });
    await this.userRepository.create(user);

    return user;
  }
}
