import { mount } from '@cypress/vue'
import UserList from '../../app/javascript/src/components/UserList.vue'

it('renders a message', () => {
  mount(UserList, {
    propsData: {
    },
  })

  cy.get('h1').contains('Hello Cypress!')
})
