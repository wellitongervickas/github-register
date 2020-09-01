<template>
  <transition
    name="fade"
    appear
  >
    <section>
      <header-bar />
    </section>
    <section>
      Content
    </section>
  </transition>
</template>

<script>
import HeaderBar from '@/components/Header/Bar.vue';

export default {
  name: 'views-auth-login',
  components: {
    HeaderBar,
  },
};
</script>
