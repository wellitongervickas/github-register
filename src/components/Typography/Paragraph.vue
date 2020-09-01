<template>
  <p :is="type" :style="{ fontSize }">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'components-typography-paragraph',
  props: {
    fontSize: {
      type: String,
      default: '1rem',
    },
    type: {
      type: String,
      default: () => 'p',
      validator(value) {
        return ['p', 'span', 'article'].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

p {
  font-weight: $normal;
  line-height: 1.4;
  color: $warmGray;
}
</style>
