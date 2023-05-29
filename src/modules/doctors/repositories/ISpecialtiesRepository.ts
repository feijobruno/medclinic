import { ICreateSpecialtyDTO } from "../dtos/ICreateSpecialtyDTO";
import { Specialty } from "../entities/Specialty";

//DTO => Data transfer object -> objeto responsável por fazer a transferência entre as camadas

interface ISpecialtiesRepository {
    findByName(name: string): Promise<Specialty>;
    list(): Promise<Specialty[]>;
    create({ name }: ICreateSpecialtyDTO): Promise<void>;
}

export { ISpecialtiesRepository, ICreateSpecialtyDTO };