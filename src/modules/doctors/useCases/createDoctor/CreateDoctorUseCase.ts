import { inject, injectable } from "tsyringe"
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    name: string;
    specialty_id: string;
    crm: string;
}

@injectable()
class CreateDoctorUseCase {

    constructor(
        @inject("DoctorsRepository")
        private doctorsRepository: IDoctorsRepository) { }

    async execute({ name, specialty_id, crm }: IRequest): Promise<void> {
        const doctorAlreadyExist = await this.doctorsRepository.findByName(name);

        if (doctorAlreadyExist) {
            throw new AppError("Doctor Already exists!");
        }

        this.doctorsRepository.create({ name, specialty_id, crm })
    }
}

export { CreateDoctorUseCase }