<script setup lang="ts"></script>

<template>
  <main class="main">
    <header>Event tracker</header>

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
