<template>
  <section class="consultationCard">
    <span>Время: {{ date }}</span>
    <span>Дата: {{ time }}</span>
    <Button
      @click="this.consultStore.deleteConsultation(consultId)"
      name="Удалить"
    />
    <Button @click="moveToConsultation" name="Редактировать" />
  </section>
</template>

<script>
import Button from "@/components/Button.vue";
import { useConsultationsStore } from "../stores/consultations";
import router from "../router";

export default {
  props: {
    date: String,
    time: String,
    consultId: String,
    userid: String,
  },
  setup() {
    const consultStore = useConsultationsStore();

    return { consultStore };
  },
  components: {
    Button,
  },
  methods: {
    moveToConsultation() {
      router.push({
        name: "editConsultation",
        params: { id: this.userid, consultId: this.consultId },
      });
    },
  },
};
</script>

<style>
.consultationCard {
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  gap: 1rem;
  padding: 2rem;
}
</style>
