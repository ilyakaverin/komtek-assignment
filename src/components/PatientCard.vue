<script>
import { useEntitiesStore } from "@/stores/patients";
import router from '../router';
export default {
  props: {
    name: String,
    surname: String,
    id: String,
  },
  setup() {
    const store = useEntitiesStore();
    return { store };
  },
  methods: {
      moveToAboutPage() {
          router.push({name: 'patient', params: {id: this.id}})
      }
  }
};
</script>

<template>
  <div class="containerCard">
    <h2>
      {{ name }}
    </h2>
    <h3>
      {{ surname }}
    </h3>
    <h4>{{ id }}</h4>
    <button @click="moveToAboutPage">О пациенте</button>
    <button @click="this.store.deletePatient(id)">Удалить</button>
  </div>
</template>

<style scoped>
.containerCard {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

h2 {
  color: red;
}
h2 {
  color: palegreen;
}
h4 {
  color: black;
}
</style>
