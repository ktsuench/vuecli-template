import { shallowMount } from '@vue/test-utils';
import Message from '@/components/Message.vue';

describe('Message', () => {
  describe('props.msg properties', () => {
    const wrapper = shallowMount(Message, { propsData: { msg: '' } });
    const msgProps = wrapper.vm.$options.props.msg;

    it('prop type is string', () => {
      expect(msgProps.type).toBe(String);
    });

    it('prop has default and default is an empty string', () => {
      expect(msgProps.default).toBe('default message');
    });
  });

  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Message, {
      propsData: { msg },
    });
    expect(wrapper.text()).toBe(msg);
  });

  it('renders default message if not passed a prop', () => {
    const defaultMessage = 'default message';
    const wrapper = shallowMount(Message);
    expect(wrapper.text()).toBe(defaultMessage);
  });

  it('matches snapshot', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Message, {
      propsData: { msg },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
