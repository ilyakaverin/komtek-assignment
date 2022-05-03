<template>
  <div class="usercard">
    <div class="userinfo">
      <span class="bold">Имя:</span>
      <span>{{ current.name }}</span>
      <span class="bold">Фамилия:</span>
      <span>{{ current.surname }}</span>
      <span class="bold">Отчество:</span>
      <span>{{ current.secondName }}</span>
      <span class="bold"> Возраст:</span>
      <span>{{ age }}</span>
      <span class="bold">Пол:</span>
      <span>{{ gender }}</span>
      <span class="bold">СНИЛС:</span>
      <span>{{ current.snils }}</span>
      <span class="bold">Вес:</span>
      <span>{{ current.weight }} кг</span>
      <span class="bold">Рост:</span>
      <span>{{ current.height }} см</span>
    </div>
    <Button @click="createConsultation" name="Создать Консультацию" />

    <h3>Консультации</h3>
    <div class="consultations-view">
      <ConsultationCard
        v-for="consultation in consultStore.current"
        :key="consultation.consultId"
        :date="consultation.date"
        :time="consultation.time"
        :consultId="consultation.consultId"
        :userid="consultation.userid"
        @custom-change='deleteConsultation'
      />
    </div>
  </div>
</template>

<script>
import { useEntitiesStore } from "@/stores/patients";
import { useConsultationsStore } from "@/stores/consultations";
import { useRoute } from "vue-router";
import { calculate_age } from "@/service";
import Button from "@/components/Button.vue";
import ConsultationCard from "@/components/ConsultationCard.vue";
import router from "../router";
export default {
  name: "About Patient",
  setup() {
    const store = useEntitiesStore();
    const consultStore = useConsultationsStore();
    const route = useRoute();
    const id = route.params.id;
    const current = store.patients.find((patient) => {
      if (patient.id === id) {
        return patient;
      }
      return null;
    });
    consultStore.filterConsultations(id);
    return { store, current, consultStore, id };
  },
  components: {
    Button,
    ConsultationCard,
  },
  data() {
    return {
      consultations: "",
    };
  },
  computed: {
    age() {
      return calculate_age(this.current.birthdate);
    },
    gender() {
      return this.current.gender === "Male" ? "Мужчина" : "Женщина";
    },
  },
  methods: {
    createConsultation() {
      router.push({ name: "createConsultation", params: { id: this.id } });
    },
    deleteConsultation(consultId) {
      this.consultStore.deleteConsultation(consultId)
    }
  },
};
</script>

<style scoped>
.usercard {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  min-height: calc(100vh - 100px);
}

.userinfo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  flex-basis: 30%;
  padding: 0.5rem;
  border-radius: 5px;
}
.consultations-view {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.bold {
  font-weight: bold;
}
span {
  width: 45%;
}
@media (max-width: 414px) {
  .usercard {
    flex-direction: column;
  }
}
</style>
