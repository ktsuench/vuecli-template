<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <message-toggle />
    <list :items="listItems" />
  </div>
</template>

<script>
// @ is an alias to /src
import MessageToggle from '@/components/MessageToggle.vue';
import List from '@/components/List.vue';
export default {
  name: 'home',
  data: () => ({
    listItems: ['list item 1', 'list item 2', 'list item 3'],
  }),
  components: {
    MessageToggle,
    List,
  },
};
</script>
