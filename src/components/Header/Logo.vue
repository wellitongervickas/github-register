<template>
  <transition
    name="fade"
    appear
  >
    <a
      href="https://www.bcredi.com.br/"
      target="_blank"
      :title="title"
    >
      <img src="@/assets/images/logo.svg" :alt="title" height="24" width="75" />
    </a>
  </transition>
</template>

<script>

export default {
  name: 'components-header-logo',
  data: () => ({
    title: 'Bcredi Crédito Descomplicado',
  }),
};
</script>
