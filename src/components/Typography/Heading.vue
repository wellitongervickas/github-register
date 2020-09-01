<template>
  <component :is="type" :style="{ fontSize }">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'components-typography-heading',
  props: {
    fontSize: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: () => 'h1',
      validator(value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

h1 {
  font-weight: $bold;
  font-size: 2rem;
}

h2 {
  font-weight: $bold;
  font-size: 1.75rem;
}

h3 {
  font-weight: $bold;
  font-size: 1.5rem;
}

h4 {
  font-size: 1rem;
}

h5, h6 {
  font-size: 0.85rem;
}

h5 {
  font-weight: $bold;
}
</style>
