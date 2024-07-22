<template>
  <b-card>
    <b-form>
      <b-row>
        <b-col cols="12">
          <div class="d-flex align-items-center mb-2">
            <feather-icon
              icon="UserPlusIcon"
              size="18"
            />
            <h4 class="mb-0 ml-75">
              Create New User
            </h4>
          </div>
        </b-col>

        <!-- name -->
        <b-col md="6">
          <b-form-group
            label-for="account-name"
            label="Name"
          >
            <b-form-input
              id="account-name"
              v-model="details.name"
              placeholder="Name"
            />
          </b-form-group>
        </b-col>
        <!--/ name -->

        <!-- email -->
        <b-col md="6">
          <b-form-group
            label-for="account-email"
            label="Email Address"
          >
            <b-form-input
              id="account-email"
              v-model="details.email"
              placeholder="Email address"
              type="email"
            />
          </b-form-group>
        </b-col>
        <!--/ email -->

        <!-- password -->
        <b-col md="6">
          <b-form-group
            label-for="account-password"
            label="Password"
          >
            <b-form-input
              id="account-password"
              v-model="details.password"
              placeholder="Password"
              type="password"
            />
          </b-form-group>
        </b-col>
        <!--/ password+ -->

        <!-- password_confirmation -->
        <b-col md="6">
          <b-form-group
            label-for="account-password_confirmation"
            label="Password Confirmation"
          >
            <b-form-input
              id="account-password_confirmation"
              v-model="details.password_confirmation"
              placeholder="Password Confirmation"
              type="password"
            />
          </b-form-group>
        </b-col>
        <!-- password_confirmation -->

        <!-- role -->
        <b-col md="12">
          <b-form-group
            label="Role"
            label-for="account-role"
          >
            <v-select
              v-model="details.role"
              :options="roleOptions"
              :clearable="false"
              input-id="user-role"
            />
          </b-form-group>
        </b-col>
        <!--/ role -->

        <!-- buttons -->
        <b-col cols="12">
          <b-button
            @click="addUser"
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mt-1 mr-1"
          >
            Save changes
            <b-spinner 
              v-show="loading"
              variant="light"
              small
            />
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            class="mt-1 ml-25"
            variant="outline-secondary"
            @click.prevent="resetForm"
          >
            Cancel
          </b-button>
        </b-col>
        <!--/ buttons -->
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import {
  BButton, BForm, BFormGroup, BFormInput, BRow, BCol, BCard, BCardText, BLink, BAvatar, BSpinner,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BRow,
    BSpinner,
    BCol,
    BCard,
    BCardText,
    BLink,
    BAvatar,
    vSelect,
  },
  directives: {
    Ripple,
  },
  props: {
    socialData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      localOptions: JSON.parse(JSON.stringify(this.socialData)),
      roleOptions: [
        'user',
        'Admin',
      ],
      details: {},
      loading: false,
    }
  },
  methods: {
    resetForm() {
      this.localOptions = JSON.parse(JSON.stringify(this.socialData))
    },
    addUser() {
      this.loading = true
      this.$http.post(`${this.$url}/auth/create-user`, this.details)
      .then(response => {
        // console.log(response)
        if (response.data.status) {
          window.location.reload()
        }
        else {
          alert('failed')
        }
      })
      .finally(() => {
        this.loading = false
      })
    }
  },
}
</script>

<style lang="scss">
  @import '@core/scss/vue/libs/vue-select.scss';
</style>
