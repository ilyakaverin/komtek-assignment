<script>
import { useEntitiesStore } from "@/stores/patients";
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
  setup() {
    const store = useEntitiesStore();
    return { store };
  },
  methods: {
    moveToEditPage() {
      router.push({ name: "edit", params: { id: this.id } });
    },
    moveToAboutPage() {
      router.push({ name: "about", params: { id: this.id } });
    },
  },
};
</script>

<template>
  <section class="containerCard">
    <h4>{{ `${name} ${secondName} ${surname}` }}</h4>
    <span>{{ snils }}</span>
    <Button @click="moveToAboutPage" name="О Пациенте" />
    <Button @click="moveToEditPage" name="Редактировать" />
    <Button @click="this.store.deletePatient(id)" name="Удалить" />
  </section>
</template>

<style scoped>
.containerCard {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
h4 {
  flex-basis: 20%;
}
</style>
