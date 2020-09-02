<template>
  <fieldset class="input">
    <form-label
      :id="field.id"
      :required="required(field)"
    >
      {{ field.label }}
    </form-label>
    <input
      class="input__field"
      v-model="value"

      :id="field.id"
      :name="field.id"
      :placeholder="field.placeholder"
      :type="field.type"

      @input="onInput"
      @blur="onBlur"
    />
    <div v-if="error" class="form__error">
      {{ error }}
    </div>
  </fieldset>
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
  }),
  methods: {
    required(field) {
      return !!(
        field.validations
          && field.validations.find((validation) => validation.type === 'blank')
      );
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
      this.$emit('change', target.value);
    },
    onInput({ target }) {
      this.$emit('input', target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.input{
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  .input__field {
    flex: 1;
    width: 100%;
    border-radius: 0.3rem;
    border: 1px solid $gray;
    line-height: 2.4rem;
    padding: 0 1rem;

    &::placeholder {
      color: $warmGray;
    }
  }

  .form__error {
    color: $red;
    font-size: 0.8rem;
    margin-top: 0.4rem;
  }
}
</style>
