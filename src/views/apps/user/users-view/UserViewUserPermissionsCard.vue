<template>
  <b-card
    no-body
  >
    <b-card-body>
      <b-card-title class="d-flex justify-content-between">
       <p class="m-0">
         KYC <small>(Know Your Customer)</small>
       </p> 
       <h5>Overall status: <strong :class="`text-trans ${userData.kyc_status == 'approved' ? 'text-success' : 'text-danger'}`">{{ userData.kyc_status }}</strong> </h5>
      </b-card-title>
        <div v-if="userData.kyc && userData.kyc.length">
          <div class="" v-for="kyc in userData.kyc" :key="kyc.id" >
            <div class="d-flex align-items-center justify-content-between mb-1">
              <div>
                <strong>{{kyc.file_name}}</strong>
                <a :href="kyc.file_path" target="_blank" class="ml-2">
                  <strong>Click to view</strong>
                </a>
              </div>
              <div>
                <strong 
                  :class="kyc.verification_status.toLowerCase() === 'approved' ? 'text-success' 
                  : (kyc.verification_status.toLowerCase() === 'pending' ? 'text-warning' : 'text-danger')"
                >
                  {{ kyc.verification_status}}
                </strong>

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
                  <b-dropdown-item 
                    v-if="kyc.verification_status.toLowerCase() === 'pending'"
                    @click="actionConfirmation(kyc.id, 'approve', 'kyc')"
                  >
                    <feather-icon icon="CheckCircleIcon" />
                    <span class="align-middle ml-50">Approve</span>
                  </b-dropdown-item>
    
                  <b-dropdown-item 
                    v-if="kyc.verification_status.toLowerCase() === 'pending'"
                    @click="actionConfirmation(kyc.id, 'rejected', 'kyc')"
                  >
                    <feather-icon icon="XCircleIcon" />
                    <span class="align-middle ml-50">Reject</span>
                  </b-dropdown-item>
    
                  <b-dropdown-item @click="manageDocument(kyc.id)">
                    <feather-icon icon="TrashIcon" />
                    <span class="align-middle ml-50">Delete</span>
                  </b-dropdown-item>
                </b-dropdown>   
              </div>
            </div>
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
      </b-button>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardBody, BCardTitle, BButton, BDropdown, BDropdownItem, BSpinner
} from 'bootstrap-vue'
import Swal from 'sweetalert2'

export default {
  components: {
    BCard, BCardBody, BCardTitle, BButton, BDropdown, BDropdownItem, BSpinner
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
        option: event.target.id,
      }
      this.$http.post(`${this.$url}/customers/verify`, details)
        .then(() => {
          // console.log('===', response)
          window.location.reload()
        })
        .finally(() => {
          this.loading = false
        })
    },
    manageDocument(document_id, option) {
      this.loading = true
      this.$http.get(`${this.$url}/compliance/verify-document/${document_id}/${option}`)
        .then(() => {
          // console.log('===', response)
          window.location.reload()
        })
        .finally(() => {
          this.loading = false
        })
    },
    actionConfirmation(document_id, option, model) {
      Swal.fire({
        title: `Are you sure?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes! Proceed'
      })
      .then((result) => {
        if (result.isConfirmed && model === 'kyc') {
            this.manageDocument(document_id, option);
        } 
        else {
          Swal.close();
        }
      })
    }
  },
}
</script>

<style>
  .text-trans {
    text-transform: capitalize;
  }
</style>
