import { Router } from 'express';

import { CreateSpecialtyController } from '../modules/doctors/useCases/createSpecialty/CreateSpecialtyController';
import { ListSpecialtiesController } from '../modules/doctors/useCases/listSpecialties/ListSpecialtiesController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const specialtiesRoutes = Router();

const createSpecialtyController = new CreateSpecialtyController();
const listSpecialtiesController = new ListSpecialtiesController();

specialtiesRoutes.post("/", createSpecialtyController.handle);

specialtiesRoutes.use(ensureAuthenticated);

specialtiesRoutes.get("/", listSpecialtiesController.handle);

export { specialtiesRoutes };