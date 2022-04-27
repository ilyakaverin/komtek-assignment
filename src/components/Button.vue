<template>
  <button>{{ name }}</button>
</template>

<script>
export default {
  name: "Button component",
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
button:active {
  transform: translateY(4px);
}
</style>
