<template>
  <div class="login">
    <section class="login__background">
      <transition
        name="fade"
        appear
      >
        <div class="login__background__greeting">
          <paragraph font-size="1.25rem">
            "Obtive crédito para capital de giro. O processo foi bem
            sucedido e tudo que foi abordado, foi cumprido."
            <greeting prefix="Camila bragança" sufix="Sideral Tecnologia" />
          </paragraph>
        </div>
      </transition>
    </section>
    <section class="login__content" key="content">
      <transition
        name="fade"
        appear
      >
        <header-bar key="header-bar" />
      </transition>
      <main class="login__content__main">
        <Heading type="h2" font-size="1.5rem" class="login__content__heading">
          Criar meu cadastro
        </Heading>
        <paragraph>
          Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.
        </paragraph>
      </main>
    </section>
  </div>
</template>

<script>
import Greeting from '@/components/Greeting/Personal.vue';
import Heading from '@/components/Typography/Heading.vue';
import Paragraph from '@/components/Typography/Paragraph.vue';
import HeaderBar from '@/components/Header/Bar.vue';

export default {
  name: 'views-auth-login',
  components: {
    Greeting,
    HeaderBar,
    Heading,
    Paragraph,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.login {
  display: flex;
  height: 100%;
}

.login__content {
  flex: 2;
  display: grid;
  grid-template-rows: 4rem 1fr;
  overflow-y: auto;
}

.login__content__main {
  max-width: 340px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  @media screen and (min-width: $breakPointWidescreen) {
    text-align: center;
  }
}

.login__content__heading {
  margin-bottom: 0.5rem;
}

.login__background {
  flex: 1;
  background: url('~@/assets/images/login-background.jpg') $grayDark center top no-repeat;
  background-size: 100%;
  display: flex;
  align-items: flex-end;

  .login__background__greeting {
    width: 100%;
    padding: 1.5rem;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.8), black);
    display: flex;
    justify-content: flex-end;

    p {
      text-align: right;
      max-width: 80%;
      color: $white;
    }
  }

  @media screen and (max-width: $breakPointWidescreen) {
    display: none;
  }
}

</style>
