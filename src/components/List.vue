<template>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  props: {
    items: {
      type: Array,
      default: () => [],
      validator: prop => prop.every(item => typeof item === 'string'),
    },
  },
};
</script>
