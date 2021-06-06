<template>
  <v-dialog width="unset">
    <template v-slot:activator="{on,}">
      <v-btn v-on="on" icon color="#5BC0BE">
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
    </template>
    <v-card class="login">
      <v-card-title class="justify-center">Вход в личный кабинет</v-card-title>
      <v-card-text class="placeholder-color">
        <v-text-field background-color="#1C2541" color="#6C7797" filled placeholder="Номер телефона или E-mail"
                      v-model="userData.email" type="email" prepend-inner-icon="mdi-account-outline">

        </v-text-field>
        <v-text-field background-color="#1C2541" color="#6C7797" filled placeholder="Пароль" v-model="userData.password"
                      type="password" prepend-inner-icon="mdi-lock-outline">

        </v-text-field>
      </v-card-text>
      <v-card-actions>
          <v-btn class="justify-center">
            Войти
          </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginDialog",
  data() {
    return {
      userData: {
        password: '',
        email: ''
      }
    }
  }
}
</script>

<style lang="scss">
.login {
  width: 570px;
  background-color: #0B132B !important;
  color: #F2F2F2 !important;

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