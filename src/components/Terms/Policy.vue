<template>
  <div class="term__policy">
    <div class="term__checkbox">
      <form-checkbox @change="check" />
    </div>
    <div>
      Li e estou de acordo com a <a>Política de privacidade</a>
      e a <a>Política de Uso de Informações</a>
    </div>
  </div>
</template>

<script>
import FormCheckbox from '@/components/Form/Field/Checkbox.vue';

export default {
  name: 'components-terms-policy',
  components: {
    FormCheckbox,
  },
  methods: {
    check(bool) {
      this.$emit('check', bool);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.term__policy {
  font-size: 0.7rem;
  color: $warmGray;
  padding: 1rem;
  border-radius: 0.3rem;
  border: 1px solid $gray;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.term__checkbox {
  margin-right: 1rem;
}
</style>
