import {container } from "tsyringe";
import { IDoctorsRepository } from "../../modules/doctors/repositories/IDoctorsRepository";
import { DoctorsRepository } from "../../modules/doctors/repositories/implementations/DoctorsRepository";

import { ISpecialtiesRepository } from "../../modules/doctors/repositories/ISpecialtiesRepository";
import { SpecialtiesRepository } from "../../modules/doctors/repositories/implementations/SpecialtiesRepository";

import { IPatientsRepository } from "../../modules/patients/repositories/IPatientsRepository";
import { PatientsRepository } from "../../modules/patients/repositories/implementations/PatientsRepository";

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";

import { IAppointmentsRepository } from "../../modules/appointments/repositories/IAppointmentsRepository";
import { AppointmentsRepository } from "../../modules/appointments/repositories/implementations/AppointmentsRepository";

container.registerSingleton<IDoctorsRepository>(
    "DoctorsRepository", DoctorsRepository
)

container.registerSingleton<ISpecialtiesRepository>(
    "SpecialtiesRepository", SpecialtiesRepository
)

container.registerSingleton<IPatientsRepository>(
    "PatientsRepository", PatientsRepository
)

container.registerSingleton<IAppointmentsRepository>(
    "AppointmentsRepository", AppointmentsRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository", UsersRepository
)