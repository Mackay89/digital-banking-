import { mount } from '@vue/test-utils'
import AccountDashboard from '@/components/AccountDashboard.vue'

describe('AccountDashboard.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(AccountDashboard, {
      propsData: {
        accountData: {
          balance: 1000,
          accountNumber: '12345'
        }
      }
    })
  })

  it('renders account balance correctly', () => {
    expect(wrapper.find('.account-balance').text()).toBe('Balance: 1000')
  })

  it('displays account number', () => {
    expect(wrapper.find('.account-number').text()).toBe('Account Number: 12345')
  })
})

