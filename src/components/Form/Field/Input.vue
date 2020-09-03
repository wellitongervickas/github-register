<template>
  <div class="input">
    <form-label
      :id="field.id"
      :required="required(field)"
    >
      {{ field.label }}
    </form-label>

    <input
      :class="classes"
      v-model="value"

      ref="field"

      v-mask="mask"

      :id="field.id"
      :name="field.id"
      :placeholder="field.placeholder"
      :type="currentType"

      @input="onInput"
      @blur="onBlur"
    />

    <div v-if="error" class="form__error">
      {{ error }}
    </div>

    <div
      v-if="field.type === 'password'"
      class="input__icon"
    >
      <font-awesome-icon
        @click="onChangePasswordType"
        :icon="passwordIcon"
      />
    </div>
  </div>
</template>

<script>
import FormLabel from '@/components/Form/Label.vue';
import validators from '@/helpers/validators';

export default {
  name: 'components-form-input',
  components: {
    FormLabel,
  },
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    value: '',
    error: '',
    currentType: null,
  }),
  computed: {
    passwordIcon() {
      return this.currentType === 'password' ? 'eye' : 'eye-slash';
    },
    mask() {
      return this.field.mask || null;
    },
    classes() {
      const classes = ['input__field'];

      if (this.error) {
        classes.push('input__field-state--error');
      }

      return classes;
    },
  },
  mounted() {
    this.currentType = this.field.type;
  },
  methods: {
    required(field) {
      return !!(
        field.validations
          && field.validations.find((validation) => validation.type === 'blank')
      );
    },

    onChangePasswordType() {
      this.currentType = this.currentType === 'password' ? 'text' : 'password';
    },

    onValidate(value) {
      const { field } = this;
      if (field.validations && field.validations) {
        const error = field.validations
          .find((validation) => validators[validation.type].validate(value, validation));

        this.error = (error && validators[error.type].message(value, error));
        return error;
      }
      return null;
    },

    onBlur({ target }) {
      this.onValidate(target.value);
      this.change(target.value);
    },

    onInput({ target }) {
      this.input(target.value);
    },

    input(value) {
      this.$emit('input', value);
    },

    change(value) {
      this.$emit('change', value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  position: relative;

  .input__icon {
    position: absolute;
    top: 2rem;
    right: 0.9rem;
  }

  .input__icon {
    cursor: pointer;
  }

  .input__field {
    flex: 1;
    width: 100%;
    border-radius: 0.3rem;
    border: 1px solid $gray;
    line-height: 2.4rem;
    padding: 0 1rem;
    min-height: 2.5rem;
    max-height: 2.5rem;

    &::placeholder {
      color: $warmGray;
    }

    &.input__field-state--error {
      border: 1px solid $red;
    }
  }

  .form__error {
    color: $red;
    font-size: 0.8rem;
    margin-top: 0.4rem;
  }
}
</style>
