<template>
  <div class="main_wrapper">
    <h1>Пациенты</h1>
    <input type="text" v-model="search" placeholder="Поиск по ФИО и СНИЛС..." />
    <div class="headers">
      <h2>Фио</h2>
      <h2>Снилс</h2>
      <span>-</span>
      <span>-</span>
      <span>-</span>
    </div>
    <PatientCard
      v-for="patient in filteredList"
      :key="patient.id"
      :name="patient.name"
      :surname="patient.surname"
      :secondName="patient.secondName"
      :snils="patient.snils"
      :id="patient.id"
      @custom-change="deletePatient"
    />
  </div>
</template>

<script lang="ts">
import { useEntitiesStore } from "@/stores/patients";
import PatientCard from "../components/PatientCard.vue";
import { Patient } from "../classes";

export default {
  name: "MainPage",
  components: {
    PatientCard,
  },
  setup() {
    const store = useEntitiesStore();
    return { store };
  },
  data() {
    return {
      search: "",
    };
  },
  computed: <any>{
    filteredList() {
      this.search = String(this.search);
      return this.store.patients.filter((patient: Patient) => {
        return patient
          .getSearchString()
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
  methods: <any>{
    deletePatient(id: string) {
      this.store.deletePatient(id);
    },
  },
};
</script>

<style scoped>
.main_wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.headers {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.headers span {
  flex-basis: 10%;
  color: transparent;
}
.headers h2:nth-child(1) {
  flex-basis: 20%;
}
.headers h2:nth-child(2) {
  flex-basis: 20%;
}
input {
  padding: 1rem;
  border: 2px solid black;
}
</style>
