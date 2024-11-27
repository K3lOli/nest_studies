import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from 'src/modules/user/useCases/createUserUseCase/createUserUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule], //aqui estamos importando o módulo de banco de dados para que possamos usar o repositório de usuário no useCase
  //o imports são responsáveis por importar outros módulos que são necessários para o funcionamento do módulo atual
  controllers: [UserController], //aqui estamos importando o controller de usuário responsável por receber as requisições HTTP e chamar o useCase
  //o controllers são responsáveis por receber as requisições HTTP e chamar os use
  providers: [CreateUserUseCase], //aqui estamos importando o useCase de criação de usuário que é responsável por criar um usuário no banco de dados
  //o providers são responsáveis por prover as dependências necessárias para o funcionamento do módulo atual (no caso o useCase)
})
export class UserModule {}
