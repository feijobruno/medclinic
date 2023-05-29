import { inject, injectable } from "tsyringe"
import { IAppointmentsRepository } from "../../repositories/IAppointmentsRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    patient_id: string;
    telephone: string;
    mobile: string;
    doctor_id: string;
    type: string;
    sub_type: string;
    scheduled_at: Date;
    health_insurance: string;
}

@injectable()
class CreateAppointmentUseCase {

    constructor(
        @inject("ppointmentsRepository")
        private appointmentsRepository: IAppointmentsRepository) { }

    async execute({ patient_id, telephone, mobile, doctor_id, type, sub_type, scheduled_at, health_insurance }: IRequest): Promise<void> {
        const appointmentAlreadyExist = await this.appointmentsRepository.findByScheduleDate(scheduled_at);

        if (appointmentAlreadyExist) {
            throw new AppError("Appointment Already exists!");
        }

        this.appointmentsRepository.create({ patient_id, telephone, mobile, doctor_id, type, sub_type, scheduled_at, health_insurance})
    }
}

export { CreateAppointmentUseCase }