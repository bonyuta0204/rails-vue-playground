import { mount, createLocalVue } from '@vue/test-utils'
import Test from '../../src/components/test.vue'

import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('Test', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Test, {
      localVue
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
