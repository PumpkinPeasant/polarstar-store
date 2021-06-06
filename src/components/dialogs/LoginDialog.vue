<template>
  <v-dialog width="unset" fullscreen
            hide-overlay
            transition="scroll-y-transition"
            v-model="visible"
  >
    <template v-slot:activator="{on,}">
      <v-btn v-on="on" icon color="#F2F2F2">
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
    </template>

    <section class="loginBackground">
      <div class="loginWaveAndButtons">
        <div class="closeLoginForm">
          <v-btn color="white" icon @click="visible = false">
            <v-icon x-large>mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="loginRegisterButtons">
          <span @click="step = 1" v-bind:style="step === 1 ? 'color: #fff' : ''">Вход</span>
          <span @click="step = 2" v-bind:style="step === 2 ? 'color: #fff' : ''">Регистрация</span>
        </div>
        <div class="loginWrapper">
          <v-card class="login"
                  elevation="9">
            <v-window v-model="step"
            >
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
                    <v-btn class="mx-2" fab color="white" outlined>
                      <v-icon v-html="'mdi-vk'"></v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab color="white" outlined>
                      <v-icon v-html="'mdi-google'"></v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab color="white" outlined>
                      <v-icon v-html="'mdi-twitter'"></v-icon>
                    </v-btn>
                  </div>
                  <div>
                    <a class="justify-center">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Войти
                    </a>
                  </div>
                  <div class="forgotPassword">
                    <p>Забыли пароль?</p>
                  </div>
                </v-card-actions>
              </v-window-item>
              <v-window-item :value="2">
                <v-card-title class="justify-center">Регистрация</v-card-title>
                <v-card-text class="placeholder-color">
                  <v-text-field background-color="#1C2541" color="#6C7797" filled placeholder="Имя"
                                type="name" prepend-inner-icon="mdi-account-outline">
                  </v-text-field>
                  <v-text-field background-color="#1C2541" color="#6C7797" filled placeholder="Фамилия"
                                type="surname" prepend-inner-icon="mdi-account-outline">
                  </v-text-field>
                  <v-text-field background-color="#1C2541" color="#6C7797" filled placeholder="E-mail"
                                type="email" prepend-inner-icon="mdi-account-outline">
                  </v-text-field>
                  <v-text-field background-color="#1C2541" color="#6C7797" filled placeholder="Пароль"
                                type="password" prepend-inner-icon="mdi-lock-outline">
                  </v-text-field>
                </v-card-text>
                <v-card-actions class="loginActions">
                  <div>
                    <a class="justify-center" id="registerButton">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Зарегистрироваться
                    </a>
                  </div>
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
      visible: false,
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
.closeLoginForm{
  position: fixed;
  padding: 1vw;
  right: 0;
  top: 0;
}
.loginWaveAndButtons{
  background: url("../../assets/images/loginDialog/loginWave.svg") fixed;
  background-size: cover;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4vh;
}
.loginRegisterButtons{
  color: #5BC0BE;
  span{
    text-transform: uppercase;
    padding: 1vw;
    cursor: pointer;
    transition: 0.6s;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1vw;
    letter-spacing: .11em;
  }
  span:hover{
    text-shadow: 0 0 10px #ffffff;
  }
}
.loginWrapper{
  background: url("../../assets/images/loginDialog/loginWave.svg") fixed;
  background-size: cover;
  display: flex;
  align-items: center;
}
.login {
  width: 35.6vw;
  background-color: #0B132B !important;
  color: #F2F2F2 !important;
  padding: 6vh 2vw;
  .v-card__title{
    font-family: Jost, sans-serif;
    font-weight: 300;
    font-size: 2vw;
    padding-bottom: 6vh;
  }
  .loginActions{
    display: flex;
    flex-direction: column;
  }
  .loginActions a {
    position: relative;
    display: inline-block;
    padding: 10px 45px;
    color: #03e9f4;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px
  }

  .loginActions a:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4,
    0 0 25px #03e9f4,
    0 0 50px #03e9f4,
    0 0 100px #03e9f4;
  }

  .loginActions a span {
    position: absolute;
    display: block;
  }

  .loginActions a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,100% {
      left: 100%;
    }
  }

  .loginActions a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: .25s
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,100% {
      top: 100%;
    }
  }

  .loginActions a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: .5s
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,100% {
      right: 100%;
    }
  }

  .loginActions a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: .75s
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,100% {
      bottom: 100%;
    }
  }
  .forgotPassword{
    cursor: pointer;
    padding: 5vh 0 0 0;
    transition: 0.3s;
  }
  .forgotPassword:hover{
    text-shadow: 0 0 20px #ffffff;
  }
  .forgotPassword:active{
    color: #5BC0BE;
    text-shadow: 0 0 20px #5BC0BE;
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

#registerButton{
  letter-spacing: 0;
  padding: 10px 20px;
}


</style>
