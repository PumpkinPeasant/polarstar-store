<template>
  <v-dialog width="unset" fullscreen
            hide-overlay
            transition="fade-transition">
    <template v-slot:activator="{on,}">
      <v-btn v-on="on" icon color="#F2F2F2">
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
    </template>

    <section class="loginBackground">
      <div class="loginWaveAndButtons">
        <div class="loginRegisterButtons">
          <span @click="step = 2" v-bind:style="step === 2 ? 'color: #fff' : ''">Регистрация</span>
          <span @click="step = 1" v-bind:style="step === 1 ? 'color: #fff' : ''">Вход</span>
        </div>
        <div class="loginWrapper">
          <v-card class="login">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-card-title class="justify-center">Вход в личный кабинет</v-card-title>
                <v-card-text class="placeholder-color">
                  <v-text-field background-color="#1C2541" color="#6C7797" filled placeholder="Номер телефона или E-mail"
                                type="email" prepend-inner-icon="mdi-account-outline">
                  </v-text-field>
                  <v-text-field background-color="#1C2541" color="#6C7797" filled placeholder="Пароль"
                                type="password" prepend-inner-icon="mdi-lock-outline">
                  </v-text-field>
                </v-card-text>
                <v-card-actions class="loginActions">
                  <div class="">
                    <v-btn class="mx-2" fab color="black" outlined>
                      <v-icon v-html="'mdi-vk'"></v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab color="black" outlined>
                      <v-icon v-html="'mdi-google'"></v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab color="black" outlined>
                      <v-icon v-html="'mdi-twitter'"></v-icon>
                    </v-btn>
                  </div>
                  <div>
                    <v-btn class="justify-center">
                      Войти
                    </v-btn>
                  </div>
                </v-card-actions>
              </v-window-item>
              <v-window-item :value="2">
                <v-card-title class="justify-center">Регистрация</v-card-title>
                <v-card-text class="placeholder-color">
                </v-card-text>
                <v-card-actions>
                  <v-btn class="justify-center">
                    Зарегистрироваться
                  </v-btn>
                </v-card-actions>
              </v-window-item>
            </v-window>
          </v-card>
        </div>

      </div>
    </section>

  </v-dialog>
</template>

<script>
export default {
  name: "LoginDialog",
  data() {
    return {
      step: 1,
      email: '',
      password: '',
      valid: false,
      emailRules: [
        (v) => !!v || 'Пожалуйста введите email',
        (v) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || 'Неправильный email'
      ],
      passwordRules: [
        (v) => !!v || 'Пожалуйста введите пароль',
        (v) => (v && v.length >= 6) || 'Пароль должен состоять как минимум из шести символов'
      ],
      nameRules: [
        (v) => !!v || 'Пожалуйста введите имя',
        (v) => (v && v.length >= 2) || 'Имя должно состоять как минимум из двух символов'
      ],
      countries:[],
      genders:[],
      player: [],
      error:'',
      registerUser:{
        name: '',
        gender: '',
        birth_date: '',
        country: '',
        email: '',
        password: '',
      },
      loginUser:{
        email: '',
        password: '',
      },
    }
  },
  mounted() {

  },
  methods:{

    }
}
</script>

<style lang="scss">
.loginBackground{
  height: 100%;
  background: linear-gradient(#0B132B, #1C2645) fixed;
  background-size: cover;
}
.loginWaveAndButtons{
  background: url("../../assets/images/loginDialog/loginWave.svg") fixed;
  background-size: cover;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: #43a047 2px solid;
  gap: 4vh;
}
.loginRegisterButtons{
  color: #5BC0BE;
  border: #43a047 2px solid;
  span{
    text-transform: uppercase;
    padding: 1vw;
    cursor: pointer;
  }
}
.loginWrapper{
  background: url("../../assets/images/loginDialog/loginWave.svg") fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  border: #43a047 2px solid;
}
.login {
  width: 35.6vw;
  background-color: #0B132B !important;
  color: #F2F2F2 !important;
.loginActions{
  display: flex;
  flex-direction: column;
}
  .placeholder-color {
    input::placeholder {
      color: #6C7797 !important;
    }

    .v-icon {
      color: #5BC0BE;
    }
  }
}

</style>
