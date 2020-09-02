<template>
  <header class="header__bar">
    <slot />
    <div class="header__logo">
      <logo />
    </div>
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
  position: relative;
  border-bottom: 1px solid $gray;
  padding: $sizeDefault * 1.25 $sizeDefault * 2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: $breakPointDesktop) {
    border-bottom: none;
  }
}

.header__logo {
  flex: 1;
  text-align: right;
}
</style>
