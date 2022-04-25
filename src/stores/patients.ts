import { defineStore } from "pinia";
import { Patient } from '@/service';


export const useEntitiesStore = defineStore({
  id: "Entities",
  state: () => ({
    patients: [],
    current: null,
  }),
  getters: {
    show: (state) => state.patients,
    getCurrent: (state) => state.current
  },
  actions: {
    addPatient(patient: Patient) {
      this.patients.push(patient);
    },
    deletePatient(id: string) {
      this.patients = this.patients.filter((patient:Patient) => patient.id !== id);
    },
    updatePatient(currentPatient: Patient, id: string) {
      this.patients = this.patients.map((patient:Patient) => {
        if(patient.id === id) {
          patient = currentPatient;
        }
        return patient
      })
    },
    setCurrent(patient: Patient) {
      this.current = patient
    } 
  },
});
