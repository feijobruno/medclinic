import { inject, injectable } from "tsyringe"
import { Specialty } from "../../entities/Specialty";
import { ISpecialtiesRepository } from "../../repositories/ISpecialtiesRepository";

@injectable()
class ListSpecialtiesUseCase {

    constructor(
        @inject("SpecialtiesRepository")
        private specialtiesRepository: ISpecialtiesRepository) { }

    async execute(): Promise<Specialty[]> {
        const specialties = await this.specialtiesRepository.list();

        return specialties;
    }
}

export { ListSpecialtiesUseCase };