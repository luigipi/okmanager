<template>
  <div>
    <!-- Media -->
    <b-media class="mb-2">
      <template #aside>
        <b-avatar
          ref="previewEl"
          :src="userData.avatar"
          :text="avatarText(userData.name)"
          :variant="`light-${resolveUserRoleVariant(userData.role)}`"
          size="90px"
          rounded
        />
      </template>
      <h4 class="mb-1">
        {{ userData.name }}
      </h4>
      <div class="d-flex flex-wrap">
        <b-button
          variant="primary"
          @click="$refs.refInputEl.click()"
        >
          <input
            ref="refInputEl"
            type="file"
            class="d-none"
            @input="inputImageRenderer"
          >
          <span class="d-none d-sm-inline">Change</span>
          <feather-icon
            icon="EditIcon"
            class="d-inline d-sm-none"
          />
        </b-button>
        <b-button
          variant="outline-secondary"
          class="ml-1"
        >
          <span class="d-none d-sm-inline">Remove</span>
          <feather-icon
            icon="TrashIcon"
            class="d-inline d-sm-none"
          />
        </b-button>
      </div>
    </b-media>

    <!-- User Info: Input Fields -->
    <b-form>
      <b-row>
        <!-- Field: Username -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="First Name"
            label-for="first_name"
          >
            <b-form-input
              id="first_name"
              v-model="userData.first_name"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Middle Name"
            label-for="middle_name"
          >
            <b-form-input
              id="middle_name"
              v-model="userData.middle_name"
            />
          </b-form-group>
        </b-col>
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Last Name"
            label-for="last_name"
          >
            <b-form-input
              id="last_name"
              v-model="userData.last_name"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Email"
            label-for="email"
          >
            <b-form-input
              id="email"
              v-model="userData.email"
              type="email"
            />
          </b-form-group>
        </b-col>

        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Phone Number"
            label-for="phone_number"
          >
            <b-form-input
              id="phone_number"
              v-model="userData.phone_number"
              type="tel"
            />
          </b-form-group>
        </b-col>

        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="City"
            label-for="city"
          >
            <b-form-input
              id="city"
              v-model="userData.city"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Status -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Account Status"
            label-for="user-status"
          >
            <v-select
              v-model="userData.profile_status"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="statusOptions"
              :reduce="val => val.value"
              :clearable="false"
              input-id="user-status"
            />
          </b-form-group>
        </b-col>
        
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Referral Code"
            label-for="referral_code"
          >
            <b-form-input
              id="referral_code"
              v-model="userData.referral_code"
              type="text"
            />
          </b-form-group>
        </b-col>

        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="AI Credit"
            label-for="ai_credit"
          >
            <b-form-input
              id="ai_credit"
              v-model="userData.ai_credit"
              type="text"
              placeholder="AI Credit"
            />
          </b-form-group>
        </b-col>

        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Allow Login"
            label-for="allow-login"
          >
            <v-select
              v-model="userData.allow_login"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="loginOptions"
              :reduce="val => val.value" 
              :clearable="false"
              input-id="allow-login"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>

    <!-- Action Buttons -->
    <b-button
      variant="primary"
      class="mb-1 mb-sm-0 mr-0 mr-sm-1"
      :block="$store.getters['app/currentBreakPoint'] === 'xs'"
      @click="updateAccount"
    >
      Save Changes
      <b-spinner
        v-show="loading"
        variant="light"
        small
      />
    </b-button>
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BSpinner,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import vSelect from 'vue-select'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'
import useUsersList from '../users-list/useUsersList'

export default {
  components: {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BSpinner,
    BFormGroup,
    BFormInput,
    BForm,
    vSelect,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { resolveUserRoleVariant } = useUsersList()

    const roleOptions = [
      { label: 'Admin', value: 'admin' },
      { label: 'Author', value: 'author' },
      { label: 'Editor', value: 'editor' },
      { label: 'Maintainer', value: 'maintainer' },
      { label: 'Subscriber', value: 'subscriber' },
    ]

    const statusOptions = [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ]

    const loginOptionss = [
      { label: 'Yes', value: 1 },
      { label: 'No', value: 0 },
    ]

    // ? Demo Purpose => Update image on click of update
    const refInputEl = ref(null)
    const previewEl = ref(null)

    const { inputImageRenderer } = useInputImageRenderer(refInputEl, base64 => {
      // eslint-disable-next-line no-param-reassign
      props.userData.profile_avatar = base64
    })

    return {
      resolveUserRoleVariant,
      avatarText,
      roleOptions,
      statusOptions,
      //  ? Demo - Update Image on click of update button
      refInputEl,
      previewEl,
      inputImageRenderer,
    }
  },
  data() {
    return {
      details: this.userData,
      loading: false,
    }
  },
  created() {
    console.info('userData', this.details)
  },
  methods: {
    updateAccount() {
      this.loading = true
      const details = {
        name: this.userData.name,
        email: this.userData.email,
        phone_number: this.userData.phone_number,
        agent_id: this.userData.agent_id,
        city: this.userData.city,
        referral_code: this.userData.referral_code,
        user_type: this.userData.user_type,
      }
      this.$http.put(`${this.$url}/accounts/${this.userData.id}/update`, details)
        .then(respones => {
          if (respones.data.status) {
            this.userData = respones.data.data
            window.location.reload()
          }
        })
        .finally(() => {
          this.loading = false
        })
      // .catch(error => console.log(error))
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
