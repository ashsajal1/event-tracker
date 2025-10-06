import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Events {
  id: string
  name: string
  description: string
  date: string
  priority: 'high' | 'medium' | 'low'
}

export const useEventStore = defineStore('events', () => {
  const events = ref<Events[]>([])

  const createEvent = (event: Events) => {
    events.value.push(event)
  }

  const deleteEvent = (id: string) => {
    events.value = events.value.filter((event) => event.id !== id)
  }

  const updateEvent = (id: string, event: Events) => {
    events.value = events.value.map((event) => (event.id === id ? event : event))
  }

  const getEventById = (eventId: string) => {
    return events.value.find((event) => event.id === eventId)
  }

  return { events, createEvent, deleteEvent, updateEvent, getEventById }
})
