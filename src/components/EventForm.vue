<template>
  <form @submit.prevent="onSubmit">
    <input v-model="name" v-bind="nameAttr" type="text" placeholder="Event name" />
    <ErrorText :error="errors.name!" />
    <textarea v-model="description" v-bind="descriptionAttr" placeholder="Event description" />
    <ErrorText :error="errors.description!" />
    <input v-model="date" v-bind="dateAttr" type="date" placeholder="Event date" />
    <ErrorText :error="errors.date!" />
    <select v-model="priority" v-bind="priorityAttr">
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
    <button class="btn" type="submit">Add Event</button>
  </form>
</template>

<script lang="ts" setup>
import { useEventStore, type Event } from '../stores/events'
const eventStore = useEventStore()
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import ErrorText from './ErrorText.vue'
import z from 'zod'

const eventSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  date: z.string().min(1, 'Date is required'),
  priority: z.enum(['high', 'medium', 'low']),
})

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: toTypedSchema(eventSchema),
})

const [name, nameAttr] = defineField('name')
const [description, descriptionAttr] = defineField('description')
const [date, dateAttr] = defineField('date')
const [priority, priorityAttr] = defineField('priority')

const onSubmit = handleSubmit((values) => {
  eventStore.createEvent(values as Omit<Event, 'id'>)
})
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
