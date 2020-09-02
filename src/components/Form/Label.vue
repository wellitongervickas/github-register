<template>
  <label :for="id" class="label">
    <slot />
    <span v-if="required" class="label__required">*</span>
  </label>
</template>

<script>
export default {
  name: 'components-form-label',
  props: {
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.label {
  color: $warmGray;
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
}

.label__required {
  color: $red;
}

</style>
