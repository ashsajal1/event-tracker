import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import NavMenu from "../NavMenu.vue"

describe('NavMenu component', () => {
  it('should render properly render', () => {
    const wrapper = mount(NavMenu);
    expect(wrapper.exists()).toBe(true);
  })
 })
