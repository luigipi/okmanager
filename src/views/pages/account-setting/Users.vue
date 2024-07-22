 <template>
  <section id="home-dashboard">
    <b-col
      md="9"
      lg="9"
    >
      <b-card
        no-body
      >
        <div class="card-header border-bottom">
          <h4 class="card-title">
            Users ({{ users.length }})
          </h4>
          <form>
            <div class="form-group">
              <input
                v-model="searchQuery"
                name="search"
                placeholder="Search"
                class="form-control"
              >
            </div>
          </form>
        </div>    

        <div class="card-datatable">
          <div>
            <b-button
              type="button"
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              v-b-modal.newUser
              variant="primary"
              class="mb-2 mt-2"
            >
              Add New User
            </b-button>            
          </div>
          <table class="datatables-ajax table table-responsive-lg w-100 ">
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </tfoot>
            <tbody>
              <tr
                v-for="(user, index) in usersFilter"
                :key="index"
              >
                <td>{{ index + 1  }}</td>
                <td>
                  {{ user.name }}
                </td>
                <td>{{ user.email }}</td>
                <td>
                  {{ user.role }}
                </td>
                <td>{{ user.created_at }}</td>
                <td>
                  <div class="btn-group">
                    <b-button
                      @click="selectUser(user.id, 'edit')"
                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                      v-b-modal.modal-center
                      variant="primary sm"
                    >
                     Edit
                    </b-button>
                    <b-button
                      @click="selectUser.id(user, 'delete')"
                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                      v-b-modal.modal-center
                      variant="danger sm"
                    >
                     Delete
                    </b-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </b-card>
    </b-col>
    <!-- Modal  -->
    <b-modal
      id="modal-center"
      centered
      :title="showForm ? 'Edit '+details.name : 'Delete '+details.name"
      hide-footer
    >
      <b-form v-if="showForm">
        <b-form-group
          label="Name"
          label-for="name"
        >
          <b-form-input
            v-model="details.name"
            name="name"
            placeholder="Name"
            type="text"
          />
        </b-form-group>

        <b-form-group
          label="Email"
          label-for="name"
        >
          <b-form-input
            v-model="details.email"
            name="email"
            placeholder="Email"
            type="email"
          />
        </b-form-group>
        <b-form-group
          label="Password"
          label-for="name"
        >
          <b-form-input
            v-model="details.password"
            name="password"
            placeholder="Change password"
            type="password"
          />
        </b-form-group>

        <b-form-group
          label="Role"
          label-for="role"
        >
          <v-select
            v-model="details.role"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="roleOptions"
            :clearable="false"
            input-id="roles"
          />
        </b-form-group>
        <b-form-group>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-3"
            variant="primary"
            block
            @click="saveChanges"
          >
            Save Changes
            <b-spinner
              v-show="loading"
              variant="light"
              small
            />
          </b-button>          
        </b-form-group>
      </b-form>

      <div v-else class="row align-items-center justify-content-center">
        <b-col
          md="12"
          lg="12"
          class="text-center"
        >
          <feather-icon
            icon="InfoIcon"
            size="150"
            class="text-center text-danger"
          />
          <p class="text-danger">Are you sure you want to delete this?</p>
          <div class="btn-group mt-4 mb-2">            
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              class="mt-3"
              variant="danger"
              block
              @click="deleteUser"
            >
              Proceed
              <b-spinner
                v-show="loading"
                variant="light"
                small
              />
            </b-button>              
          </div>
        </b-col>
      </div>
    </b-modal> 
    <!-- new user Modal  -->
    <b-modal
      id="newUser"
      centered
      :title="'Add New User'"
      hide-footer
    >
      <b-form>
        <b-form-group
          label="Name"
          label-for="name"
        >
          <b-form-input
            v-model="details.name"
            name="name"
            placeholder="Name"
            type="text"
          />
        </b-form-group>

        <b-form-group
          label="Email"
          label-for="name"
        >
          <b-form-input
            v-model="details.email"
            name="email"
            placeholder="Email"
            type="email"
          />
        </b-form-group>
        <b-form-group
          label="Password"
          label-for="password"
        >
          <b-form-input
            v-model="details.password"
            name="password"
            placeholder="Password"
            type="password"
          />
        </b-form-group>
        <b-form-group
          label="Confirm Password"
          label-for="password"
        >
          <b-form-input
            v-model="details.password_confirmation"
            name="password_confirmation"
            placeholder="Confirm Password"
            type="password"
          />
        </b-form-group>

        <b-form-group
          label="Role"
          label-for="role"
        >
          <v-select
            v-model="details.role"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="roleOptions"
            :clearable="false"
            input-id="roles"
          />
        </b-form-group>
        <b-form-group>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-3"
            variant="primary"
            block
            @click="createNewUser"
          >
            Submit
            <b-spinner
              v-show="loading"
              variant="light"
              small
            />
          </b-button>          
        </b-form-group>
      </b-form>
    </b-modal> 
  </section>
</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BTable, BLink, BForm, BFormGroup,
  BBadge, BPagination, BMedia, BAvatar, VBModal, BButton, BSpinner,
} from 'bootstrap-vue';
import Ripple from 'vue-ripple-directive'
import BCardCode from '@core/components/b-card-code'
import vSelect from 'vue-select'


export default {
  components: {
    BCardCode,
    BSpinner,
    BCard,
    BFormGroup,
    BForm,
    BButton,
    BRow,
    BCol,
    BFormInput,
    BTable,
    BLink,
    BBadge,
    BPagination,
    BMedia,
    BAvatar,
    vSelect,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      showForm: false,
      loading: false,
      users: [],
      searchQuery: '',
      total_lock: '0.00',
      monthly_lock: '0.00',
      monthly_payout: '0.00',
      total_payout: '0.00',
      roleOptions: [
        'user',
        'admin'
      ],
      details: {},
    };
  },
  computed: {
    usersFilter() {
      return this.users.filter((user) => user.role === this.searchQuery || user.name.toLowerCase().includes(this.searchQuery) || user.name.includes(this.searchQuery) || user.email === this.searchQuery);
    },
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.$http.get(`${this.$url}/profile/users/list`)
        .then((response) => {
          if (response.data.status) {
            let users = response.data.data;
            this.users = users.map(user => {
              return {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                created_at: user.created_at,
              }
            })
          }
        });
    },
    deleteUser() {
      this.$http.delete(`${this.$url}/profile/${this.user_id}`)
      .then(response => {
        if(response.data.status) {
          window.location.reload()
        }
      })
      .catch(err => console.log(err)) 
    },
    createNewUser() {
      this.loading = true
      this.$http.post(`${this.$url}/profile/create`, this.details)
      .then(response => {
        if(response.data.status) {
          window.location.reload()
        }
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.loading = false
      })
    },
    saveChanges() {
      this.loading = true
      this.$http.put(`${this.$url}/profile/${this.user_id}/update`, this.details)
      .then(response => {
        if(response.data.status) {
          window.location.reload()
        }
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.loading = false
      })
    },
    selectUser(userr, action) {
      // alert(user)
      let user = this.users.filter(x => x.id == userr)
      this.user_id = user[0].id
      this.details.name = user[0].name
      this.details.email = user[0].email
      this.details.role = user[0].role
      this.details = user[0]
      // this.user.id = user.id
      if (action === 'edit') {
        this.showForm = true
      }
      else {
        this.showForm = false
      }
    },
    hideModal() {
      this.$refs['fmodal'].hide()
    },
  },
};
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}

.invoice-filter-select {
  min-width: 190px;

  ::v-deep .vs__selected-options {
    flex-wrap: nowrap;
  }

  ::v-deep .vs__selected {
    width: 100px;
  }
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
