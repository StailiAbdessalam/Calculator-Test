<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="w-full h-[70px] ">
      <nav class="flex w-full justify-center items-center">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Calculator">Calculator Simple</RouterLink>
        <RouterLink to="/Equation1">équation 1er degré</RouterLink>
        <RouterLink to="/Equation2">équation 2er degré</RouterLink>
        
      </nav>
  </header>

  <body>
    <router-view></router-view>
  </body>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
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
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

  }
}
</style>
