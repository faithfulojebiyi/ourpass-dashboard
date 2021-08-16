<template>
  <div>
    <p class="text-h4 font-weight-bold mt-4">Hi Faithful ,</p>
    <p class="text-body-2 p-family"> Good evening, checkout with Pass by exploring one of the stores below </p>
    <v-card class="mt-8 green-card pa-6 white--text elevation-0" color="primary" min-height="250px">
      <v-row class="ma-0">
        <v-col
          cols="12"
          sm="12"
          md="6"
        >
          <p class="ellipsis">Wallet Balance</p>
          <div class="ellipsis text-price"><span>{{balancevisible ? '₦'+100000 : '******'}}</span></div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          align-self="center"
          class="d-flex justify-end"
        >
          <v-btn
            class="no-text-transform"
            outlined
            dark
            @click="hideBalance"
          >
            {{balancevisible ? 'Hide balance' : 'Show balance'}}
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
        >
          <div class="text-weight-bold account-number">{{account_number}} <v-icon class="ml-2" size="20" color="white" @click="copyAccount">mdi-content-copy</v-icon></div>
          <div class="text-capitalize text-weight-bold">Wema Bank</div>
        </v-col>
      </v-row>
    </v-card>
    <v-row class="mt-3">
      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <router-link to="/newrequest" style="text-decoration: none;">
          <v-card class="pa-3 green-card elevation-0" height="120px">
            <img src="../assets/request.svg"/>
            <p class="">Request Money</p>
          </v-card>
        </router-link>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <router-link to="/allrequest" style="text-decoration: none;">
          <v-card class="pa-3 green-card elevation-0" height="120px">
            <img src="../assets/send.svg"/>
            <p class="">Send Money</p>
          </v-card>
        </router-link>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <router-link to="/" style="text-decoration: none;">
          <v-card class="pa-3 green-card elevation-0" height="120px">
            <img src="../assets/topup.svg"/>
            <p class="">Topup Via Transfer</p>
          </v-card>
        </router-link>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <router-link to="/settings" style="text-decoration: none;">
          <v-card class="pa-3 green-card elevation-0" height="120px">
            <img src="../assets/top-card.svg"/>
            <p class="">Topup Via Card</p>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
    <div class="d-flex flex-column justify-center align-center">
      <img src="../assets/emptypass.svg"/>
    </div>
    <v-snackbar
      app
      content-class=""
      v-model="snackbar"
      :timeout="timeout"
      transition="slide-y-reverse-transition"
      bottom
      color="primary"
    >
      {{ message }}
    </v-snackbar>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  data () {
    return {
      balancevisible: true,
      account_number: '1010101010',
      snackbar: false
    }
  },
  methods: {
    hideBalance () {
      this.balancevisible = !this.balancevisible
    },
    copyAccount () {
      const copied = this.account_number
      const input = document.createElement('input')
      document.body.appendChild(input)
      input.value = copied

      // 2) Select the text
      input.select()

      const isSuccessful = document.execCommand('copy')
      if (isSuccessful) {
        document.body.removeChild(input)
        this.snackbar = true
        this.message = 'Account number copied to clipboard'
        this.showlogin = true
      }
      if (!isSuccessful) {
        console.error('Failed to copy text.')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.green-card {
  border-radius: 8px !important;
}
.p-family {
  color: #646567;
}
.ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.text-price {
  font-weight: 700;
  font-size: 35px;
}
.account-number {
  font-size: 17px;
}
.text-weight-bold {
  font-weight: 700;
}
.no-text-transform {
  text-transform: none !important;
  letter-spacing: 0.1px !important;
}
</style>
