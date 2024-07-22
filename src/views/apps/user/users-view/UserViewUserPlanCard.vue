<template>
  <b-card
    no-body
    class="border-primary"
  >
    <b-card-header class="d-flex justify-content-between align-items-center pt-75 pb-25">
      <h5>
        Account Details
      </h5>
    </b-card-header>

    <b-card-body>
      <app-timeline>
        <div v-if="userData.accounts.length">
          <app-timeline-item
            v-for="wallet in userData.accounts"
            :key="wallet.id"
            variant="warning"
          >
            <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between align-items-center mb-1 mb-sm-0">
              <h6>{{ wallet.type }}</h6>
              <strong class="text-primary">₦{{ wallet.balance_formatted }}</strong>
            </div>
            <p> <strong>{{ wallet.bank_name }}</strong> - {{ wallet.account_number }}</p>
            <button 
              class="btn btn-sm btn-primary" 
              v-show="wallet.provider === 'bloc'" 
              @click="migrateFund(wallet.customer_id)"
            >
              Migrate Funds 
              <b-spinner
                v-show="loading"
                small
                variant="light"
              />
            </button>
          </app-timeline-item>
        </div>
        <div v-else>
          <p class="text-center">No account</p>
        </div>
        <b-button
          v-if="userData.accounts && userData.accounts.length  === 0"
          id="approve"
          type="button"
          ripple
          variant="primary"
          @click="manageAccount($event)"
          class="mt-2"
        >
            Create Account
          <b-spinner
            v-show="loading"
            small
            variant="light"
          />
        </b-button>
      </app-timeline>
        <!-- <h6> <strong>KYC</strong> </h6>
        <div v-if="userData.kyc && userData.kyc.length">
          <div class="" v-for="kyc in userData.kyc" :key="kyc.id" >
            <div class="d-flex align-items-center justify-content-between mb-1">
              <strong>{{kyc.file_name+' - '+kyc.value}}</strong>
              <strong 
                :class="kyc.verification_status.toLowerCase() === 'approved' ? 'text-success' 
                : (kyc.verification_status.toLowerCase() === 'pending' ? 'text-warning' : 'text-danger')"
              >
                {{ kyc.verification_status}}
              </strong>
            </div>
            <p class="mb-0 d-flex align-items-center justify-content-between">
              <a :href="kyc.file_path" target="_blank">
                <strong>Click to view</strong>
              </a>
              <b-dropdown
                variant="link"
                no-caret
                class="p-0"
              >
                <template #button-content>
                  <feather-icon
                    icon="MoreVerticalIcon"
                    size="16"
                    class="align-middle text-body"
                  />
                </template>
                <b-dropdown-item v-if="kyc.verification_status.toLowerCase() === 'pending'">
                  <feather-icon icon="CheckCircleIcon" />
                  <span class="align-middle ml-50">Approve</span>
                </b-dropdown-item>
  
                <b-dropdown-item v-if="kyc.verification_status.toLowerCase() === 'pending'">
                  <feather-icon icon="XCircleIcon" />
                  <span class="align-middle ml-50">Reject</span>
                </b-dropdown-item>
  
                <b-dropdown-item @click="manageDocument(kyc.id)">
                  <feather-icon icon="TrashIcon" />
                  <span class="align-middle ml-50">Delete</span>
                </b-dropdown-item>
              </b-dropdown>   
            </p>
          </div>
        </div>
        <div v-else>
          <p>No KYC uploaded</p>
        </div>
      <b-button
        v-if="userData.profile_status.toLowerCase() !== 'approved'"
        id="approve"
        type="button"
        ripple
        variant="primary"
        @click="manageAccount($event)"
        class="mt-2"
      >
        Activate Customer
        <b-spinner
          v-show="loading"
          small
          variant="light"
        />
      </b-button>
      <b-button
        v-else
        id="decline"
        type="button"
        ripple
        variant="danger"
        @click="manageAccount($event)"
        class="mt-2"
      >
        Deactivate
        <b-spinner
          v-show="loading"
          small
          variant="light "
        />
      </b-button> -->
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardBody, BButton, BSpinner, BDropdown, BDropdownItem
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
import Swal from 'sweetalert2'

export default {
  directives: {
    Ripple,
  },
  components: {
    BSpinner,
    BCard,
    BCardHeader,
    BCardBody,
    BButton,
    BDropdown,
    BDropdownItem,
    AppTimeline,
    AppTimelineItem,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      details: {},
      option: '',
      loading: false,
    }
  },
  methods: {
    manageAccount(event) {
      this.loading = true
      const details = {
        customer_id: this.userData.id,
      }
      // console.log('details', details)
      Swal.fire({
        title: `Create Virtual Account for ${this.userData.name}`,
        text: "Are you sure to proceed?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#c91a4b',
        confirmButtonText: 'Yes! Proceed',
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.$http.post(`${this.$url}/customers/create-account`, details)
            .then((response) => {
              // console.log('===', response)
              if(response.data.status) {
                Swal.fire({
                  icon: "success",
                 text: "Virtual account created successfully",
                 showCloseButton: true,
                })
                .then(() => {
                  window.location.reload()
                })
              }
              else {
                Swal.fire({
                  icon: "error",
                 text: response.data.message,
                 showCloseButton: true,
                 cancelButtonText: 'OK'
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
            .finally(() => {
              this.loading = false
            })
        }
      })
    },
    manageDocument(event) {
      this.loading = true
      const details = {
        agent_id: this.userData.agent_id,
        option: event.target.id,
      }
      // console.log('details', details)
      this.$http.post(`${this.$url}/customers/verify`, details)
        .then(() => {
          // console.log('===', response)
          window.location.reload()
        })
        .finally(() => {
          this.loading = false
        })
    },
    migrateFund(customer_id) {
      this.loading = true
      const details = {
        customer_id: customer_id
      }
      // console.log('details', details)
      this.$http.post(`${this.$url}/account/migration/initiate`, details)
      .then((response) => {
        if(response.data.status) {
          Swal.fire({
            icon: "success",
            text: 'Successful',
            showCloseButton: true,
          })
          .then(() => {
            window.location.reload()
          })
        }
        else {
          Swal.fire({
            icon: "error",
            text: response.data.message,
            showCloseButton: true,
            cancelButtonText: 'OK'
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
      .finally(() => {
        this.loading = false
      })
    },
  },
}
</script>

<style lang="scss">
  button {
    cursor: pointer !important;
  }
</style>
