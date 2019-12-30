import { shallowMount } from '@vue/test-utils';
import MessageToggle from '@/components/MessageToggle.vue';
import Message from '@/components/Message.vue';

describe('MessageToggle.vue', () => {
  it('toggles msg passed to Message when button is clicked', () => {
    const wrapper = shallowMount(MessageToggle);
    const button = wrapper.find('#toggle-message');
    const MessageComponent = wrapper.find(Message);

    button.trigger('click');
    expect(MessageComponent.props()).toEqual({ msg: 'message' });

    button.trigger('click');
    expect(MessageComponent.props()).toEqual({ msg: 'toggled message' });
  });

  it('matches snapshot', () => {
    const wrapper = shallowMount(MessageToggle);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
