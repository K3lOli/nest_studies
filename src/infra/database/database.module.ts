import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from 'src/modules/user/repositories/UserRepository';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';

//Define PrismaService como provider, que gerencia a conexão com o banco de dados via Prisma.
//Configura UserRepository para usar PrismaUserRepository como a implementação concreta, permitindo que UserRepository seja injetado em outras partes do código.

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository, //aqui estamos dizendo que o UserRepository será substituído pelo PrismaUserRepository quando for injetado
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UserRepository], //aqui estamos exportando o UserRepository para que ele possa ser injetado em outros módulos
})
export class DatabaseModule {}
