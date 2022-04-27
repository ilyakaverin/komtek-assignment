<template>
  <div class="radio">
    <input
      :disabled="this.busy.length > 0 && this.busy[0].consultId !== consultId"
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="this.busy[0] && this.busy[0].consultId === consultId"
      @input="$emit('update:time', $event.target.value)"
    />
    <label
      :class="{
        disabled: this.busy.length > 0 && this.busy[0].consultId !== consultId,
      }"
      :for="this.id"
      >{{ value }}</label
    >
  </div>
</template>

<script>
import { useConsultationsStore } from "../stores/consultations";

export default {
  name: "RadioInput",
  props: {
    id: String,
    name: String,
    value: String,
    date: String,
    consultId: String,
  },
  setup() {
    const store = useConsultationsStore();
    return { store };
  },
  data() {
    return {
      time: this.value,
      busy: [],
      pickedDate: this.date,
    };
  },
  computed: {},
  methods: {},
  mounted() {
    this.busy = this.store.consultations.filter(
      (consultation) =>
        consultation.time === this.time && consultation.date === this.date
    );
  },
};
</script>

<style scoped>
.radio {
  cursor: pointer;
  display: flex;
  align-items: stretch;
}
input[type="radio"] {
  display: none;
}
label {
  text-align: center;
  width: 100%;
  padding: 0.5rem;
  cursor: pointer;
  border: 2px solid black;
}
input[type="radio"]:checked + label {
  border: 2px solid red;
}
.disabled {
  color: #cacaca;
  border: 2px solid #cacaca;
}
</style>
