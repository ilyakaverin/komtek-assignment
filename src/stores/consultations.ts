import { defineStore } from "pinia";
import { Consultation } from "@/classes";

export const useConsultationsStore = defineStore({
  id: "Consultations",
  state: () => ({
    consultations: [],
    current: []
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
            (consultation: Consultation) => consultation.consultid !== id
          );
        this.current = this.current.filter(
        (consultation: Consultation) => consultation.consultid !== id
      );
    },
  },
});
