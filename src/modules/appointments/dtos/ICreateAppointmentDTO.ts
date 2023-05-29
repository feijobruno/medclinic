interface ICreateAppointmentDTO {
  patient_id: string;
  telephone: string;
  mobile: string;
  doctor_id: string;
  type: string;
  sub_type: string;
  scheduled_at: Date;
  health_insurance: string;
}

export { ICreateAppointmentDTO }