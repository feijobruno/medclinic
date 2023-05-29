import { Router } from 'express';
import { CreateDoctorController } from '../modules/doctors/useCases/createDoctor/CreateDoctorController';
import { ListDoctorsController } from '../modules/doctors/useCases/listDoctors/ListDoctorsController';

const doctorsRoutes = Router();

const createDoctorController = new CreateDoctorController();
const listDoctorsController = new ListDoctorsController();

doctorsRoutes.post("/", createDoctorController.handle);

doctorsRoutes.get("/", listDoctorsController.handle);

export { doctorsRoutes };