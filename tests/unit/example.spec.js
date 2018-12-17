import { mount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

function configureVue(Vue) {
  Vue.component('foo-true', {
    render(h) { return h("span", "true!") }
  })
  Vue.component('foo-false', {
    render(h) { return h("span", "false!") }
  })

}

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const vue = createLocalVue();
    configureVue(vue);
    const wrapper = mount(HelloWorld, {
      localVue: vue
    })
    expect(wrapper.text()).toMatch("true")
  })
})
