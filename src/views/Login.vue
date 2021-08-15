<template>
  <v-main class="loginbg">
    <v-container class="flex justify-center container-class fill-height" fluid>
      <v-card flat class="login-card" width="600px" v-if="!showlogin">
        <div class="d-flex flex-nowrap mb-4 align-center">
          <v-avatar class="mr-4" size="40">
            <img src="../assets/passLogo.svg"/>
          </v-avatar>
          <p class="text-h6 mt-4">Pass</p>
        </div>
        <div class="">
          <v-text-field
            id="email"
            v-model="email"
            label="Email"
            class="text-color"
            outlined
          >
            <template v-slot:prepend-inner>
              <v-icon color="primary">mdi-account-outline</v-icon>
            </template>
          </v-text-field>
        </div>
        <div class="text-center text-caption"> By clicking the button below you agree to our <span class="primary--text cursor-pointer">Terms</span> and <span class="primary--text cursor-pointer">Privacy Policy</span></div>
        <div class="py-4">
          <v-btn
            class="no-text-transform"
            block
            x-large
            color="primary"
            @click="onLogin"
          >Login</v-btn>
        </div>
        <div role="button" class="text-center text-caption"><span class="block">Dont have an Account?</span></div>
      </v-card>
      <v-card flat class="login-card" width="600px" v-if="showlogin">
        <div class="d-flex flex-nowrap mb-4 align-center">
          <v-avatar class="mr-4" size="40">
            <img src="../assets/passLogo.svg"/>
          </v-avatar>
          <p class="text-h6 mt-4">Pass</p>
        </div>
        <div class="mb-2">
          <v-text-field
            id="email"
            v-model="email"
            label="Email"
            class="text-color"
            outlined
            hide-details
          >
            <template v-slot:prepend-inner>
              <v-icon color="primary">mdi-account-outline</v-icon>
            </template>
          </v-text-field>
        </div>
        <div class="mb-6">
          <v-text-field
            id="password"
            v-model="password"
            label="Password"
            outlined
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            class="text-color"
            hide-details
          >
            <template v-slot:prepend-inner>
              <v-icon color="primary">mdi-lock-outline</v-icon>
            </template>
          </v-text-field>
        </div>
        <div role="button" class="text-center text-caption mb-8"><span class="block">Forgot Password?</span></div>
        <div class="text-center text-caption"> By clicking the button below you agree to our <span class="primary--text cursor-pointer">Terms</span> and <span class="primary--text cursor-pointer">Privacy Policy</span></div>
        <div class="py-4">
          <v-btn
            class="no-text-transform"
            block
            x-large
            color="primary"
            @click="onLogin"
          >Login</v-btn>
        </div>
        <div role="button" class="text-center text-caption"><span class="block">Dont have an Account?</span></div>
      </v-card>
      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        top
        color="error"
      >
        {{ message }}
      </v-snackbar>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      showlogin: false,
      show1: false,
      email: '',
      password: '',
      error: null,
      message: null,
      snackbar: false,
      timeout: 4000
    }
  },
  methods: {
    onLogin () {
      this.snackbar = true
      this.message = 'no data'
      this.showlogin = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-card {
    padding: 60px;
  }
  .container-class {
    padding: 24px;
  }
  .cursor-pointer:hover {
    cursor: pointer;
  }
  .no-text-transform {
    text-transform: none !important;
  }
  @media only screen and (max-width: 600px) {
    .login-card {
      padding: 20px;
    }
    .container-class {
      padding: 10px;
    }
  }
</style>
