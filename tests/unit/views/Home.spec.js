import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import List from '@/components/List.vue';
import MessageToggle from '@/components/MessageToggle.vue';

describe('Home.vue', () => {
  describe('data.listItems property', () => {
    const wrapper = shallowMount(Home);
    const listItemsData = wrapper.vm.$data.listItems;

    it('is array of strings', () => {
      expect(listItemsData).toStrictEqual([
        'list item 1',
        'list item 2',
        'list item 3',
      ]);
    });
  });

  it('renders view', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.contains(List));
    expect(wrapper.contains(MessageToggle));
  });

  it('matches snapshot', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
