<template>
  <b-form @submit.prevent="saveSettings">
    <b-card
      title="Messaging"
    >
      <b-row>
        <b-col md="12">
          <b-form-group
            label="Channel"
            label-for="mc-channel"
          >
            <select name="channel" id="channel" class="form-control" @change="selectOption($event)">
              <option value="">-- Select --</option>
              <option value="email">Email</option>
              <option value="push_notification">Push Notification</option>
            </select>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group
            label="Customer Category"
            label-for="mc-category"
          >
            <select name="category" id="category" class="form-control" @change="selectOption($event)">
              <option value="">---Select---</option>
              <option value="test_mail">Test Mail</option>
              <option value="all">All Customers</option>
              <option value="migration">Account Migration</option>
              <option value="active">Active Customers</option>
              <option value="rejected">Rejected KYC Customers</option>
              <option value="pending_kyc">Pending KYC</option>
              <option value="no_kyc">No KYC</option>
              <option value="dormant">Dormant Accounts</option>
            </select>
          </b-form-group>
        </b-col>

        <b-col md="12">
          <b-form-group
            label="Subject"
            label-for="mc-subject"
          >
            <b-form-input
              id="mc-subject"
              v-model="details.subject"
              placeholder="Subject"
            />
          </b-form-group>
        </b-col>

        <b-col md="12">
          <b-form-group
            label="Message"
            label-for="mc-message" 
          >
            <ckeditor :editor="editor" v-model="details.message" :config="editorConfig"></ckeditor>
          </b-form-group>
        </b-col>

        <b-col md="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
          >
            Send
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
  BRow, BCol, BFormGroup, BFormInput, BForm, BButton, BCard, BSpinner, BFormTextarea,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';

export default {
  components: {
    ClassicEditor,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BFormTextarea,
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
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {
        modules: {
          toolbar: '#toolbar',
        },
      }, 
     details: {
       subject: '',
       message: ''
     },
      loading: false,
    }
  },
  methods: {
    saveSettings() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#c91a4b",
        confirmButtonText: "Yes! Proceed",
        allowOutsideClick: false,
      })
      .then((result) => {
        if (result.value) {
          this.loading = true
          this.$http.post(`${this.$url}/messaging/send-email`, this.details)
            .then(response => {
              if (response.data.status) {
                // window.location.reload()
                Swal.fire({
                  icon: 'success',
                  text: 'Email successfully sent',
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
    selectOption(event) {
      const {name, value} = event.target
      this.details[name] = value
    }
  },
}
</script>
