import { describe, it, expect, vi, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import NavMenu from '../NavMenu.vue'
import { Moon, Sun } from 'lucide-vue-next'

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

  let wrapper: ReturnType<typeof mount>

  const createWrapper = () => {
    return mount(NavMenu, {
      global: {
        stubs: {
          Moon,
          Sun,
        },
      },
    })
  }

  beforeEach(() => {
    // Reset dom
    document.documentElement.removeAttribute('data-theme')
    wrapper = createWrapper()
  })

  it('renders moon icon in light mode', () => {
    const moonIcon = wrapper.findComponent(Moon)
    expect(moonIcon.exists()).toBe(true)
  })

  it('toggles dark and light mode', async () => {
    const button = wrapper.find('button')

    await button.trigger('click')

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })
})
