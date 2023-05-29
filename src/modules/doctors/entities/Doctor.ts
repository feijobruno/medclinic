import { Column, CreateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Specialty } from "./Specialty";

@Entity("doctors")
class Doctor {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @ManyToOne(() => Specialty)
  @JoinColumn({ name: "specialty_id" })
  specialty: Specialty;

  @Column()
  specialty_id: string;

  @Column()
  crm: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Doctor };