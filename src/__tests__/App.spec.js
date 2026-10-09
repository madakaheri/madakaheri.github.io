import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders the travel landing page and its three stories', () => {
    const wrapper = mount(App)

    expect(wrapper.find('h1').text()).toContain('静けさの、')
    expect(wrapper.findAll('.story')).toHaveLength(3)
    expect(wrapper.find('footer').text()).toContain(`© ${new Date().getFullYear()} madakaheri`)
  })

  it('switches carousel slides with the next control', async () => {
    const wrapper = mount(App)

    await wrapper.get('[aria-label="次のスライド"]').trigger('click')

    expect(wrapper.find('h1').text()).toContain('風の音に、')
    expect(wrapper.get('[aria-label="2枚目のスライド"]').attributes('aria-pressed')).toBe('true')
  })
})
