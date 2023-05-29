import { Response, Request } from "express";
import { container } from "tsyringe"
import { ListSpecialtiesUseCase } from "./ListSpecialtiesUseCase";

class ListSpecialtiesController {

  async handle(request: Request, response: Response) : Promise<Response> {

    const listSpecialtiesUseCase = container.resolve(ListSpecialtiesUseCase);
    const all = await listSpecialtiesUseCase.execute();

    return response.json(all);
  }
}

export { ListSpecialtiesController };