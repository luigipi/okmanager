<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo bg-dark">
        <!-- <vuexy-logo /> -->
        <h2 class="brand-text text-primary ml-1">
          OkPay
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title
            class="mb-1 font-weight-bold"
            title-tag="h2"
          >
            Welcome to OkPay
          </b-card-title>
          <b-card-text class="mb-2">
            Please sign-in to your account
          </b-card-text>

          <b-alert
            v-show="alert"
            variant="danger"
            show
          >
            <div class="alert-body font-small-2">
              <p>
                {{ alertMessage }}
              </p>
            </div>
            <feather-icon
              v-b-tooltip.hover.left="'OkPay Validation error'"
              icon="HelpCircleIcon"
              size="18"
              class="position-absolute"
              style="top: 10; right: 10;"
            />
          </b-alert>

          <!-- form -->
          <validation-observer
            ref="loginForm"
            #default="{invalid}"
          >
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent="login"
            >
              <!-- email -->
              <b-form-group
                label="Email"
                label-for="login-email"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  vid="email"
                  rules="required|email"
                >
                  <b-form-input
                    id="login-email"
                    v-model="userEmail"
                    :state="errors.length > 0 ? false:null"
                    name="login-email"
                    placeholder="peter@drewshive.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Password</label>
                  <!-- <b-link :to="{name:'auth-forgot-password'}">
                    <small>Forgot Password?</small>
                  </b-link> -->
                </div>
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  vid="password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      :state="errors.length > 0 ? false:null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="login-password"
                      placeholder="Password"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- checkbox -->
              <b-form-group>
                <b-form-checkbox
                  id="remember-me"
                  v-model="status"
                  name="checkbox-1"
                >
                  Remember Me
                </b-form-checkbox>
              </b-form-group>

              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="primary"
                block
                :disabled="invalid"
              >
                Sign in
                <b-spinner
                  v-show="loading"
                  variant="light"
                  small
                />
              </b-button>
            </b-form>
          </validation-observer>

          <!-- <b-card-text class="text-center mt-2">
            <span>New on our platform? </span>
            <b-link :to="{name:'auth-register'}">
              <span>&nbsp;Create an account</span>
            </b-link>
          </b-card-text> -->

        </b-col>
      </b-col>
    <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BFormCheckbox, BCardText, BCardTitle, BImg, BForm, BButton, BAlert, VBTooltip, BSpinner,
} from 'bootstrap-vue'
import useJwt from '@/auth/jwt/useJwt'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import { getHomeRouteForLoggedInUser } from '@/auth/utils'

import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  directives: {
    'b-tooltip': VBTooltip,
  },
  components: {
    BSpinner,
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    BAlert,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      loading: false,
      alert: false,
      alertMessage: '',
      status: '',
      password: '',
      userEmail: '',
      sideImg: require('@/assets/images/pages/login-v2.svg'),

      // validation rules
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    login() {
      this.laoding = true
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          useJwt.login(`${this.$url}/auth/login`, {
            email: this.userEmail,
            password: this.password,
          })
            .then(response => {
                let userData  = response.data.data
                // console.log(response)
                if(response.data.status) {
                  useJwt.setToken(response.data.access_token)
                  useJwt.setRefreshToken(response.data.access_token)
                  userData.ability = [{subject: "all", action: "manage"}];
                  localStorage.setItem('userData', JSON.stringify(userData))
                  this.$ability.update([{subject: "all", action: "manage"}])
                  // this.$ability.update([{subject: "all", action: "manage"}])
                  this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: `Welcome ${userData.name}`,
                      icon: 'CoffeeIcon',
                      variant: 'success',
                      text: `You have successfully logged in as ${userData.role}. Now you can start to explore!`,
                    },
                  })
                  if(userData.role != 'admin') {
                    this.$router.push('/apps/email')
                  }
                  else {
                    this.$router.push('/')
                  }
                }
            })
            .catch(error => {
              if(!error.response.data.status) {
                this.alertMessage = error.response.data.message
                this.alert = true
                this.$toast({
                  component: ToastificationContent,
                  position: 'top-right',
                  props: {
                    title: `Error`,
                    icon: 'CoffeeIcon',
                    variant: 'danger',
                    text: error.response.data.message,
                  },
                })                  
              }
              this.$refs.loginForm.setErrors(error.response.data.error)
              // console.log(error)
            })
            .finally(() => {
              this.loading = false
            })
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
