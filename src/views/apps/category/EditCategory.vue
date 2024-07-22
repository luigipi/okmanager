<template>
  <b-card
    :title="'Edit '+ details.name"
  >
    <b-form @submit.prevent="saveChanges">
      <b-row>
        <b-col md="12">
          <b-form-group
            label="Name"
            label-for="mc-name"
          >
            <b-form-input
              id="mc-name"
              v-model="details.name"
              placeholder="Name"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Source"
            label-for="mc-source"
          >
            <b-form-input
              id="mc-source"
              v-model="details.source"
              placeholder="source"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Type"
            label-for="mc-type"
          >
            <b-form-input
              id="mc-type"
              v-model="details.type"
              placeholder="Type"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Charge"
            label-for="mc-charge"
          >
            <b-form-input
              id="mc-charge"
              v-model="details.charge"
              placeholder="Charge"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Commission(%)"
            label-for="mc-commission"
          >
            <b-form-input
              id="mc-commission"
              v-model="details.commission"
              placeholder="Commission"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="App Commission(%)"
            label-for="mc-commission"
          >
            <b-form-input
              id="mc-app-commission"
              v-model="details.app_commission"
              placeholder="App Commission"
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
            Save Changes
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
import router from '@/router'

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
      service: {},
      details: {
        name: '',
        type: '',
        source: '',
        charge: '0.00',
        commission: '',
        app_commission: '',
      },
      loading: false,
    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    getCategory() {
      this.$http.get(`${this.$url}/tasks/templates/${router.currentRoute.params.id}`)
        .then(response => {
          if (response.data.status) {
            this.service = response.data.data
            this.details.name = this.service.name
            this.details.type = this.service.type
            this.details.source = this.service.source
            this.details.charge = this.service.charge
            this.details.commission = this.service.commission
            this.details.app_commission = this.service.app_commission
          }
        })
    },
    saveChanges() {
      this.loading = true
      this.$http.patch(`${this.$url}/tasks/templates/${router.currentRoute.params.id}`, this.details)
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
