import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

//Estende o PrismaClient, fornecido pelo Prisma, e implementa OnModuleInit para garantir que o cliente Prisma conecte-se ao banco de dados quando o módulo é inicializado.
//Garante que o serviço de banco de dados esteja disponível e conectado antes de qualquer interação com ele.
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
