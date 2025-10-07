<template>
  <div class="event-card">
    <h3>{{ event.name }}</h3>
    <div class="meta">
      <p class="date">{{ event.date }}</p>
      <p class="priority">{{ event.priority }}</p>
    </div>
    <p class="description">{{ event.description }}</p>
  </div>
</template>

<script lang="ts" setup>
import { type Events } from '../stores/events'

defineProps<{
  event: Events
}>()
</script>

<style lang="scss">
.event-card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  .meta {
    display: flex;
    gap: 2rem;
    margin-bottom: 0.5rem;
    align-items: center;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1.2rem;
  }
}
</style>
