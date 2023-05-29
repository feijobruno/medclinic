import { inject, injectable } from "tsyringe"
import { Doctor } from "../../entities/Doctor";
import { IDoctorsRepository } from "../../repositories/IDoctorsRepository";

@injectable()
class ListDoctorsUseCase {

    constructor(
        @inject("DoctorsRepository")
        private doctorsRepository: IDoctorsRepository) { }

    async execute(): Promise<Doctor[]> {
        const doctors = await this.doctorsRepository.list();

        return doctors;
    }
}

export { ListDoctorsUseCase };