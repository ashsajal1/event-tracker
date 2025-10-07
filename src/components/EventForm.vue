<template>
  <form @submit.prevent="addEvent">
    <input v-model="newEvents.name" type="text" placeholder="Event name" />
    <textarea v-model="newEvents.description" placeholder="Event description" />
    <input v-model="newEvents.date" type="date" placeholder="Event date" />
    <select v-model="newEvents.priority">
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
    <button class="btn" type="submit">Add Event</button>
  </form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useEventStore, type Events } from '../stores/events'
const eventStore = useEventStore()

const newEvents = reactive<Omit<Events, 'id'>>({
  name: '',
  description: '',
  date: new Date().toISOString().split('T')[0]!,
  priority: 'high',
})

const addEvent = () => {
  newEvents.date = new Date().toISOString().split('T')[0]!
  eventStore.createEvent(newEvents)
  newEvents.name = ''
  newEvents.description = ''
  newEvents.priority = 'high'
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;

  input,
  textarea,
  select,
  button {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
}
</style>
