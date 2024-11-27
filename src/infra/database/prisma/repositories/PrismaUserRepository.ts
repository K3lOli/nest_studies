import { User } from 'src/modules/user/entities/User';
import { UserRepository } from 'src/modules/user/repositories/UserRepository';
import { PrismaService } from '../prisma.service';
import { PrismaUserMapper } from '../mappers/PrismaUserMapper';
import { Injectable } from '@nestjs/common';

//Implementa UserRepository usando Prisma para interagir com o banco de dados.
//No método create, converte a entidade User em um objeto no formato esperado pelo Prisma (usando PrismaUserMapper.toPrisma) antes de salvá-lo.
//Chama this.prisma.user.create para inserir o usuário no banco de dados.

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async create(user: User): Promise<void> {
    const userRaw = PrismaUserMapper.toPrisma(user);
    await this.prisma.user.create({
      data: userRaw,
    });
  }
}
