<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'components-alert-inline',
  props: {
    center: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'danger',
      validator(value) {
        return ['success', 'danger', 'warning'].includes(value); // just an example
      },
    },
  },
  computed: {
    classes() {
      const classes = ['alert__inline'];

      if (this.type === 'success') {
        classes.push('alert__inline--success');
      }

      if (this.type === 'danger') {
        classes.push('alert__inline--danger');
      }

      if (this.center) {
        classes.push('alert__inline--center');
      }

      return classes;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.alert__inline {
  color: $white;
  padding: 1rem 2rem;
  width: 100%;

  &.alert__inline--center {
    text-align: center;
  }

  &.alert__inline--success {
    background-color: $green;
  }

  &.alert__inline--danger {
    background-color: $red;
  }
}
</style>
