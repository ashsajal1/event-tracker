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
<style lang=""></style>
