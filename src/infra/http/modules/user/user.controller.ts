import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../../../modules/user/useCases/createUserUseCase/createUserUseCase';
import { CreateUserBody } from './dtos/createUserBody';
import { UserViewModel } from './viewModel/userViewModel';

//É responsável por receber as requisições HTTP relacionadas a usuários (neste caso, uma requisição POST para criação de usuário).
//Quando uma requisição de criação é recebida, UserController chama o CreateUserUseCase para executar a lógica de criação de um novo usuário com os dados recebidos na requisição (email, name, password).
@Controller('users')
export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createPost(@Body() body: CreateUserBody) {
    const { email, name, password } = body;
    const user = await this.createUserUseCase.execute({
      email,
      name,
      password,
    });
    return UserViewModel.toHttp(user);
  }
}
