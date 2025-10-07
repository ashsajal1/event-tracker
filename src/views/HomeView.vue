<script setup lang="ts">
import EventForm from '@/components/EventForm.vue';
import { useEventStore } from '../stores/events'
import EventCard from '@/components/EventCard.vue';
const eventStore = useEventStore()
const events = eventStore.events
</script>

<template>
  <main>
    <h1>Events</h1>
    <template v-for="event in events" :key="event.id">
      <EventCard :event="event" />
    </template>

    <EventForm />
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
}
</style>
