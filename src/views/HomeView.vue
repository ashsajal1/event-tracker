<script setup lang="ts">
import EventForm from '@/components/EventForm.vue';
import { useEventStore } from '../stores/events'
const eventStore = useEventStore()
const events = eventStore.events
</script>

<template>
  <main>
    <h1>Events</h1>
    <ul>
      <li v-for="event in events" :key="event.id">{{ event.name }}</li>
    </ul>

    <EventForm />
  </main>
</template>

<style scoped lang="scss">
ul {
  li {
    list-style-type: none;
    margin: 10px 0;
  }
}
</style>
