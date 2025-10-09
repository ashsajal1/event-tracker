import { ref } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export interface Event {
  id: string
  name: string
  description: string
  date: string
  priority?: 'high' | 'medium' | 'low'
}

export const useEventtore = defineStore('Event', () => {
  const events = ref<Event[]>([])

  const createEvent = (event: Omit<Event, 'id'>) => {
    events.value.push({ ...event, id: uuid() })
  }

  const deleteEvent = (id: string) => {
    events.value = events.value.filter((event) => event.id !== id)
  }

  const updateEvent = (id: string, event: Event) => {
    events.value = events.value.map((ev) => (ev.id === id ? event : ev))
  }

  const getEventById = (eventId: string) => {
    return events.value.find((event) => event.id === eventId)
  }

  return { events, createEvent, deleteEvent, updateEvent, getEventById }
})
