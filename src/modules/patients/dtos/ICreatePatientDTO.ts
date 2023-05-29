interface ICreatePatientDTO {
  name: string;
  cpf: string;
  rg: string;
  date_of_birth: Date;
  telephone: string;
  mobile: string;
  gender: string;
  email: string;
  occupation: string;
  health_insurance: string;
  zip_code: string;
  address: string;
  city: string;
  state: string;
  responsible_person: string;
}

export { ICreatePatientDTO }