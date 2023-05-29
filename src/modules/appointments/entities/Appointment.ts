import { Column, CreateDateColumn, Entity, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Doctor } from "../../doctors/entities/Doctor";
import { Patient } from "../../patients/entities/Patient";

@Entity("appointments")
class Appointment {
 
  @PrimaryColumn()
  id?: string;

  @ManyToOne(() => Patient)
  @JoinColumn({ name: "patient_id" })
  patient: Patient;

  @Column()
  patient_id: string;

  @Column()
  telephone: string;

  @Column()
  mobile: string;

  @ManyToOne(() => Doctor)
  @JoinColumn({ name: "doctor_id" })
  doctor: Doctor;

  @Column()
  doctor_id: string;

  @Column()
  type: string;

  @Column()
  sub_type: string;

  @Column()
  health_insurance: string;

  @Column({ type: 'timestamptz' }) 
  scheduled_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Appointment };