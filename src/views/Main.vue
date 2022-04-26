<script lang="ts">
import { useEntitiesStore } from "@/stores/patients";
import PatientCard from "../components/PatientCard.vue";

export default {
  name: "MainPage",
  components: {
    PatientCard,
  },
  setup() {
    const store = useEntitiesStore();
    return { store };
  },
};
</script>

<template>
  <div class="main_wrapper">
    <h1>Пациенты</h1>
    <div class="headers">
      <h2>Фио</h2>
      <h2>Снилс</h2>
    </div>
    <PatientCard
      v-for="patient in store.patients"
      :key="patient.id"
      :name="patient.name"
      :surname="patient.surname"
      :secondName="patient.secondName"
      :snils="patient.snils"
      :id="patient.id"
    />
  </div>
</template>

<style scoped>
.main_wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.headers {
  display: flex;
}
</style>
