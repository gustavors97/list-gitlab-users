import "core-js/stable";
import "regenerator-runtime/runtime";
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import FormView from '@/views/FormView.vue';

describe("FormView", () => {
  let wrapper;

  beforeAll(() => {
    const vuetify = new Vuetify()
    wrapper = mount(FormView, {
      vuetify
    });
  });

  test("Setting values but forgetting a required field", async () => {
    const html = wrapper.html();
    console.log(html)
    const input = wrapper.find('input[id="input-6');
    input.setValue("Lorem ipsum");
    expect(wrapper.text()).toContain("Lorem ipsum");
  })
})