<template>
  <div class="px-3 px-sm-6 py-6">
    <div class="flex d-inline-flex">
      <GoBack/>
      <p class="text-h5 mt-1 mb-0">Cards</p>
    </div>
    <p class="text-h6 mt-10">Add Your first Card</p>
    <v-card class="mt-4 px-4 pt-16 pb-10 form-card elevation-0" height="100%">
      <v-form lazy-validation>
        <div class="card-class">
          <v-row class="ma-0">
            <v-col
              cols="12"
              sm="10"
              md="10"
            >
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    label="Card Holder Name"
                    outlined
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    label="Card Number"
                    outlined
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Expiry"
                    outlined
                    hide-details
                    class="input-style"
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="CVV"
                    outlined
                    hide-details
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="text-body-2"><v-icon class="mr-3" color="primary">mdi-information</v-icon>Note that your card will be charged 10 NGN and it will be credited to your wallet. </p>
                </v-col>
              </v-row>
              <v-btn
                class="mt-12 px-16 no-text-transform"
                color="primary"
              >Next</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack.vue'

export default {
  name: 'NewRequest',
  components: {
    GoBack
  }
}
</script>

<style>
.v-label {
  font-size: 12px !important;
}
.form-card {
  border-radius: 8px !important;
}
.no-text-transform {
  text-transform: none !important;
  letter-spacing: 0.1px !important;
}

.card-class {
  max-width: 529px;
}

</style>
