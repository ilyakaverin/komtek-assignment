<script lang="ts">
import { useEntitiesStore } from "@/stores/patients";
import PatientCard from "../components/PatientCard.vue";

export default {
  name: "glav",
  components: {
    PatientCard,
  },
  setup() {
    const store = useEntitiesStore();
    return { store };
  },
  data() {
    return {
      names: null,
    };
  },
  methods: {
    show() {
      console.log(this.store.patients);
    },
  },
};
</script>

<template>
  <div class="send">
    <h1>Главная</h1>
    <button @click="show">Send</button>

    <div class="cards">
      <PatientCard
        v-for="patient in store.patients"
        :name="patient.name"
        :surname="patient.surname"
        :id="patient.id"
      />
    </div>
  </div>
</template>

<style scoped></style>
