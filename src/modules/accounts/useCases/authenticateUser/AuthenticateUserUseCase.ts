import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";


interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
  // refresh_token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    
    //Usuario existe
    const user = await this.usersRepository.findByEmail(email);

    // Senha está correta
    if (!user) {
      throw new AppError("Email or password incorrect!", );
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect! 2");
    }

    //Gerar jsonwebtoken
    const token = sign({}, "teste", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name, 
        email: user.email,
      },
    }

    return tokenReturn; 
  }
}

export { AuthenticateUserUseCase };