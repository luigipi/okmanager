<template>
  <b-sidebar
    id="add-new-user-sidebar"
    :visible="isAddNewUserSidebarActive"
    bg-variant="white"
    sidebar-class="sidebar-lg"
    shadow
    backdrop
    no-header
    right
    @hidden="resetForm"
    @change="(val) => $emit('update:is-add-new-user-sidebar-active', val)"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Create Customer
        </h5>

        <feather-icon
          class="ml-1 cursor-pointer"
          icon="XIcon"
          size="16"
          @click="hide"
        />
      </div>

      <!-- BODY -->
      <validation-observer
        #default="{ handleSubmit }"
        ref="refFormObserver"
      >
        <!-- Form -->
        <b-form
          class="p-2"
          @submit.prevent="handleSubmit(onSubmit)"
          @reset.prevent="resetForm"
        >
          <!-- First Name -->
          <validation-provider
            #default="validationContext"
            name="First Name"
            rules="required"
          >
            <b-form-group
              label="First Name"
              label-for="first-name"
            >
              <b-form-input
                id="first-name"
                v-model="details.name"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder="First Name"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Last Name -->
          <validation-provider
            #default="validationContext"
            name="Last Name"
            rules="required"
          >
            <b-form-group
              label="Last Name"
              label-for="last-name"
            >
              <b-form-input
                id="last-name"
                v-model="details.name"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder="Last Name"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Email -->
          <validation-provider
            #default="validationContext"
            name="Email"
            rules="required|email"
          >
            <b-form-group
              label="Email"
              label-for="email"
            >
              <b-form-input
                id="email"
                v-model="details.email"
                :state="getValidationState(validationContext)"
                placeholder="Email"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider
            #default="validationContext"
            name="Password"
            rules="required"
          >
            <b-form-group
              label="Password"
              label-for="password"
            >
              <b-form-input
                id="password"
                v-model="details.password"
                type="password"
                placeholder="Password"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider
            #default="validationContext"
            name="Confirm Password"
            rules="required"
          >
            <b-form-group
              label="Confirm Password"
              label-for="password_confirmation"
            >
              <b-form-input
                id="password_confirmation"
                v-model="details.password_confirmation"
                type="password"
                placeholder="Confirm Password"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Phone Number -->
          <validation-provider
            #default="validationContext"
            name="Phone Number"
            rules="required"
          >
            <b-form-group
              label="Phone Number"
              label-for="phone_number"
            >
              <b-form-input
                id="phone_number"
                v-model="details.phone_number"
                :state="getValidationState(validationContext)"
                placeholder="Phone Number"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- City -->
          <validation-provider
            #default="validationContext"
            name="City"
            rules="required"
          >
            <b-form-group
              label="City"
              label-for="city"
            >
              <b-form-input
                id="city"
                v-model="userData.city"
                :state="getValidationState(validationContext)"
                placeholder="City"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Country -->
          <validation-provider
            #default="validationContext"
            name="Means of Idenitification"
            rules="required"
          >
            <b-form-group
              label="Means of Idenitification"
              label-for="cards"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="details.card_type"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="cardTypes"
                :clearable="false"
                input-id="cards"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- upload -->
          <b-form-group
            label=""
            label-for=""
          >
            <input
              id="file"
              type="file"
              required
              @change="handleCardUpload"
            >
          </b-form-group>

          <!-- Form Actions -->
          <div class="d-flex mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-2"
              type="button"
              @click="createAccount"
            >
              Add
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="button"
              variant="outline-secondary"
              @click="hide"
            >
              Cancel
            </b-button>
          </div>
        </b-form>
      </validation-observer>
    </template>
  </b-sidebar>
</template>

<script>
import {
  BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { ref } from '@vue/composition-api'
import { required, alphaNum, email } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
// import countries from '@/@fake-db/data/other/countries'
import store from '@/store'

export default {
  components: {
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    vSelect,

    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isAddNewUserSidebarActive',
    event: 'update:is-add-new-user-sidebar-active',
  },
  props: {
    isAddNewUserSidebarActive: {
      type: Boolean,
      required: true,
    },
    roleOptions: {
      type: Array,
      required: true,
    },
    planOptions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      required,
      alphaNum,
      email,
      details: {},
      form: new FormData(),
      cardTypes: [
        'Drivers License',
        "Voter's Card",
        'National ID Card',
        'International Passport',
      ],
    }
  },
  setup(props, { emit }) {
    const blankUserData = {
      fullName: '',
      username: '',
      email: '',
      role: null,
      currentPlan: null,
      company: '',
      country: '',
      contact: '',
    }

    const userData = ref(JSON.parse(JSON.stringify(blankUserData)))
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(blankUserData))
    }

    const onSubmit = () => {
      store.dispatch('app-user/addUser', userData.value)
        .then(() => {
          emit('refetch-data')
          emit('update:is-add-new-user-sidebar-active', false)
        })
    }

    const {
      refFormObserver,
      getValidationState,
      resetForm,
    } = formValidation(resetuserData)

    return {
      userData,
      onSubmit,

      refFormObserver,
      getValidationState,
      resetForm,
    }
  },
  methods: {
    createAccount() {
      this.form.append('name', this.details.name)
      this.form.append('email', this.details.email)
      this.form.append('phone_number', this.details.phone_number)
      this.form.append('password', this.details.password)
      this.form.append('password_confirmation', this.details.password_confirmation)
      this.form.append('city', this.details.city)
      this.form.append('card_type', this.details.card_type)
      this.$http.post(`${this.$url}/accounts/signup`, this.form)
        .then(response => {
          // console.log(response)
          if (response.data.status) {
            window.location.reload()
          }
        })
        .catch(error => console.log(error))
    },
    handleCardUpload(event) {
      const files = event.target.files || event.dataTransfer.files
      if (!files.length) return
      this.form.append('means_of_id', files[0])
      // console.log(files[0])
      // if(files[0].size > 1025000) {
      //   Swal.fire('Error', 'File too large', 'error')
      //   return
      // }
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#add-new-user-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
</style>
