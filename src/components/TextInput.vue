<template>
  <section>
    <span>{{ placeholder }}</span>
    <input
      :class="[
        errorObject && errorObject.property !== undefined ? 'danger' : null,
      ]"
      :type="type"
      :placeholder="placeholder"
      @input="$emit(`update:${inputName}`, $event.target.value)"
      v-model="field"
      :maxlength="maxLength"
    />
    <div v-if="errorObject" class="errorContainer">
      <span
        v-for="(error, index) in Object.values(errorObject.constraints)"
        :key="index"
        class="error"
        >{{ error }}</span
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    inputName: String,
    placeholder: String,
    errors: Array,
    type: String,
    fieldProp: String,
    maxLength: String,
  },
  data() {
    return {
      field: this.fieldProp,
    };
  },
  computed: {
    errorObject() {
      const data = this.errors.find(
        (error) => error.property === this.inputName
      );
      return this.errors.find((error) => error.property === this.inputName);
    },
  },
};
</script>

<style scoped>
input {
  padding: 10px;
  width: 100%;
  border: 2px solid black;
  margin-top: 5px;
}
.error {
  color: red;
}
.danger {
  border: 2px solid red;
}
.errorContainer {
  display: flex;
  flex-direction: column;
}
</style>
