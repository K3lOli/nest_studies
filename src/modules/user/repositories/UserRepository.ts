import { User } from '../entities/User';

//É uma classe abstrata que define o contrato para o repositório de usuários, especificando um método create que recebe uma instância de User e retorna uma Promise<void>.
//Serve para padronizar a interação com o repositório, permitindo que implementações específicas (como o PrismaUserRepository) sigam o mesmo contrato.

export abstract class UserRepository {
  //uma classe abstrata é uma classe que não pode ser instanciada, mas pode ser herdada
  //diferente da interface, quando a classe é compilada ela não é removida
  abstract create(user: User): Promise<void>;
}
