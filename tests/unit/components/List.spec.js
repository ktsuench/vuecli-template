import { shallowMount } from '@vue/test-utils';
import List from '@/components/List.vue';

describe('List.vue', () => {
  describe('props.items property', () => {
    const wrapper = shallowMount(List, { propsData: { items: [] } });
    const itemsProp = wrapper.vm.$options.props.items;

    it('prop type is array', () => {
      expect(itemsProp.type).toBe(Array);
    });

    it('prop has default and default is an empty array', () => {
      const defaultVal = itemsProp.default;
      expect(defaultVal).toBeInstanceOf(Function);
      expect(defaultVal()).toStrictEqual([]);
    });

    it('prop has validation function', () => {
      const { validator } = itemsProp;
      expect(validator).toBeInstanceOf(Function);
      expect(validator([])).toBeTruthy();
      expect(validator([''])).toBeTruthy();
      expect(validator([1, {}, [], ''])).toBeFalsy();
    });
  });

  it('renders li for each item in props.items', () => {
    const items = ['1', '2'];
    const wrapper = shallowMount(List, {
      propsData: { items },
    });
    expect(wrapper.findAll('li')).toHaveLength(items.length);
  });

  it('matches snapshot', () => {
    const items = ['item 1', 'item 2'];
    const wrapper = shallowMount(List, {
      propsData: { items },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
