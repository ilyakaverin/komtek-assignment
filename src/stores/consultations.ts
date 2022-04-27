import { defineStore } from "pinia";
import { Consultation } from "@/classes";

export const useConsultationsStore = defineStore({
  id: "Consultations",
  state: () => ({
    consultations: [],
    current: [],
    edit: [],
  }),
  getters: {
    show: (state) => state.consultations,
  },
  actions: {
    addConsultation(consultation: Consultation) {
      this.consultations.push(consultation);
    },
    filterConsultations(id: string) {
      this.current = this.consultations.filter(
        (consultation: Consultation) => consultation.userid === id
      );
    },
    deleteConsultation(id: string) {
      this.consultations = this.consultations.filter(
        (consultation: Consultation) => consultation.consultId !== id
      );
      this.current = this.current.filter(
        (consultation: Consultation) => consultation.consultId !== id
      );
    },
    updateConsultation(consultation_input: Consultation) {
      this.consultations = this.consultations.map(
        (consultation: Consultation) => {
          if (consultation.consultId === consultation_input.consultId) {
            consultation = consultation_input;
          }
          return consultation;
        }
      );
    },
  },
});
