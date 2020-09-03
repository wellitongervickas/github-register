<template>
  <button
    :class="classes"
    :type="type"
    :disabled="disabled"

    @click="click"
  >
    <font-awesome-icon v-if="icon" :icon="icon" />
    <span class="button__text">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'components-form-button',
  props: {
    icon: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'button',
    },
    color: {
      type: String,
      default: 'blue',
      validator(value) {
        return ['blue'].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const classes = ['button'];

      if (this.color === 'blue') {
        classes.push('button--blue');
      }

      return classes;
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.button {
  cursor: pointer;
  color: $white;
  border-radius: 0.3rem;
  width: 100%;
  line-height: 3rem;;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  transition: all 0.18s ease-in;
  border: none;
  background-color: $green;

  .button__text {
    flex: 1;
    text-align: center;
    font-weight: $bold;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:active {
    box-shadow: 0 0 1px 4px rgba($green, 0.3);
  }

  &.button--blue {
    background-color: $blue;

    &:active {
      box-shadow: 0 0 1px 4px rgba($blue, 0.3);
    }
  }
}

</style>
