<template>
  <div class="checkbox">
    <div class="checkbox__field" @click="onChange" >
      <font-awesome-icon v-if="checked" icon="check" />
    </div>
    <input type="checkbox" v-model="checked"/>
  </div>
</template>

<script>
export default {
  name: 'components-form-checkbox',
  data: () => ({
    checked: false,
  }),
  methods: {
    onChange() {
      this.checked = !this.checked;
      this.change();
    },

    change() {
      this.$emit('change', this.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.checkbox {
  input[type=checkbox] {
    display: none;
  }
}
.checkbox__field {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid $gray;
  border-radius: 0.3rem;
  color: $blue;
}
</style>
