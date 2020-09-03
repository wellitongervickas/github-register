<template>
  <div class="login">
    <section class="login__background">
      <div class="login__greeting">
        <paragraph font-size="1.25rem">
          "Obtive crédito para capital de giro. O processo foi bem
          sucedido e tudo que foi abordado, foi cumprido."
          <greeting prefix="Camila bragança" sufix="Sideral Tecnologia" />
        </paragraph>
      </div>
    </section>
    <section class="login__content" key="content">
      <header-bar key="header-bar">
        <div class="login__alert">
          <transition
            name="slide-fade"
            appear
          >
            <alert-inline v-if="alert.text" :type="alert.type">
              {{ alert.text }}
            </alert-inline>
          </transition>
        </div>
      </header-bar>
      <transition
        name="fade"
        appear
      >
        <main class="login__main">
          <div key="intro">
            <Heading type="h2" font-size="1.5rem" class="login__heading">
              Criar meu cadastro
            </Heading>
            <paragraph>
              Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.
            </paragraph>
          </div>
          <div key="form" class="login__form">
            <former
              :sections="sections"
              :button="button"
              :disabled="!isTermChecked"

              @error="onError"
              @submit="onSubmit"
            >
              <template #footer>
                <terms-policy @check="onTermCheck" />
              </template>
            </former>
          </div>
           <div class="login__signin">
              já fiz meu cadastro.
              <a href="#">
                Entrar agora
              </a>
            </div>
        </main>
      </transition>
    </section>
  </div>
</template>

<script>
import TermsPolicy from '@/components/Terms/Policy.vue';
import Former from '@/components/Form/Index.vue';
import Greeting from '@/components/Greeting/Personal.vue';
import Heading from '@/components/Typography/Heading.vue';
import Paragraph from '@/components/Typography/Paragraph.vue';
import HeaderBar from '@/components/Header/Bar.vue';
import AlertInline from '@/components/Alert/Inline.vue';

import sections from '@/views/Auth/sections';

export default {
  name: 'views-auth-login',
  components: {
    Former,
    Greeting,
    HeaderBar,
    Heading,
    Paragraph,
    AlertInline,
    TermsPolicy,
  },
  data: () => ({
    alert: {},
    button: {
      label: 'Cadastrar',
      icon: 'lock',
    },
    isTermChecked: false,
    sections: sections(),
  }),
  methods: {
    setAlert(alert) {
      this.alert = alert || {};

      this.alertTimeout = setTimeout(() => {
        this.alert = {};
      }, 5000);
    },

    onError() {
      this.setAlert({
        text: 'Atenção! Verifique os campos preenchidos!',
        type: 'danger',
      });
    },

    onTermCheck(bool) {
      this.isTermChecked = bool;
    },

    onSubmit(payload) {
      // eslint-disable-next-line no-console
      console.log('submited: with:', payload);

      this.setAlert({
        text: 'Parabéns! Cadastro realizado com sucesso!',
        type: 'success',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.login {
  display: flex;
  height: 100%;

  .login__content {
    flex: 2;
    display: grid;
    grid-template-rows: 4rem 1fr;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .login__alert {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
  }

  .login__main {
    max-width: 360px;
    margin: 0 auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: $breakPointMobile) {
      max-width: 100%;
    }

    .login__form {
      text-align: left;
      margin-top: 1rem;
    }

    .login__heading {
      margin-bottom: 0.5rem;
    }

    .login__signin {
      font-size: 0.8rem;
      color: $warmGray;
      margin-top: 1rem;
      padding-top: 1rem;
      text-align: center;
      border-top: 1px solid $gray;
    }

    @media screen and (min-width: $breakPointTablet) {
      text-align: center;
    }
  }

  .login__background {
    flex: 1;
    background: url('~@/assets/images/login-background.jpg') $grayDark center top no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    max-width: 455px;

    .login__greeting {
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

    @media screen and (max-width: $breakPointTablet) {
      display: none;
    }
  }
}
</style>
