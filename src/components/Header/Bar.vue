<template>
  <header class="header__bar">
    <logo />
  </header>
</template>

<script>
import Logo from '@/components/Header/Logo.vue';

export default {
  name: 'components-header-bar',
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.header__bar {
  border-bottom: 1px solid $gray;
  padding: $sizeDefault * 1.25 $sizeDefault * 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: $breakPointDesktop) {
    border-bottom: none;
  }
}
</style>
