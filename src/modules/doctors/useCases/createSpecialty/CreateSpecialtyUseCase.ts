import { inject, injectable } from "tsyringe";
import { ISpecialtiesRepository } from "../../../doctors/repositories/ISpecialtiesRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    name: string;
}

@injectable()
class CreateSpecialtyUseCase {
   
    constructor(
        @inject("SpecialtiesRepository")
        private specialtiesRepository: ISpecialtiesRepository){

    }

    async execute({ name }: IRequest) : Promise<void> {
        const specialtyAlreadyExist = await this.specialtiesRepository.findByName(name);

        if (specialtyAlreadyExist) {
            throw new AppError("Specialty Already exists!");
        }

        await this.specialtiesRepository.create({ name })
    }
}

export { CreateSpecialtyUseCase }