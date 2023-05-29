import { Response, Request } from "express";
import { container } from "tsyringe"
import { ListAppointmentsUseCase } from "./ListAppointmentsUseCase";

class ListAppointmentsController {

  async handle(request: Request, response: Response): Promise<Response> {

    const listAppointmentsUseCase = container.resolve(ListAppointmentsUseCase);
    const all = await listAppointmentsUseCase.execute();

    return response.json(all);
  }
}

export { ListAppointmentsController };