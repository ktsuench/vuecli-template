<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <message-toggle />
    <list :items="['list item 1', 'list item 2', 'list item 3']" />
  </div>
</template>

<script>
// @ is an alias to /src
import MessageToggle from '@/components/MessageToggle.vue';
import List from '@/components/List.vue';
export default {
  name: 'home',
  components: {
    MessageToggle,
    List,
  },
};
</script>
