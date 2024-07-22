<template>
  <b-card>
    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col sm="6">
          <b-form-group
            label="Name"
            label-for="account-name"
          >
            <b-form-input
              v-model="user.name"
              placeholder="name"
              name="name"
            />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group
            label="Email"
            label-for="account-email"
          >
            <b-form-input
              v-model="user.email"
              name="email"
              placeholder="Email"
              type="email"
            />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group
            label="Password"
            label-for="account-password"
          >
            <b-form-input
              v-model="user.password"
              name="password"
              type="password"
              placeholder="password"
            />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group
            label="Password Confirmation"
            label-for="account-password_confirmation"
          >
            <b-form-input
              v-model="user.password_confirmation"
              name="password_confirmation"
              type="password"
              placeholder="Password Confirmation"
            />
          </b-form-group>
        </b-col>
        <b-col sm="12">
          <b-form-group
            label="Role"
            label-for="account-role"
          >
            <v-select
              v-model="user.role"
              :options="roleOptions"
              :clearable="false"
              input-id="user-role"
            />
          </b-form-group>
        </b-col>

        <!-- alert -->
        <!-- <b-col
          cols="12"
          class="mt-75"
        >
          <b-alert
            show
            variant="warning"
            class="mb-50"
          >
            <h4 class="alert-heading">
              Your email is not confirmed. Please check your inbox.
            </h4>
            <div class="alert-body">
              <b-link class="alert-link">
                Resend confirmation
              </b-link>
            </div>
          </b-alert>
        </b-col> -->
        <!--/ alert -->

        <b-col cols="12">
          <b-button
            @click="saveDetails"
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mt-2 mr-1"
          >
            Save changes
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
  BFormFile, BButton, BForm, BFormGroup, BSpinner, BFormInput, BRow, BCol, BAlert, BCard, BCardText, BMedia, BMediaAside, BMediaBody, BLink, BImg,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'

export default {
  components: {
    BButton,
    BForm,
    BImg,
    BFormFile,
    BFormGroup,
    BSpinner,
    BFormInput,
    BRow,
    BCol,
    BAlert,
    BCard,
    BCardText,
    BMedia,
    BMediaAside,
    BMediaBody,
    BLink,
    vSelect,
  },
  directives: {
    Ripple,
  },
  props: {
    generalData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      optionsLocal: JSON.parse(JSON.stringify(this.generalData)),
      profileFile: null,
      roleOptions: [
        'user',
        'admin',
      ],
      details: {
        name: '',
        email: '',
        role: '',
        password: '',
        password_confirmation: '',
      },
      loading: false,
      user: {},
      user_id: 1,
    }
  },
  methods: {
    resetForm() {
      this.optionsLocal = JSON.parse(JSON.stringify(this.generalData))
    },
    saveDetails() {
      this.loading = true
      this.$http.put(`${this.$url}/profile/${this.user_id}/update`, this.user)
      .then(response => {
        if (response.data.status) {
          window.location.reload()
        }
      })
      .finally(() => {
        this.loading = false
      })
    },
    getUser() {
      let user = localStorage.getItem('userData')
      this.user = JSON.parse(user)
      this.user_id = this.user.user_id
    },      
  },
  mounted() {
    this.getUser()
  },
  setup() {
    const refInputEl = ref(null)
    const previewEl = ref(null)

    const { inputImageRenderer } = useInputImageRenderer(refInputEl, previewEl)

    return {
      refInputEl,
      previewEl,
      inputImageRenderer,
    }
  },
}
</script>

<style lang="scss">
  @import '@core/scss/vue/libs/vue-select.scss';
</style>
