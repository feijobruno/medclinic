import { Repository, getRepository } from 'typeorm';
import { Doctor } from '../../entities/Doctor';
import { IDoctorsRepository, ICreateDoctorDTO } from '../IDoctorsRepository';

class DoctorsRepository implements IDoctorsRepository {
    private repository: Repository<Doctor>;

    constructor() {
        this.repository = getRepository(Doctor);
    }

    async create({ name, specialty_id, crm }: ICreateDoctorDTO): Promise<void> {
        const doctor = this.repository.create({
            name, 
            specialty_id, 
            crm
        })

        await this.repository.save(doctor);
    }

    async list(): Promise<Doctor[]> {
        const doctors = await this.repository.find();
        return doctors;
    }

    async findByName(name: string): Promise<Doctor> {
        const doctor = await this.repository.findOne({ name });
        return doctor;
    }

}

export { DoctorsRepository };
