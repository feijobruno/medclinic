import { inject, injectable } from "tsyringe"
import { IPatientsRepository } from "../../repositories/IPatientsRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
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

@injectable()
class CreatePatientUseCase {

    constructor(
        @inject("PatientsRepository")
        private patientsRepository: IPatientsRepository) { }

    async execute({ name, cpf, rg, date_of_birth, telephone, mobile, gender, email, occupation, health_insurance, zip_code, address, city, state, responsible_person }: IRequest): Promise<void> {
        const patientAlreadyExist = await this.patientsRepository.findByName(name);

        if (patientAlreadyExist) {
            throw new AppError("Patient Already exists!");
        }

        this.patientsRepository.create({ name, cpf, rg, date_of_birth, telephone, mobile, gender, email, occupation, health_insurance, zip_code, address, city, state, responsible_person })
    }
}

export { CreatePatientUseCase }