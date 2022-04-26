<template>
  <div class="radio">
    <input
      :disabled="this.isDisabled"
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      @input="$emit('update:time', $event.target.value)"
    />
    <label :class="{ disabled: isDisabled }" :for="this.id">{{ value }}</label>
  </div>
</template>

<script>
export default {
  name: "RadioInput",
  props: {
    id: String,
    name: String,
    value: String,
  },
  data() {
    return {
      time: this.value,
      isDisabled: false,
    };
  },
  methods: {},
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
