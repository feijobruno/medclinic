interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  cpf: string;
  id?: string;
  avatar?: string;
}

export { ICreateUserDTO };