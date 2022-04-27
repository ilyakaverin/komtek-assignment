<template>
  <button>{{ name }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    name: String,
  },
};
</script>

<style scoped>
button {
  border: none;
  background: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  flex-basis: 10%;
}
button:hover {
  background: rgba(202, 202, 202, 0.9);
}
</style>
