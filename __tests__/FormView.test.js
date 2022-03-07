import "core-js/stable";
import "regenerator-runtime/runtime";
import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import Formview from '@/views/FormView.vue'

describe("FormView.vue", () => {
  const localVue = createLocalVue()
  let vuetify
  let wrapper

  beforeAll(() => {
    vuetify = new Vuetify()

    wrapper = mount(Formview, {
      localVue,
      vuetify,
    })
  });

  test('The component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('The correct properties are available in the form component', () => {
    const expected = ['name', 'details', 'startDate', 'endDate', 'search']
    const received = Object.keys(wrapper.vm.$data.data)

    expect(received).toEqual(expected)
  })
})