import { mount } from '@vue/test-utils'
import Monitoring from '@/views/Monitoring.vue'

describe('Monitoring.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Monitoring, {
      propsData: {
        monitoringData: {
          transactionCount: 500,
          transactionSpeed: '5 TPS'
        }
      }
    })
  })

  it('displays transaction count', () => {
    expect(wrapper.find('.transaction-count').text()).toBe('Transaction Count: 500')
  })

  it('displays transaction speed', () => {
    expect(wrapper.find('.transaction-speed').text()).toBe('Transaction Speed: 5 TPS')
  })
})

