import { inject, injectable } from "tsyringe"
import { Appointment } from "../../entities/Appointment";
import { IAppointmentsRepository } from "../../repositories/IAppointmentsRepository";

@injectable()
class ListAppointmentsUseCase {

    constructor(
        @inject("AppointmentsRepository")
        private appointmentsRepository: IAppointmentsRepository) { }

    async execute(): Promise<Appointment[]> {
        const appointments = await this.appointmentsRepository.list();

        return appointments;
    }
}

export { ListAppointmentsUseCase };