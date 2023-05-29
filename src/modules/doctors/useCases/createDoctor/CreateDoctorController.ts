import { Response, Request } from "express";
import { container } from "tsyringe"

import { CreateDoctorUseCase } from "./CreateDoctorUseCase";

class CreateDoctorController {

  async handle(request: Request, response: Response) : Promise<Response>{
    const { name, specialty_id, crm } = request.body;

    const createDoctorUseCase = container.resolve(CreateDoctorUseCase);
    await createDoctorUseCase.execute({name , specialty_id, crm })

    return response.status(201).send();
  }
}

export { CreateDoctorController };