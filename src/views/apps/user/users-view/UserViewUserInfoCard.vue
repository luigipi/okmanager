<template>
  <b-card>
    <b-row>
      <!-- User Info: Left col -->
      <b-col
        cols="21"
        xl="6"
        class="d-flex justify-content-between flex-column"
      >
        <!-- User Avatar & Action Buttons -->
        <div class="d-flex justify-content-start">
          <b-avatar
            :src="userData.avatar"
            :text="avatarText(userData.first_name+' '+userData.last_name)"
            :variant="`light-${resolveUserRoleVariant('customer')}`"
            size="104px"
            rounded
          />
          <div class="d-flex flex-column ml-1">
            <div class="mb-1">
              <h4 class="mb-0">
                {{ userData.first_name+' '+userData.middle_name+' '+userData.last_name }}
              </h4>
              <span class="card-text">{{ userData.email }}</span>
            </div>
            <div class="d-flex flex-wrap">
              <b-button
                :to="{ name: 'apps-users-edit', params: { id: userData.id } }"
                variant="primary"
              >
                Edit
              </b-button>
              <b-button
                variant="outline-danger"
                class="ml-1"
                @click="deleteAccount(userData.id)"
              >
                Delete
              </b-button>
            </div>
          </div>
        </div>

        <!-- User Stats -->
        <div class="d-flex align-items-center mt-2">
          <div class="d-flex align-items-center mr-2">
            <b-avatar
              variant="light-primary"
              rounded
            >
              <!-- <feather-icon
                icon="DollarSignIcon"
                size="18"
              /> -->
              ₦
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                {{ userData.ai_credit }}
              </h5>
              <small>AI Credit</small>
            </div>
          </div> 

          <div class="d-flex align-items-center">
            <b-avatar
              variant="light-success"
              rounded
            >
              <feather-icon
                icon="TrendingUpIcon"
                size="18"
              />
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                {{ userData.kyc_tier}}
              </h5>
              <small>Account Tier</small>
            </div>
          </div>
        </div>
      </b-col>

      <!-- Right Col: Table -->
      <b-col
        cols="12"
        xl="6"
      >
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="UserIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">User Type</span>
            </th>
            <td class="pb-50">
              Customer
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CheckIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Status</span>
            </th>
            <td :class="'pb-50 text-capitalize '">
              {{ userData.profile_status != ' ' ? userData.profile_status : 'Pending' }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="StarIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Referral Code</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ userData.referer_code }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="FlagIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">State/City</span>
            </th>
            <td class="pb-50">
              {{ userData.state+'/'+userData.city }}
            </td>
          </tr>
          <tr>
            <th>
              <feather-icon
                icon="PhoneIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Contact</span>
            </th>
            <td>
              {{ userData.phone_number }}
            </td>
          </tr>
          <tr>
            <th>
              <feather-icon
                icon="CheckIcon"
                class="mr-75"
                variant="success"
              />
              <span class="font-weight-bold">Joined</span>
            </th>
            <td>
              {{ userData.created_at_formatted }}
            </td>
          </tr>
          <tr>
            <th>
              <feather-icon
                icon="CheckIcon"
                class="mr-75"
                variant="success"
              />
              <span class="font-weight-bold">Username</span>
            </th>
            <td>
              {{ userData.username }}
            </td>
          </tr>
        </table>
      </b-col>
    </b-row>
    <div class="text-right">
      <b-button-group>
        <b-button class="btn-sm" variant="primary" @click="manageProfile('suspend', userData.id)" v-show="userData.profile_status === 'APPROVED'">Suspend</b-button>
        <b-button class="btn-sm" variant="danger" @click="manageProfile('close', userData.id)" v-show="userData.profile_status === 'APPROVED'">Close</b-button>
        <b-button class="btn-sm" variant="success" @click="manageProfile('activate', userData.id)" v-show="userData.profile_status !== 'APPROVED'">Activate</b-button>
      </b-button-group>
      <button type="button" class="btn  btn-sm text-primary  btn-light" @click="toggleMore">
        See more 
        <feather-icon
          icon="ChevronDownIcon"
          class="mr-75"
        />
      </button>
    </div>
    <hr>
    <b-row class="mt-3m" v-show="view_more">
      <b-col
        cols="12"
        xl="6"
      >
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <span class="font-weight-bold">BVN</span>
            </th>
            <td class="pb-50">
              {{ userData.bvn }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <span class="font-weight-bold">Street</span>
            </th>
            <td :class="'pb-50 text-capitalize '">
              {{ userData.street_name }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <span class="font-weight-bold">City</span>
            </th>
            <td :class="'pb-50 text-capitalize '">
              {{ userData.city }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <span class="font-weight-bold">State</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ userData.state }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <span class="font-weight-bold">Place of Birth</span>
            </th>
            <td class="pb-50">
              {{userData.place_of_birth}}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <span class="font-weight-bold">Country</span>
            </th>
            <td class="pb-50">
              Nigeria
            </td>
          </tr>
        </table>
      </b-col>
      <b-col
        cols="12"
        xl="6"
      >
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <span class="font-weight-bold">Gender</span>
            </th>
            <td class="pb-50">
              {{ userData.gender }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <span class="font-weight-bold">Date of Birth</span>
            </th>
            <td :class="'pb-50 text-capitalize '">
              {{ userData.dob }}
            </td>
          </tr>
        </table>
      </b-col>
      <!-- <b-col cols="12" xl="12" align-self="end" class="text-right">
        <b-button-group>
          <b-button variant="primary" @click="manageProfile('suspend')" v-show="userData.profile_status === 'APPROVED'">Suspend</b-button>
          <b-button variant="danger" @click="manageProfile('close')" v-show="userData.profile_status === 'APPROVED'">Close</b-button>
          <b-button variant="success" @click="manageProfile('activate')" v-show="userData.profile_status !== 'APPROVED'">Activate</b-button>
        </b-button-group>
      </b-col> -->
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BButton, BAvatar, BRow, BCol, BButtonGroup
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import useUsersList from '../users-list/useUsersList'
import Swal from 'sweetalert2'

export default {
  components: {
    BCard, BButton, BRow, BCol, BAvatar, BButtonGroup,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { resolveUserRoleVariant } = useUsersList()
    return {
      avatarText,
      resolveUserRoleVariant,
    }
  },
  data() {
    return {
      view_more: false,
    }
  },
  methods: {
    toggleMore() {
      this.view_more = !this.view_more
    },
    deleteAccount(id) {
      Swal.fire({
        icon: 'warning',
        text: 'Are you sure you want to delete this customer?',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#ff0000',
        confirmButtonText: 'Yes Delete!',
        cancelButtonText: 'No, Cancel',
        allowOutsideClick: false,
      })
      .then((result) => {
        if (result.isConfirmed === true) {
          this.$http.delete(`${this.$url}/customers/${id}`)
          .then((response) => {
            if(response.status) {
              Swal.fire({
                icon: 'success',
                text: 'Customer deleted successfully'
              })
              .then(() => {
                window.location.replace('apps/users/list')
              })
            }
          }) 
          .finally(() => {
            this.loading = false
          })
        }
      })
    },
    manageProfile(option, user_id) {
      Swal.fire({
        icon: 'warning',
        text: `Are you sure you want to ${option} this customer?`,
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#ff0000',
        confirmButtonText: 'Yes Proceed!',
        cancelButtonText: 'No, Cancel',
        allowOutsideClick: false,
      })
      .then((result) => {
        if (result.isConfirmed === true) {
          this.$http.post(`${this.$url}/customers/manage-profile`, {customer_id: user_id, option: option})
          .then((response) => {
            if(response.data.status) {
              Swal.fire({
                icon: 'success',
                text: response.data.message
              })
              // .then(() => {
              //   window.location.replace('apps/users/list')
              // })
            }
          }) 
          .finally(() => {
            this.loading = false
          })
        }
      })
    },
  }
}
</script>

<style>

</style>
