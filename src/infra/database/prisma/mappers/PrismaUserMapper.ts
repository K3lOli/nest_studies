import { User } from 'src/modules/user/entities/User';
import { User as UserRaw } from '@prisma/client';

//Classe de mapeamento que converte a entidade User no formato específico do Prisma (do tipo UserRaw), incluindo atributos como createdAt, email, name, password e id.
//Simplifica o processo de conversão de dados entre o modelo de negócio (User) e o modelo de persistência (UserRaw), para garantir compatibilidade com o Prisma.
export class PrismaUserMapper {
  static toPrisma({ createdAt, email, name, password, id }: User): UserRaw {
    //aqui estamos convertendo um objeto do tipo User para um objeto do tipo UserRaw
    //usamos o static para que não seja necessário instanciar a classe para usar o método toPrisma
    return {
      createdAt,
      email,
      name,
      password,
      id,
    };
  }
}
