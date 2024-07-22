<template>
  <b-form @submit.prevent="saveSettings">
    <b-card
      title="App Settings"
    >
      <b-row>
        <b-col md="4">
          <b-form-group
            label="App Name"
            label-for="mc-app-name"
          >
            <b-form-input
              id="mc-app-name"
              v-model="details.app_name"
              placeholder="App Name"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Email"
            label-for="mc-email"
          >
            <b-form-input
              id="mc-email"
              v-model="details.email"
              placeholder="Email"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Phone Number"
            label-for="mc-phone-number"
          >
            <b-form-input
              id="mc-phone-number"
              v-model="details.phone_number"
              placeholder="Phone Number"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Virtual Card Issuance (Naira)"
            label-for="mc-card-issuance"
          >
            <b-form-input
              id="mc-card-issuance"
              v-model="details.card_issuance_naira"
              placeholder="Virtual Card Issuance"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Virtual Card Issuance (USD)"
            label-for="mc-card-issuance-usd"
          >
            <b-form-input
              id="mc-card-issuance-usd"
              v-model="details.card_issuance_usd"
              placeholder="Virtual Card Issuance"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Card Transaction fee"
            label-for="mc-card-fee"
          >
            <b-form-input
              id="mc-card-fee"
              v-model="details.card_fee"
              placeholder="Card Transaction fee"
            />
          </b-form-group>
        </b-col>


        <b-col md="4">
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
        <b-col md="12">
          <b-form-group
            label="Account Inactivity Message"
            label-for="mc-deactivation_message" 
          >
            <ckeditor :editor="editor" v-model="details.deactivation_message" :config="editorConfig"></ckeditor>
          </b-form-group>
        </b-col>

        <b-col md="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
          >
            Save
            <b-spinner
              v-show="loading"
              variant="light"
              small
            />
          </b-button>
        </b-col>
      </b-row>
    </b-card>

    <b-card
      title="Savings Interest Rate Settings"
    >
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Savings Mini (3 Months) %"
            label-for="mc-mini"
          >
            <b-form-input
              id="mc-mini"
              v-model="details.savings_mini"
              placeholder="0.00"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Savings Midi (6 Months) %"
            label-for="mc-midi"
          >
            <b-form-input
              id="mc-midi"
              v-model="details.savings_midi"
              placeholder="0.00"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Savings Maxi (9 Months) %"
            label-for="mc-maxi"
          >
            <b-form-input
              id="mc-maxi"
              v-model="details.savings_maxi"
              placeholder="0.00"
            />
          </b-form-group>
        </b-col>

        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
          >
            Save
            <b-spinner
              v-show="loading"
              variant="light"
              small
            />
          </b-button>
        </b-col>
      </b-row>
    </b-card>

    <b-card
      title="Bank Transfer Charges"
    >
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Transfer Charge Mini (N1 - N5,000)"
            label-for="mc-mini"
          >
            <b-form-input
              v-model="details.transfer_charge_min"
              placeholder="0.00"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Transfer Charge Midi (N5,000 - N50,000)"
            label-for="mc-mini"
          >
            <b-form-input
              v-model="details.transfer_charge_mid"
              placeholder="0.00"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Transfer Charge Max (N50,000 above)"
            label-for="mc-mini"
          >
            <b-form-input
              v-model="details.transfer_charge_max"
              placeholder="0.00"
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
            Save
            <b-spinner
              v-show="loading"
              variant="light"
              small
            />
          </b-button>
        </b-col>
      </b-row>
    </b-card>

    <!-- <b-card
      title="Monnify Settings"
    >
      <b-row>
        <b-col md="6">
          <b-form-group
            label="API Key"
            label-for="mc-api-key"
          >
            <b-form-input
              id="mc-api-key"
              v-model="details.monnify_apikey"
              placeholder="API KEY"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Contract Code"
            label-for="mc-contract-code"
          >
            <b-form-input
              id="mc-contract-code"
              v-model="details.monnify_contract"
              placeholder="Contract Code"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Secret Code"
            label-for="mc-secret-code"
          >
            <b-form-input
              id="mc-secret-code"
              v-model="details.monnify_secret"
              placeholder="Secret Code"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Wallet ID (for disbursment)"
            label-for="mc-wallet-id"
          >
            <b-form-input
              id="mc-wallet-id"
              v-model="details.monnify_walletId"
              placeholder="Wallet ID"
            />
          </b-form-group>
        </b-col>

        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
          >
            Save
            <b-spinner
              v-show="loading"
              variant="light"
              small
            />
          </b-button>
        </b-col>
      </b-row>
    </b-card> -->

    <!-- <b-card
      title="Flutterwave Settings"
    >
      <b-row>
        <b-col md="6">
          <b-form-group
            label="API Key"
            label-for="mc-api-key"
          >
            <b-form-input
              id="mc-api-key"
              v-model="details.flutterwave_apikey"
              placeholder="API KEY"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Secret Key"
            label-for="mc-secret-code"
          >
            <b-form-input
              id="mc-secret-code"
              v-model="details.flutterwave_secret"
              placeholder="Secret Code"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group
            label="Transfer Charge Mini %"
            label-for="mc-flwv-id"
          >
            <b-form-input
              id="mc-flwv-id"
              v-model="details.flwv_trans_charge_mini"
              placeholder="flwv Mini"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group
            label="Transfer Charge Midi %"
            label-for="mc-flwv-id"
          >
            <b-form-input
              v-model="details.flwv_trans_charge_midi"
              placeholder="flwv Midi"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group
            label="Transfer Charge Max %"
            label-for="mc-flwv-id"
          >
            <b-form-input
              id="mc-flwv-id"
              v-model="details.flwv_trans_charge_max"
              placeholder="flwv Max"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group
            label="Card Transaction Charge %"
            label-for="mc-flwv-id"
          >
            <b-form-input
              id="mc-flwv-id"
              v-model="details.flwv_card_trans_charge"
              placeholder="Card Transaction Charge"
            />
          </b-form-group>
        </b-col>

        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
          >
            Save
            <b-spinner
              v-show="loading"
              variant="light"
              small
            />
          </b-button>
        </b-col>
      </b-row>
    </b-card> -->

    <!-- <b-card
      title="Capricorn Settings"
    >
      <b-row>
        <b-col md="6">
          <b-form-group
            label="API Key"
            label-for="mc-api-key"
          >
            <b-form-input
              id="mc-api-key"
              v-model="details.baxi_apikey"
              placeholder="API KEY"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Username"
            label-for="mc-username"
          >
            <b-form-input
              id="mc-username"
              v-model="details.baxi_username"
              placeholder="Username"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Secret Code"
            label-for="mc-secret-code"
          >
            <b-form-input
              id="mc-secret-code"
              v-model="details.baxi_secret"
              placeholder="Secret Code"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Agent ID"
            label-for="mc-agent-id"
          >
            <b-form-input
              id="mc-agent-id"
              v-model="details.baxi_agent_id"
              placeholder="Agent ID"
            />
          </b-form-group>
        </b-col>

        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
          >
            Save
            <b-spinner
              v-show="loading"
              variant="light"
              small
            />
          </b-button>
        </b-col>
      </b-row>
    </b-card> -->
  </b-form>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BForm, BButton, BCard, BSpinner, BFormTextarea,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  components: {
    ClassicEditor,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BButton,
    BCard,
    BSpinner,
    BFormTextarea,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {
        modules: {
          toolbar: '#toolbar',
        },
      },       
      settings: {},
      details: {
        email: '',
        phone_number: '',
      },
      loading: false,
    }
  },
  created() {
    this.getSettings()
    let data = localStorage.getItem('userData')
    let user = JSON.parse(data)
    this.user = user
    if(user.role && user.role.toLowerCase() != 'admin') {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('userData')
      window.location.reload()
    }    
  },
  methods: {
    getSettings() {
      this.$http.get(`${this.$url}/settings`)
        .then(response => {
          // console.log("SETTINGS", response)
          if (response.status) {
            this.settings = response.data.data.setting
            this.details = response.data.data.app_setting
          }
        })
    },
    saveSettings() {
      this.loading = true
      this.$http.patch(`${this.$url}/settings/update`, this.details)
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
