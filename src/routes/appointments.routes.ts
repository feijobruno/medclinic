import { Router } from 'express';
import { CreateAppointmentController } from '../modules/appointments/useCases/createAppointment/CreateAppointmentController';
import { ListAppointmentsController } from '../modules/appointments/useCases/listAppointments/ListAppointmentsController';

const appointmentsRoutes = Router();

const createAppointmentController = new CreateAppointmentController();
const listAppointmentsController = new ListAppointmentsController();

appointmentsRoutes.post("/", createAppointmentController.handle);

appointmentsRoutes.get("/", listAppointmentsController.handle);

export { appointmentsRoutes };