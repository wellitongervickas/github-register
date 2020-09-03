<template>
  <form
    class="form"
    @submit.prevent="onSubmit"
    novalidate
  >
    <div class="form__fields">
      <component
        ref="field"
        v-for="field in sections"
        :is="type(field.type)"
        :key="field.id"
        :field="field"
        :class="classes(field)"
      />
    </div>
    <div class="form__footer">
      <slot name="footer" />
    </div>
    <div class="form__button">
      <form-button type="submit" :icon="button.icon" :disabled="disabled">
        {{ button.label }}
      </form-button>
    </div>
  </form>
</template>

<script>
import FormButton from '@/components/Form/Button.vue';
import FormInput from '@/components/Form/Field/Input.vue';

export default {
  name: 'components-form',
  components: {
    FormButton,
    FormInput,
  },
  props: {
    button: {
      type: Object,
      default: () => ({
        label: 'Salvar',
        icon: null,
      }),
    },
    sections: {
      type: Array,
      required: true,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    classes(field) {
      const classes = [
        `input--size-${field.size || 4}`,
      ];

      return classes;
    },
    type(type) {
      if (['text', 'password', 'email', 'date', 'tel'].includes(type)) {
        return 'form-input';
      }

      return 'span';
    },

    onSubmit() {
      const fields = this.$refs.field || [];

      const map = Object.fromEntries(
        Object.entries(fields).map(([, item]) => [[item.field.id], item.value]),
      );

      if (!fields.filter((field) => field.onValidate(field.value)).length) {
        this.submit(map);
      } else {
        this.error();
      }
    },

    submit(map) {
      this.$emit('submit', map);
    },

    error() {
      this.$emit('error');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.form {
  .form__fields {
    margin-bottom: 1rem;
    display: flex;
    align-items: flex-start;
    flex-flow: wrap;
    justify-content: space-between;
  }

  .form__footer {
    margin-bottom: 1rem;
  }

  .input--size-4 {
    flex: 0 0 100%;
  }

  .input--size-2 {
    flex: 0 0 45%;

    @media screen and (max-width: $breakPointTablet) {
      flex: 0 0 100%;
    }
  }
}
</style>
