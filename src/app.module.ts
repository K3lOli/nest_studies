import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/modules/user/user.module';
import { DatabaseModule } from './infra/database/database.module';

//Importa UserModule e DatabaseModule, conectando o módulo de usuários e o módulo de banco de dados à aplicação principal. Este módulo principal serve como o ponto de entrada para inicializar os módulos que compõem a aplicação.
@Module({
  imports: [UserModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
