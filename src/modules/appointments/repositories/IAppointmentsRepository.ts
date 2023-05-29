import { ICreateAppointmentDTO } from "../dtos/ICreateAppointmentDTO";
import { Appointment } from "../entities/Appointment";

//DTO => Data transfer object -> objeto responsável por fazer a transferência entre as camadas

interface IAppointmentsRepository {
    findByScheduleDate(scheduled_at: Date): Promise<Appointment>;
    list(): Promise<Appointment[]>;
    create({ patient_id, telephone, mobile, doctor_id, type, sub_type, scheduled_at, health_insurance }: ICreateAppointmentDTO): Promise<void>;
}

export { IAppointmentsRepository, ICreateAppointmentDTO };