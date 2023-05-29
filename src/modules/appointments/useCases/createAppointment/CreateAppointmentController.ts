import { Response, Request } from "express";
import { container } from "tsyringe"

import { CreateAppointmentUseCase } from "./CreateAppointmentUseCase";

class CreateAppointmentController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { patient_id, telephone, mobile, doctor_id, type, sub_type, scheduled_at, health_insurance } = request.body;

    const createAppointmentUseCase = container.resolve(CreateAppointmentUseCase);
    await createAppointmentUseCase.execute({ patient_id, telephone, mobile, doctor_id, type, sub_type, scheduled_at, health_insurance })

    return response.status(201).send();
  }
}

export { CreateAppointmentController };