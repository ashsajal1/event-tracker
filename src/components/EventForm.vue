<template>
  <form @submit.prevent="addEvent">
    <input v-model="newEvent.name" type="text" placeholder="Event name" />
    <textarea v-model="newEvent.description" placeholder="Event description" />
    <input v-model="newEvent.date" type="date" placeholder="Event date" />
    <select v-model="newEvent.priority">
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
    <button class="btn" type="submit">Add Event</button>
  </form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useEventStore, type Event } from '../stores/events'
const eventtore = useEventStore()

const newEvent = reactive<Omit<Event, 'id'>>({
  name: '',
  description: '',
  date: new Date().toISOString().split('T')[0]!,
  priority: 'high',
})

const addEvent = () => {
  newEvent.date = new Date().toISOString().split('T')[0]!
  eventtore.createEvent(newEvent)
  newEvent.name = ''
  newEvent.description = ''
  newEvent.priority = 'high'
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;

  input,
  textarea,
  select {
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--bg-color);
    color: var(--text-color);
  }
}
</style>
