<script setup lang="ts">
import NavMenu from './components/NavMenu.vue'
</script>

<template>
  <main class="main">
    <NavMenu />

    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;

  header {
    padding: 1rem;
  }
}
</style>
