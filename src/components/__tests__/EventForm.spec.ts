import EventForm from '../EventForm.vue'
import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'

describe('EventForm', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should render properly', () => {
    const wrapper = mount(EventForm)
  })
})
