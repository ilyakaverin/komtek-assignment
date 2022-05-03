<template>
  <div class="createConsultationWrap">
    <form>
      <h3>Выберите дату консультации</h3>
      <input
        type="date"
        name="datepick"
        :min="currentDate"
        v-model="date"
        @click="clear"
      />
      <div class="timepick">
        <div v-if="date" class="innerTimePick">
          <RadioInput
            v-for="(timepick, idx) in timepicks"
            :key="idx"
            :id="String(idx)"
            :date="date"
            v-model:time="time"
            name="time"
            :value="timepick"
            :for="idx"
            :consultId="consultId"
          />
        </div>
      </div>
      <h3>Симптомы</h3>
      <textarea
        v-model="simptoms"
        name="simptoms"
        id="simptoms"
        cols="30"
        rows="10"
        placeholder="Type..."
      ></textarea>
    </form>
    <div class="submit-consultation">
      <span class="bold">Дата:</span>
      <span>{{ date }}</span>
      <span class="bold">Время:</span>
      <span>{{ time }}</span>
      <span class="bold">Симптомы:</span>
      <span>{{ simptoms }}</span>
      <Button
        @click="action"
        :name="current === undefined ? 'Записать' : 'Обновить запись'"
        v-if="time && date"
      />
    </div>
  </div>
</template>

<script>
import RadioInput from "@/components/RadioInput.vue";
import Button from "@/components/Button.vue";
import { format } from "date-fns";
import { useConsultationsStore } from "@/stores/consultations";
import { useRoute } from "vue-router";
import { nanoid } from "nanoid";
import { Consultation } from "../classes";

export default {
  setup() {
    const consultStore = useConsultationsStore();
    const route = useRoute();
    const id = route.params.id;
    const consultId = route.params.consultId;
    const current = consultStore.consultations.find(
      (consultation) => consultation.consultId === consultId
    );

    return { consultStore, id, current, consultId };
  },
  components: {
    RadioInput,
    Button,
  },
  data() {
    return {
      date: this.current?.date,
      time: this.current?.time,
      timepicks: [
        "08:00 - 09:00",
        "09:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
        "15:00 - 16:00",
        "16:00 - 17:00",
        "17:00 - 18:00",
        "18:00 - 19:00",
        "19:00 - 20:00",
      ],
      simptoms: this.current?.simptoms,
    };
  },
  computed: {
    currentDate() {
      return format(Date.now(), "yyyy-MM-dd");
    },
  },
  methods: {
    send() {
      const userid = this.id;
      const date = this.date;
      const time = this.time;
      const simptoms = this.simptoms;
      const consultationId = nanoid();
      const consultation = new Consultation(
        consultationId,
        userid,
        date,
        time,
        simptoms
      );
      this.consultStore.addConsultation(consultation);
      this.$router.push({ name: "about", params: { id: this.id } });
    },
    clear() {
      this.date = null;
    },
    update() {
      const userid = this.id;
      const date = this.date;
      const time = this.time;
      const consultationId = this.consultId;
      const simptoms = this.simptoms;

      const consultation = new Consultation(
        consultationId,
        userid,
        date,
        time,
        simptoms
      );
      this.consultStore.updateConsultation(consultation);
      this.$router.push({ name: "about", params: { id: this.id } });
    },
    action() {
      this.current === undefined ? this.send() : this.update();
    },
  },
};
</script>

<style scoped>
.createConsultationWrap {
  display: flex;
  align-items: stretch;
  height: calc(100vh - 150px);
  gap: 1rem;
  padding: 2rem;
  justify-content: center;
}
h3 {
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-basis: 40%;
}
.timepick {
  height: 200px;
}
.innerTimePick {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  grid-gap: 0.3rem;
}
.submit-consultation {
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;
  border: 3px solid black;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
}
.submit-consultation span {
  min-height: 25px;
  display: inline-block;
  width: 100%;
  text-align: center;
}
.submit-consultation span:nth-child(6) {
  min-height: 25px;
  word-break: break-all;
}
input {
  padding: 1rem;
  width: 100%;
  border: 2px solid black;
}
textarea {
  width: 100%;
  border: 2px solid black;
  border-radius: 5px;
  resize: none;
  padding: 1rem;
}
</style>
