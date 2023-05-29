import { Router } from 'express';

import { doctorsRoutes } from './doctors.routes';
import { specialtiesRoutes } from './specialties.routes';
import { patientsRoutes } from './patients.routes';
import { appointmentsRoutes } from './appointments.routes';
import { usersRoutes } from './users.routes';
import { authenticateRoutes } from './authenticate.routes';

const router = Router();

router.use("/doctors", doctorsRoutes);
router.use("/specialties", specialtiesRoutes);
router.use("/patients", patientsRoutes);
router.use("/appointments", appointmentsRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };