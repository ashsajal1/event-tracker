import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import NavMenu from '../NavMenu.vue'

vi.mock('@vueuse/core', () => ({
  useDark: vi.fn(() => ({
    value: false,
  })),
  useToggle: vi.fn((isDark) => {
    const toggle = () => {
      isDark.value = !isDark.value

      //simulate dom
      document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
    }
    return [isDark.value, toggle]
  }),
}))

describe('NavMenu component', () => {
  it('should render properly render', () => {
    const wrapper = mount(NavMenu)
    expect(wrapper.exists()).toBe(true)
  })
})
