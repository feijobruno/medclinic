import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("patients")
class Patient {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @CreateDateColumn()
  date_of_birth: Date;

  @Column()
  telephone: string;

  @Column()
  mobile: string;

  @Column()
  gender: string;

  @Column()
  email: string;

  @Column()
  occupation: string;

  @Column()
  health_insurance: string;

  @Column()
  zip_code: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  responsible_person: string;
  
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Patient };