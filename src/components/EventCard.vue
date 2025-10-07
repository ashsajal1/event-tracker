<template>
  <div>{{ event.name }}</div>
</template>

<script lang="ts" setup>
import { type Events } from '../stores/events'

defineProps<{
  event: Events
}>()
</script>

<style lang="scss"></style>
