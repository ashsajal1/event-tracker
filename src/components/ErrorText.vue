<template>
  <p v-if="error" class="error">{{ error }}</p>
</template>

<script setup lang="ts">
defineProps<{
  error: string
}>()
</script>

<style scoped>
.error {
  color: rgb(211, 58, 58);
}
</style>
