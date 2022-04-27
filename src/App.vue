<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="wrapper">
    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/add">Добавить пациента</RouterLink>
    </nav>
    <RouterView />
  </header>
</template>

<style>
@import "@/assets/base.css";

#app {
  font-weight: normal;
  max-width: 1200px;
  margin: 0 auto;
}

a,
.green {
  text-decoration: none;
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  padding: 15px;
}

nav a:first-of-type {
  border: 0;
}
</style>
