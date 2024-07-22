<template>
  <div>
    <b-row class="match-height">
      <b-col
        xl="12"
        md="12"
      >
        <b-card
          class="card-statistics"
        >
          <b-card-body class="statistics-body">
            <b-row>
              <b-col
                xl="4"
                sm="4"
                class="mb-2 mb-xl-0"
              >
                <b-media no-body>
                  <b-media-aside
                    class="mr-2"
                  >
                    <b-avatar
                      size="48"
                      :variant="'light-success'"
                    >
                      <feather-icon
                        size="24"
                        icon="UsersIcon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      {{ verified || 0 }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      Verified
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col>

              <b-col
                xl="4"
                sm="4"
                class="mb-2 mb-xl-0"
              >
                <b-media no-body>
                  <b-media-aside
                    class="mr-2"
                  >
                    <b-avatar
                      size="48"
                      :variant="'light-danger'"
                    >
                      <feather-icon
                        size="24"
                        icon="UsersIcon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      {{ unverified || 0 }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      Unverified
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <user-list-add-new
      :is-add-new-user-sidebar-active.sync="isAddNewUserSidebarActive"
      :role-options="roleOptions"
      :plan-options="planOptions"
      @refetch-data="refetchData"
    />

    <b-row class="match-height mt-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header border-bottom">
            <h4 class="card-title">
              Customers
            </h4>
          </div>

          <div class="m-2">
            <!-- Table Top -->
            <b-row>
              <!-- Per Page -->
              <b-col
                cols="12"
                md="6"
                class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
              >
                <!-- <label>entries</label> -->
                  <b-button
                    variant="primary"
                    :disabled="accountIds.length == 0"
                    class="ml-3"
                    @click="deleteAccount"
                  >
                    <span class="text-nowrap">Delete</span>
                  </b-button>                
              </b-col>

              <!-- Search -->
              <b-col
                cols="12"
                md="6"
              >
                <div class="d-flex align-items-center justify-content-end">
                  <b-form-input
                    v-model="searchQuery"
                    class="d-inline-block mr-0"
                    placeholder="Search by email phone number or account status e.g verified or unverified"
                  />
                  <b-button
                    variant="primary"
                    class="mr-1"
                    @click="searchList"
                  >
                    <span class="text-nowrap">Search</span>
                  </b-button>
                  <b-button
                    variant="primary"
                    @click="isAddNewUserSidebarActive = true"
                  >
                    <span class="text-nowrap">Add User</span>
                  </b-button>
                </div>
              </b-col>
            </b-row>
          </div>

          <div class="card-datatable table-responsive">
            <table class="datatables-ajax table">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>
                    <small class="mr-1">
                      <input type="checkbox" class="checks"  value="all" @change="populateIds($event)" />
                      Select all
                    </small>
                    Name
                  </th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>SN</th>
                  <th>
                    <small class="mr-1">
                      <input type="checkbox" class="checks"  value="all" @change="populateIds($event)" />
                      Select all
                    </small>
                    Name
                  </th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                <tr
                  v-for="(merchant, index) in merchants"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <td>
                    <input type="checkbox" class="mr-1 checks" :value="merchant.id" @change="populateIds($event)" />
                    <b-avatar
                      size="32"
                      :src="merchant.avatar"
                      :text="avatarText(merchant.name)"
                      :variant="`light-${resolveUserRoleVariant(merchant.role)}`"
                      :to="{ name: 'apps-users-view', params: { id: merchant.id } }"
                    />                    
                    {{ merchant.name }}
                  </td>
                  <td>{{ merchant.email }}</td>
                  <td>{{ merchant.phone_number }}</td>
                  <td :class="merchant.is_verified === 'Verified' ? 'text-success' : 'text-danger'">
                    <b-badge
                      pill
                      :variant="merchant.is_verified === 'Verified' ? 'success' : 'danger'"
                      class="text-capitalize"
                    >
                      {{ merchant.is_verified }}
                    </b-badge>                    
                  </td>
                  <td>
                    <b-dropdown
                      variant="link"
                      no-caret
                      :right="$store.state.appConfig.isRTL"
                    >
                      <template #button-content>
                        <feather-icon
                          icon="MoreVerticalIcon"
                          size="16"
                          class="align-middle text-body"
                        />
                      </template>
                      <b-dropdown-item :to="{ name: 'apps-users-view', params: { id: merchant.id } }">
                        <feather-icon icon="FileTextIcon" />
                        <span class="align-middle ml-50">Details</span>
                      </b-dropdown-item>

                      <b-dropdown-item :to="{ name: 'apps-users-edit', params: { id: merchant.id } }">
                        <feather-icon icon="EditIcon" />
                        <span class="align-middle ml-50">Edit</span>
                      </b-dropdown-item>

                      <b-dropdown-item @click="deleteAccount(merchant.id)">
                        <feather-icon icon="TrashIcon" />
                        <span class="align-middle ml-50">Delete</span>
                      </b-dropdown-item>
                    </b-dropdown>               
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>           
      </div>
    </b-row>
    <div class="mx-2 mb-2">
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li :class="link.active ? 'page-item active' : 'page-item'" v-for="link in meta.links" :key="link.id">
            <a class="page-link" href="javascript:;" @click="paginate(link.url)" v-html="link.label"></a>
          </li>
        </ul>
      </nav>        
    </div>    
  </div>
</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination, BCardText, BMediaAside,
  BCardBody, BMediaBody,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import store from '@/store'
import { ref, onUnmounted } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import useUsersList from './users-list/useUsersList'
// import userStoreModule from '../userStoreModule'
// import UserListAddNew from './UserListAddNew.vue'
import Swal from 'sweetalert2';

export default {
  components: {
    UserListAddNew,
    BCardBody,
    BMediaBody,
    BCardText,
    BMediaAside,
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,

    vSelect,
  },
  setup() {
    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    const isAddNewUserSidebarActive = ref(false)

    const roleOptions = [
      { label: 'Admin', value: 'admin' },
      { label: 'Author', value: 'author' },
    ]

    const planOptions = [
      { label: 'Basic', value: 'basic' },
      { label: 'Company', value: 'company' },
      { label: 'Enterprise', value: 'enterprise' },
      { label: 'Team', value: 'team' },
    ]

    const statusOptions = [
      { label: 'Pending', value: 'pending' },
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ]

    const {
      fetchUsers,
      tableColumns,
      perPage,
      currentPage,
      totalUsers,
      dataMeta,
      perPageOptions,
      sortBy,
      isSortDirDesc,
      refUserListTable,
      refetchData,

      // UI
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      resolveUserStatusVariant,

      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,
    } = useUsersList()

    return {

      // Sidebar
      isAddNewUserSidebarActive,

      fetchUsers,
      tableColumns,
      perPage,
      currentPage,
      totalUsers,
      dataMeta,
      perPageOptions,
      sortBy,
      isSortDirDesc,
      refUserListTable,
      refetchData,

      // Filter
      avatarText,

      // UI
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      resolveUserStatusVariant,

      roleOptions,
      planOptions,
      statusOptions,

      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,
    }
  },

  data() {
    return {
      agents: [],
      meta: {},
      links: {},
      url: '',
      searchQuery: '',
      verified: 0,
      unverified: 0,
      all: [],
      accountIds:[],
      merchants: [],
    } 
  },

  computed: {
    lisFilter() {
      return this.agents.filter(agent => agent.email.includes(this.searchQuery) || agent.email.toLowerCase().includes(this.searchQuery) || agent.phone_number.includes(this.searchQuery))
    },
    merchantList() {
      return this.all.filter(agent => agent.email.includes(this.searchQuery) || agent.email.toLowerCase().includes(this.searchQuery) || agent.phone_number.includes(this.searchQuery))
    }
  },

  created() {
    this.url = this.$url+'/accounts'
    this.getAgents()
    // this.getAll()
  },
  methods: {
    populateIds(event) {
      let elem = document.getElementsByClassName('checks')
      if(event.target.value === 'all' && event.target.checked === true) {
        // this.accountIds = this.merchants.map(e => {return e.id})
        elem.forEach(element => {
          element.setAttribute('checked', true)
          element.value !== 'all' ? this.accountIds.push(element.value) : null
        });
      }
      else if(event.target.value === 'all' && event.target.checked === false){
        elem.forEach(element => {
          element.removeAttribute('checked')
          this.accountIds = this.accountIds.filter(acc => acc !== element.value)
        });          
      }
      if(event.target.checked === true && event.target.value !== 'all') {
          this.accountIds.push(event.target.value)
      }
      else if(event.target.checked === false) {
        this.accountIds = this.accountIds.filter(acc => acc !== event.target.value)
      }

      console.log(this.accountIds)
    },
    paginate(url) {
      this.url = url
      this.getAgents()
    }, 
    searchList() {
     let param = this.searchQuery === 'verified' || this.searchQuery === 'unverified' ? 'by_status' : 'email'
      this.url = `${this.$url}/accounts?${param}=${this.searchQuery}`;
      this.getAgents()
    },
    getAgents() {
      this.$http.get(this.url)
        .then(response => {
          this.merchants = response.data.data.data
          const merchants = response.data.data.data
          // console.log("M", merchants)
          this.meta = response.data.data.meta
          this.links = response.data.data.links      
          this.agents = merchants.map(agent => ({
            id: agent.id,
            agent_id: agent.agent_id,
            name: agent.name,
            phone_number: agent.phone_number,
            email: agent.email,
            avatar: agent.profile_avatar,
            referral_code: agent.referral_code,
            date: agent.created_at_formatted,
            city: agent.city,
            status: agent.is_verified ,
            role: 'user',
          }))
          this.verified = response.data.active_accounts
          this.unverified = response.data.inactive_accounts
        })
    },
    getAll() {
      this.$http.get(this.$url+'/accounts/list/all')
        .then(response => {
          // console.log("RESPONE", response.data.data)
          this.merchants = response.data.data.data
          this.all = response.data.data.data.map(agent => ({
            id: agent.id,
            agent_id: agent.agent_id,
            name: agent.name,
            phone_number: agent.phone_number,
            email: agent.email,
            avatar: agent.profile_avatar,
            referral_code: agent.referral_code,
            date: agent.created_at_formatted,
            city: agent.city,
            status: agent.isVerified ? 'Active' : 'Inactive',
            role: 'user',
          }))
        })
    },
    deleteAccount() {
      Swal.fire({
        icon: 'warning',
        html: `<p>Are you sure you want to do this?</p> <p>Data count: <strong>(${this.accountIds.length})</strong></p>`,
        showConfirmButton: true,
        showCancelButton:true,
        cancelButtonText: 'No, Cancel',
        confirmButtonText: 'Yes, Proceed',
        preConfirm: ((val) => {
          this.$http.post(`${this.$url}/accounts/bulk-delete`, {accounts: this.accountIds})
            .then(response => {
              console.log('resp', response)
              if (response.data.status) {
                Swal.fire({
                  icon: 'success',
                  text: 'Data deleted successfully',
                })
                .then(() => {
                  window.location.reload()
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
        })
      })
    },
  },
}

</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
