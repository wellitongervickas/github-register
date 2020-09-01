<template>
  <div class="greeting__personal">
    <strong>{{prefix}}, </strong>
    <span>{{sufix}}</span>
  </div>
</template>

<script>
export default {
  name: 'components-greeting-personal',
  props: {
    prefix: {
      type: String,
      required: true,
    },
    sufix: {
      type: String,
      default: 'Bem-vindo',
    },
  },
};
</script>

<style lang="scss" scoped>
.greeting__personal {
  margin-top: 1rem;

  strong {
    display: block;
  }
}
</style>
