import { mount } from '@vue/test-utils'
import Dashboard from '@/views/Dashboard.vue'
import AccountDashboard from '@/components/AccountDashboard.vue'
import TaxReport from '@/components/TaxReport.vue'

describe('Dashboard.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Dashboard, {
      stubs: ['AccountDashboard', 'TaxReport']
    })
  })

  it('renders AccountDashboard component', () => {
    expect(wrapper.findComponent(AccountDashboard).exists()).toBe(true)
  })

  it('renders TaxReport component', () => {
    expect(wrapper.findComponent(TaxReport).exists()).toBe(true)
  })
})

