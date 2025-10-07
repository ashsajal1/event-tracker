<script setup lang="ts">
import EventForm from '@/components/EventForm.vue'
import { useEventStore } from '../stores/events'
import EventCard from '@/components/EventCard.vue'
const eventStore = useEventStore()
const events = eventStore.events
</script>

<template>
  <main class="container">
    <section class="events-section">
      <h1>Events</h1>
      <template v-for="event in events" :key="event.id">
        <EventCard :event="event" />
      </template>
    </section>

    <section class="form-section">
      <EventForm />
    </section>
  </main>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;

  section {
    width: 100%;
    margin: 12px;
  }

  .form-section {
    width: 400px;
    position: sticky;
    top: 20px;
  }
}
</style>
