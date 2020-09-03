<template>
  <div class="term__policy">
    <div class="term__checkbox">
      <form-checkbox @change="check" />
    </div>
    <div>
      I'm agree to our <a>Terms of service</a>
      and <a>Privacy Statement.</a> We’ll occasionally send you account related emails.
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
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  border: 1px solid $gray;

  line-height: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.term__checkbox {
  margin-right: 1rem;
}
</style>
