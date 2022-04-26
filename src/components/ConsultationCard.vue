<script>
import Button from "@/components/Button.vue";
import { useConsultationsStore } from "../stores/consultations";

export default {
  props: {
    date: String,
    time: String,
    consultid: String,
  },
  setup() {
    const consultStore = useConsultationsStore();

    return { consultStore };
  },
  components: {
    Button,
  },
  methods: {},
};
</script>

<template>
  <section class="consultationCard">
    <span>Время: {{ date }}</span>
    <span>Дата: {{ time }}</span>
    <Button
      @click="this.consultStore.deleteConsultation(consultid)"
      name="Удалить"
    />
  </section>
</template>

<style>
.consultationCard {
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  width: 100%;
  gap:1rem;
  padding:2rem
}
</style>
