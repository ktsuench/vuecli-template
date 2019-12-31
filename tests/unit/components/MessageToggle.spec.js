import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import MessageToggle from '@/components/MessageToggle.vue';
import Message from '@/components/Message.vue';

describe('MessageToggle.vue', () => {
  describe('data.msg property', () => {
    const wrapper = shallowMount(MessageToggle);
    const msgData = wrapper.vm.$data.msg;

    it('is null', () => {
      expect(msgData).toBeNull();
    });
  });

  it('toggles msg passed to Message when button is clicked', async () => {
    const wrapper = shallowMount(MessageToggle);
    const button = wrapper.find('#toggle-message');
    const MessageComponent = wrapper.find(Message);

    button.trigger('click');
    await Vue.nextTick();
    expect(MessageComponent.props()).toEqual({ msg: 'message' });

    button.trigger('click');
    await Vue.nextTick();
    expect(MessageComponent.props()).toEqual({ msg: 'toggled message' });
  });

  it('matches snapshot', () => {
    const wrapper = shallowMount(MessageToggle);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
