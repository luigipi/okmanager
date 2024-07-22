<template>
  <div>
    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="user === undefined"
    >
      <h4 class="alert-heading">
        Error fetching user data
      </h4>
      <div class="alert-body">
        No user found with this user id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-users-list'}"
        >
          User List
        </b-link>
        for other users.
      </div>
    </b-alert>

    <template v-if="user">
      <b-row>
        <b-col
          cols="12"
          xl="9"
          lg="8"
          md="7"
        >
          <user-view-user-info-card :user-data="user" />
        </b-col>
        <b-col
          cols="12"
          md="5"
          xl="3"
          lg="4"
        >
          <user-view-user-plan-card :user-data="user" />
        </b-col>
      </b-row>

      <b-row>
        <!-- <b-col
          cols="12"
          lg="6"
        >
          <user-view-user-timeline-card
            v-if="user.accounts.length"
            :user-data="user"
          />
        </b-col>  -->
        <b-col
          cols="12"
          lg="12"
        >
          <user-view-user-permissions-card
            v-if="user.kyc.length || user.avatar != ' '"
            :user-data="user"
          />
        </b-col>
      </b-row>


      <div class="col-12">
        <div class="card">
          <div class="card-header border-bottom">
            <h4 class="card-title">
              Recent transactions
            </h4>
          </div>
          <div class="card-datatable table-responsive">
            <table class="datatables-ajax table">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Sub Type</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Desc</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>SN</th>
                  <th>Sub Type</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Desc</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </tfoot>
              <tbody>
                <tr
                  v-for="(transaction, index) in transactions"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <!-- <td>{{ transaction.beneficiary }}</td> -->
                  <td>{{ transaction.sub_type }}</td>
                  <td>₦{{ transaction.amount_formatted }}</td>
                  <td :class="transaction.type.toLowerCase() === 'debit' ? 'text-danger' : 'text-success'">
                    {{ transaction.type }}
                  </td>
                  <td>{{ transaction.remark }}</td>
                  <td>{{ transaction.created_at_formatted }}</td>
                  <td :class="transaction.status === 'failed' ? 'text-danger' : transaction.status === 'pending' ? 'text-warning' : 'text-success'">
                    {{ transaction.status }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li :class="link.active ? 'page-item active' : 'page-item'" v-for="link in pageMeta.links" :key="link.id">
              <a class="page-link" href="javascript:;" @click="paginate(link.url)" v-html="link.label"></a>
            </li>
          </ul>
        </nav>             
      </div>
    </template>
  </div>
</template>

<script>
import router from '@/router'
import {
  BRow, BCol, BAlert, BLink,
} from 'bootstrap-vue'
import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'
import UserViewUserInfoCard from './UserViewUserInfoCard.vue'
import UserViewUserPlanCard from './UserViewUserPlanCard.vue'
import UserViewUserTimelineCard from './UserViewUserTimelineCard.vue'
import UserViewUserPermissionsCard from './UserViewUserPermissionsCard.vue'

export default {
  components: {
    BRow,
    BCol,
    BAlert,
    BLink,

    // Local Components
    UserViewUserInfoCard,
    UserViewUserPlanCard,
    UserViewUserTimelineCard,
    UserViewUserPermissionsCard,

    InvoiceList,
  },
  data() {
    return {
      user: {},
      transactions: [],
      trans: [],
      url: '',
      links:{},
      pageMeta: {},
    }
  },
  methods: {
    getTransactions() {
      // this.$http.get(`${this.$url}/transactions`)
      this.$http.get(this.url)
        .then(response => {
          if(response.data.status === true) {
            this.transactions = response.data.data.data
            this.links = response.data.data.links
            this.pageMeta = response.data.data.meta
          }
        })
    },
    paginate(url) {
      this.url = url
      this.getTransactions()
    },        
  },
  created() {
    this.$http.get(`${this.$url}/customers/${router.currentRoute.params.id}`)
      .then(response => {
        // console.log("U", response.data)
        this.user = response.data.data
        this.url = this.$url+`/transactions/customer/${this.user.id}`
        this.getTransactions()        
        // this.trans = this.user.transactions
        // console.log(this.user)
      })
  },
}
</script>

<style>

</style>
