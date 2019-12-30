<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: 'message',
  props: {
    msg: {
      type: String,
      default: 'default message',
    },
  },
};
</script>
