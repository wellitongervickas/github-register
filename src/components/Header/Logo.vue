<template>
  <transition
    name="fade"
    appear
  >
    <a
      href="https://github.com/wellitongervickas"
      target="_blank"
      :title="title"
    >
      <img src="@/assets/images/logo.png" :alt="title" height="30" />
    </a>
  </transition>
</template>

<script>

export default {
  name: 'components-header-logo',
  data: () => ({
    title: 'Welliton gervickas on Github',
  }),
};
</script>
