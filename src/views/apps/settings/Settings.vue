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
        <b-col md="4">
          <b-form-group
            :label="`Bills Payment Provider -  (${details.bills_payment_provider})`"
            label-for="mc-bills-provider"
          >
            <b-form-select id="mc-bills-provider" name="bills_payment_provider" v-model="details.bills_payment_provider">
              <b-form-select-option value="">Select</b-form-select-option>
              <b-form-select-option value="shago">Shago Pay</b-form-select-option>
              <b-form-select-option value="clubconnect">ClubKonnect</b-form-select-option>
            </b-form-select>
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
  </b-form>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BForm, BButton, BCard, BSpinner, BFormTextarea, BFormSelect, BFormSelectOption,
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
    BFormSelect,
    BFormSelectOption,
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
    setBillPay(event) {
      this.details.bills_payment_provider = event.target.selected
    }
  },
}
</script>
