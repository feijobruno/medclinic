import { ICreatePatientDTO } from "../dtos/ICreatePatientDTO";
import { Patient } from "../entities/Patient";

//DTO => Data transfer object -> objeto responsável por fazer a transferência entre as camadas

interface IPatientsRepository {
    findByName(name: string): Promise<Patient>;
    list(): Promise<Patient[]>;
    create({ name, cpf, rg, date_of_birth, telephone, mobile, gender, email, occupation, health_insurance, zip_code, address, city, state, responsible_person  }: ICreatePatientDTO): Promise<void>;
}

export { IPatientsRepository, ICreatePatientDTO };