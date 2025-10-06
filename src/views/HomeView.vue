<script setup lang="ts">
import { reactive } from 'vue'
import { useEventStore, type Events } from '../stores/events'
const eventStore = useEventStore()
const events = eventStore.events;

const newEvents = reactive<Omit<Events, 'id'>>({
  name: '',
  description: '',
  date: '',
  priority: 'high',
})

const addEvent = () => {
  eventStore.createEvent(newEvents)
  newEvents.name = ''
  newEvents.description = ''
  newEvents.date = ''
  newEvents.priority = 'high'
}
</script>

<template>
  <main>
    <h1>Events</h1>
    <ul>
      <li v-for="event in events" :key="event.id">{{ event.name }}</li>
    </ul>

    <form @submit.prevent="addEvent">
      <input v-model="newEvents.name" type="text" placeholder="Event name" />
      <input v-model="newEvents.description" type="text" placeholder="Event description" />
      <input v-model="newEvents.date" type="text" placeholder="Event date" />
      <select v-model="newEvents.priority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit">Add Event</button>
    </form>
  </main>
</template>
