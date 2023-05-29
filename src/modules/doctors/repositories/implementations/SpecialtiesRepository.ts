import { Repository, getRepository } from 'typeorm';
import { Specialty } from '../../entities/Specialty';
import { ISpecialtiesRepository, ICreateSpecialtyDTO } from '../../../doctors/repositories/ISpecialtiesRepository';

class SpecialtiesRepository implements ISpecialtiesRepository {
    private repository: Repository<Specialty>;

    constructor() {
        this.repository = getRepository(Specialty);
    }

    async create({ name }: ICreateSpecialtyDTO): Promise<void> {
        const specialty = this.repository.create({
            name
        })

        await this.repository.save(specialty);
    }

    async list(): Promise<Specialty[]> {
        const specialties = await this.repository.find();
        return specialties;
    }

    async findByName(name: string): Promise<Specialty> {
        const specialty = await this.repository.findOne({ name });
        return specialty;
    }

}

export { SpecialtiesRepository };
