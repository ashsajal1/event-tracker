<template>
  <nav>
    <h3>Logo</h3>
    <div>
      <button @click="toggleDark()">{{ isDark ? 'Light' : 'Dark' }}</button>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid var(--border-color);

  div {
     button {
      padding: 12px;
      background-color: var(--bg-color);
     }
  }
}
</style>
