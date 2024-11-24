import { mount } from '@vue/test-utils'
import TaxReport from '@/components/TaxReport.vue'

describe('TaxReport.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TaxReport, {
      propsData: {
        taxData: {
          totalTax: 150,
          taxableIncome: 1000
        }
      }
    })
  })

  it('displays the total tax correctly', () => {
    expect(wrapper.find('.total-tax').text()).toBe('Total Tax: 150')
  })

  it('displays taxable income', () => {
    expect(wrapper.find('.taxable-income').text()).toBe('Taxable Income: 1000')
  })
})

