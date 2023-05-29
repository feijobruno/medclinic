import { Doctor } from "../entities/Doctor";
import { ICreateDoctorDTO } from "../dtos/ICreateDoctorDTO"; 

//DTO => Data transfer object -> objeto responsável por fazer a transferência entre as camadas

interface IDoctorsRepository {
    findByName(name: string) : Promise<Doctor>;
    list(): Promise<Doctor[]>;
    create({name, specialty_id, crm }: ICreateDoctorDTO) : Promise<void>;
}

export { IDoctorsRepository , ICreateDoctorDTO};