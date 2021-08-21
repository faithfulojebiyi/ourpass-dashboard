<template>
  <div class="px-3 px-sm-6 py-6">
    <div class="flex d-inline-flex">
      <GoBack/>
      <p class="text-h5 mt-1 mb-0">Cards</p>
    </div>
    <p class="text-h6 mt-10">Add Your first Card</p>
    <!-- <v-card class="mt-4 px-4 pt-16 pb-10 form-card elevation-0" height="100%"> -->
    <v-card class="mt-10" flat>
      <div class="px-4 py-2 search-box">
        <v-text-field
        append-icon="mdi-magnify"
        label="Search"
        outlined
        dense
        hide-details
      ></v-text-field>
      </div>
      <v-data-table
        :headers="headers"
        :items="requests"
      >
        <template v-slot:[`item.requestStatus`]="{ item }">
          <v-chip
            :color="getColor(item.requestStatus).color"
            small
            :class="getColor(item.requestStatus).text"
          >
            {{ item.requestStatus}}
          </v-chip>
          <!-- <div class="">
            {{ item.requestStatus}}
          </div> -->
        </template>
        <template v-slot:[`item.paymentStatus`]="{ item }">
          <v-chip
            :color="getPaymentColor(item.paymentStatus).color"
            small
            :class="getPaymentColor(item.paymentStatus).text"
          >
            {{ item.paymentStatus }}
          </v-chip>
        </template>
        <template v-slot:[`item.actions`]>
          <v-btn
            color="primary"
            class="ml-n2"
            depressed
            small
          >
            View request
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack.vue'

export default {
  name: 'NewRequest',
  components: {
    GoBack
  },
  data () {
    return {
      headers: [
        {
          text: 'RequestID',
          align: 'start',
          sortable: false,
          value: 'id'
        },
        { text: 'Title', value: 'description' },
        { text: 'Amount', value: 'amount' },
        { text: 'Status', value: 'requestStatus' },
        { text: 'Payment', value: 'paymentStatus' },
        { text: '', value: 'actions' }
      ],
      requests: [
        {
          id: 1,
          description: 'Test Payment',
          amount: 300000,
          requestStatus: 'approved',
          paymentStatus: 'paid'
        },
        {
          id: 2,
          description: 'Test Payment',
          amount: 300000,
          requestStatus: 'rejected',
          paymentStatus: 'paid'
        },
        {
          id: 3,
          description: 'Test Payment',
          amount: 300000,
          requestStatus: 'pending',
          paymentStatus: 'paid'
        },
        {
          id: 4,
          description: 'Test Payment',
          amount: 300000,
          requestStatus: 'approved',
          paymentStatus: 'paid'
        },
        {
          id: 5,
          description: 'Test Payment',
          amount: 300000,
          requestStatus: 'pending',
          paymentStatus: 'pending'
        },
        {
          id: 6,
          description: 'Test Payment',
          amount: 300000,
          requestStatus: 'pending',
          paymentStatus: 'paid'
        },
        {
          id: 7,
          description: 'Test Payment',
          amount: 300000,
          requestStatus: 'approved',
          paymentStatus: 'paid'
        },
        {
          id: 8,
          description: 'Test Payment',
          amount: 300000,
          requestStatus: 'rejected',
          paymentStatus: 'paid'
        }
      ]
    }
  },
  methods: {
    getColor (requestStatus) {
      if (requestStatus === 'pending') {
        return {
          color: 'cardlight',
          text: 'card--text'
        }
      } else if (requestStatus === 'rejected') {
        return {
          color: 'redlight',
          text: 'red--text'
        }
      } else {
        return {
          color: 'loginbg',
          text: 'primary--text'
        }
      }
    },
    getPaymentColor (paymentStatus) {
      if (paymentStatus === 'pending') {
        return {
          color: 'cardlight',
          text: 'card--text'
        }
      } else {
        return {
          color: 'loginbg',
          text: 'primary--text'
        }
      }
    }
  }
}
</script>

<style>
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
.search-box {
  max-width: 280px;
}

</style>
