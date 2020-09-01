<template>
  <transition-group
    name="fade"
    appear
  >
    <section key="header">
      <header-bar />
    </section>
    <section key="content">
      <Heading type="h2" font-size="1.5rem">
        Criar meu cadastro
      </Heading>
    </section>
  </transition-group>
</template>

<script>
import Heading from '@/components/Typography/Heading.vue';
import HeaderBar from '@/components/Header/Bar.vue';

export default {
  name: 'views-auth-login',
  components: {
    HeaderBar,
    Heading,
  },
};
</script>
