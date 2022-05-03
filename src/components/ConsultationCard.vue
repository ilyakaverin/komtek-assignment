<template>
  <section class="consultationCard">
    <span>Время: {{ date }}</span>
    <span>Дата: {{ time }}</span>
    <Button
      @click="clicked"
      name="Удалить"
    />
    <Button @click="moveToConsultation" name="Редактировать" />
  </section>
</template>

<script>
import Button from "@/components/Button.vue";
import router from "../router";

export default {
  props: {
    date: String,
    time: String,
    consultId: String,
    userid: String,
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
    clicked() {
      this.$emit('CustomChange', this.consultId)
    }
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
