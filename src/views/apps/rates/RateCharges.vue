<template>
  <b-card
    title="Rates & Charges"
  >
    <b-form @submit.prevent="saveSettings">
      <b-row>
        <b-col md="6">
          <b-form-group
            label="Bank Transfer Charge"
            label-for="mc-transfer-charge"
          >
            <b-form-input
              id="mc-transfer-charge"
              v-model="details.bank_transfer_charge"
              placeholder="Bank Transfer Charge"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Card Transaction Charge"
            label-for="mc-card-transaction-charge"
          >
            <b-form-input
              id="mc-card-transaction-charge"
              v-model="details.card_transaction_charge"
              placeholder="Card Transaction Charge"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Safelock Rate (%)"
            label-for="mc-safelock-rate"
          >
            <b-form-input
              id="mc-safelock-rate"
              v-model="details.safelock_interest_rate"
              placeholder="Safelock Rate"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Referral Bonus"
            label-for="mc-referral-bonus"
          >
            <b-form-input
              id="mc-referral-bonus"
              v-model="details.referral_bonus"
              placeholder="Referral Bonus"
            />
          </b-form-group>
        </b-col>

        <!-- submit and reset -->
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
          >
            Submit
            <b-spinner
              v-show="loading"
              variant="light"
              small
            />
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BForm, BButton, BCard, BSpinner,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BButton,
    BCard,
    BSpinner,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      settings: {},
      details: {
        bank_transfer_charge: '0.00',
        card_transaction_charge: '0.00',
        referral_bonus: '0.00',
        safelock_interest_rate: '0.00',
      },
      loading: false,
    }
  },
  created() {
    this.getSettings()
  },
  methods: {
    getSettings() {
      this.$http.get(`${this.$url}/settings`)
        .then(response => {
          if (response.status) {
            this.settings = response.data.data.app_setting
            this.details.bank_transfer_charge = this.settings.bank_transfer_charge
            this.details.card_transaction_charge = this.settings.card_transaction_charge
            this.details.referral_bonus = this.settings.referral_bonus
            this.details.safelock_interest_rate = this.settings.safelock_interest_rate
          }
        })
    },
    saveSettings() {
      this.loading = true
      this.$http.post(`${this.$url}/settings`, this.details)
        .then(response => {
          if (response.data.status) {
            window.location.reload()
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>
