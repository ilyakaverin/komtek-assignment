<template>
  <section class="containerCard">
    <h4>{{ `${name} ${secondName} ${surname}` }}</h4>
    <span>{{ snils }}</span>
    <Button @click="moveToAboutPage" name="О Пациенте" />
    <Button @click="moveToEditPage" name="Редактировать" />
    <Button @click="clicked" name="Удалить" />
  </section>
</template>

<script>
import router from "../router";
import Button from "@/components/Button.vue";
export default {
  name: "PatientCard",
  components: {
    Button,
  },
  props: {
    name: String,
    surname: String,
    secondName: String,
    snils: String,
    id: String,
  },
  methods: {
    moveToEditPage() {
      router.push({ name: "edit", params: { id: this.id } });
    },
    moveToAboutPage() {
      router.push({ name: "about", params: { id: this.id } });
    },
    clicked(event) {
      this.$emit("customChange", this.id);
    },
  },
};
</script>

<style scoped>
.containerCard {
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
}
h4 {
  flex-basis: 20%;
  align-self: center;
}
span {
  flex-basis: 20%;
  align-self: center;
}
@media (max-width: 414px) {
  .containerCard {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>
