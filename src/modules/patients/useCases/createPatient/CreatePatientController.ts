import { Response, Request } from "express";
import { container } from "tsyringe"

import { CreatePatientUseCase } from "./CreatePatientUseCase";

class CreatePatientController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cpf, rg, date_of_birth, telephone, mobile, gender, email, occupation, health_insurance, zip_code, address, city, state, responsible_person  } = request.body;

    const createPatientUseCase = container.resolve(CreatePatientUseCase);
    await createPatientUseCase.execute({ name, cpf, rg, date_of_birth, telephone, mobile, gender, email, occupation, health_insurance, zip_code, address, city, state, responsible_person  })

    return response.status(201).send();
  }
}

export { CreatePatientController };