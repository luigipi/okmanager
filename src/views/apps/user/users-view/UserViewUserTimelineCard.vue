<template>
  <b-card title="Accounts">
    <app-timeline>
      <app-timeline-item
        v-for="wallet in userData.accounts"
        :key="wallet.id"
        variant="warning"
      >
        <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
          <h6>{{ wallet.type }}</h6>
          <strong class="text-primary">₦{{ wallet.balance_formatted }}</strong>
        </div>
        <p> <strong>{{ wallet.bank_name }}</strong> - {{ wallet.account_number }}</p>
        <small class="mb-1 text-muted">Status: {{ wallet.status }}</small>
      </app-timeline-item>
      <!-- <app-timeline-item
        variant="info"
        title="Create a new project for client"
        subtitle="Add files to new design folder"
        time="2 days ago"
      /> -->
    </app-timeline>
    <!-- <div class="mt-2 mb-2">
      <button
        class="btn btn-primary"
        type="button"
        @click="deactivateWallet('unblock')"
        v-if="!userData.wallet_status"
      >
        Activate Wallets
      </button>
      <button
        class="btn btn-primary"
        type="button"
        @click="deactivateWallet('block')"
        v-else
      >
        Deactivate Wallets
      </button>
    </div> -->
  </b-card>
</template>

<script>
import {
  BCard,
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
import Swal from 'sweetalert2'

export default {
  components: {
    BCard,
    AppTimeline,
    AppTimelineItem,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deactivateWallet(option) {
      let msg = option === 'block' ? 'Wallet suspended successfully' : 'Wallet activated successfully'
      Swal.fire({
        icon: 'warning',
        text: "This will "+ option +" the Agent's WALLETS.",
        showConfirmButton: true,
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Yes, Proceed',
        preConfirm: ((val) => {
          this.$http.get(`${this.$url}/accounts/manage-wallet/${this.userData.id}/${option}`)
            .then(response => {
              if (response.data.status) {
                Swal.fire({
                  icon: 'success',
                  text: msg,
                })
                .then(() => {
                  window.location.reload()
                })
              }
            })
          .catch((err) => {
            if(err.response.data) {
              let message
              if(err.response.data.errors) {
                let errors = err.response.data.errors
                let errorList = Object.values(errors)
                errorList.map(msg => {
                  message = msg
                })
              }
              Swal.fire({
                icon: 'error',
                text: message || err.response.data.message
              })
            }
          })
        })
      })
    },
  },
}
</script>

<style>

</style>
