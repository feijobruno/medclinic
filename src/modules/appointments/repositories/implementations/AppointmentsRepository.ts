import { Repository, getRepository } from 'typeorm';
import { Appointment } from '../../entities/Appointment';
import { IAppointmentsRepository, ICreateAppointmentDTO } from '../IAppointmentsRepository';

class AppointmentsRepository implements IAppointmentsRepository {
    private repository: Repository<Appointment>;

    constructor() {
        this.repository = getRepository(Appointment);
    }

    async create({ patient_id, telephone, mobile, doctor_id, type, sub_type, scheduled_at, health_insurance }: ICreateAppointmentDTO): Promise<void> {
        const appointment = this.repository.create({
            patient_id, telephone, mobile, doctor_id, type, sub_type, scheduled_at, health_insurance
        })

        await this.repository.save(appointment);
    }

    async list(): Promise<Appointment[]> {
        const appointments = await this.repository.find();
        return appointments;
    }

    async findByScheduleDate(scheduled_at: Date): Promise<Appointment> {
        const appointment = await this.repository.findOne({ scheduled_at });
        return appointment;
    }

}

export { AppointmentsRepository };
