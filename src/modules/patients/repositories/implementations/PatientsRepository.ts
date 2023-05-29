import { Repository, getRepository } from 'typeorm';
import { Patient } from '../../entities/Patient';
import { IPatientsRepository, ICreatePatientDTO } from '../IPatientsRepository';

class PatientsRepository implements IPatientsRepository {
    private repository: Repository<Patient>;

    constructor() {
        this.repository = getRepository(Patient);
    }

    async create({ name, cpf, rg, date_of_birth, telephone, mobile, gender, email, occupation, health_insurance, zip_code, address, city, state, responsible_person  }: ICreatePatientDTO): Promise<void> {
        const patient = this.repository.create({
            name, cpf, telephone, address, city, gender, date_of_birth, health_insurance
        })

        await this.repository.save(patient);
    }

    async list(): Promise<Patient[]> {
        const patients = await this.repository.find();
        return patients;
    }

    async findByName(name: string): Promise<Patient> {
        const patient = await this.repository.findOne({ name });
        return patient;
    }

}

export { PatientsRepository };
