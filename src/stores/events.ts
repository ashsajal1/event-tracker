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
  const Event = ref<Event[]>([])

  const createEvent = (event: Omit<Event, 'id'>) => {
    Event.value.push({ ...event, id: uuid() })
  }

  const deleteEvent = (id: string) => {
    Event.value = Event.value.filter((event) => event.id !== id)
  }

  const updateEvent = (id: string, event: Event) => {
    Event.value = Event.value.map((event) => (event.id === id ? event : event))
  }

  const getEventById = (eventId: string) => {
    return Event.value.find((event) => event.id === eventId)
  }

  return { Event, createEvent, deleteEvent, updateEvent, getEventById }
})
