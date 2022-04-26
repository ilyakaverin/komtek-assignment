import { defineStore } from "pinia";
import { Patient } from "@/classes";

export const useEntitiesStore = defineStore({
  id: "Entities",
  state: () => ({
    patients: [
      {
        id: "1",
        name: "Илья",
        surname: "Каверин",
        secondName: "Анатольевич",
        birthdate: "1990-11-18",
        gender: "Male",
        snils: "163-428-501 59",
        weight: 50,
        height: 50,
      },
      {
        id: "2",
        name: "Илья",
        surname: "Каверин",
        secondName: "Анатольевич",
        birthdate: "1990-11-18",
        gender: "Male",
        snils: "163-428-501 59",
        weight: 50,
        height: 50,
      },
      {
        id: "3",
        name: "Илья",
        surname: "Каверин",
        secondName: "Анатольевич",
        birthdate: "1990-11-18",
        gender: "Male",
        snils: "163-428-501 59",
        weight: 50,
        height: 50,
      },
      {
        id: "4",
        name: "Илья",
        surname: "Каверин",
        secondName: "Анатольевич",
        birthdate: "1990-11-18",
        gender: "Male",
        snils: "163-428-501 59",
        weight: 50,
        height: 50,
      },
      {
        id: "5",
        name: "Илья",
        surname: "Каверин",
        secondName: "Анатольевич",
        birthdate: "1990-11-18",
        gender: "Male",
        snils: "163-428-501 59",
        weight: 50,
        height: 50,
      },
      {
        id: "6",
        name: "Илья",
        surname: "Каверин",
        secondName: "Анатольевич",
        birthdate: "1990-11-18",
        gender: "Male",
        snils: "163-428-501 59",
        weight: 50,
        height: 50,
      },
      {
        id: "7",
        name: "Илья",
        surname: "Каверин",
        secondName: "Анатольевич",
        birthdate: "1990-11-18",
        gender: "Male",
        snils: "163-428-501 59",
        weight: 50,
        height: 50,
      },
    ],
    current: null,
  }),
  getters: {
    show: (state) => state.patients,
    getCurrent: (state) => state.current,
  },
  actions: {
    addPatient(patient: Patient) {
      this.patients.push(patient);
    },
    deletePatient(id: string) {
      this.patients = this.patients.filter(
        (patient: Patient) => patient.id !== id
      );
    },
    updatePatient(currentPatient: Patient, id: string) {
      this.patients = this.patients.map((patient: Patient) => {
        if (patient.id === id) {
          patient = currentPatient;
        }
        return patient;
      });
    },
    setCurrent(patient: Patient) {
      this.current = patient;
    },
  },
});
