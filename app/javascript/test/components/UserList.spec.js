import { mount, createLocalVue } from '@vue/test-utils'
import UserList from '../../src/components/UserList.vue'
import Vuex from 'vuex'

import VueCompositionApi from '@vue/composition-api'

  let store

  beforeEach(() => {
    let usersActions = {
      loadUsers: jest.fn(),
    }
    store = new Vuex.Store({
      modules: {
        users: {
          namespaced: true,
          actions: usersActions
        }
      }
    })
  })

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(Vuex)

describe('UserList', () => {
  test('load Users when mounted', () => {
    const wrapper = mount(UserList, {
      store,
      localVue
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
