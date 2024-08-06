<template>
  <div>
    <section id="home-dashboard">
      <b-row class="match-height" v-show="user.role == 'admin'">
        <b-col
          xl="4"
          md="6"
        >
          <ecommerce-medal :data="details"/>
        </b-col>
        <b-col
          xl="8"
          md="6"
        >
          <ecommerce-statistics :data="statisticsItems" /> 
        </b-col>
      </b-row>
 
      <b-row class="match-height">
        <div class="col-12">
        <div class="card">
          <div class="card-header border-bottom d-flex">
            <h4 class="card-title">
              Transactions
            </h4>
              <b-col
                cols="12"
                md="6"
              >
                <div class="d-flex align-items-center justify-content-end">
                  <b-form-input
                    v-model="searchQuery"
                    class="d-inline-block mr-0"
                    placeholder="Search by type, amount, reference, Date"
                  />
                  <b-button
                    variant="primary"
                    class="mr-1"
                    @click="searchList"
                  >
                    <span class="text-nowrap">Search</span>
                  </b-button>

                </div>
              </b-col>
          </div>
      
            <div class="card-datatable table-responsive">
              <table class="datatables-ajax table">
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Customer Name</th>
                    <!-- <th>Reference</th> -->
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
                    <th>Customer Name</th>
                    <!-- <th>Reference</th> -->
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
                    <td>{{ transaction.customer }}</td>
                    <!-- <td>{{ transaction.reference }}</td> -->
                    <td>₦{{ transaction.amount_formatted }}</td>
                    <td :class="transaction.type.toLowerCase() === 'credit' ? 'text-success' : 'text-danger'">
                      {{ transaction.type }}
                    </td>
                    <td>{{ transaction.remark }}</td>
                    <td>{{ transaction.created_at_formatted }}</td>
                    <td :class="transaction.status === 'failed' ? 'text-danger capitalize' : transaction.status === 'pending' ? 'text-warning capitalize' : 'text-success capitalize'">
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
      </b-row>
    </section>
    
    <b-modal
      id="event-edit-modal"
      content-class="shadow"
      :title="`Revenue Details `"
      centered
      size="lg"
      no-close-on-backdrop
      hide-footer
    >
      <div class="row justify-content-center">
        <table class="table">
          <thead>
            <tr>
              <!-- <th></th> -->
              <th>Service</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(revenue, index) in revenueData" :key="index" v-show="revenue.revenue > 0">
              <td>
                <feather-icon
                  size="24"
                  icon="CheckCircleIcon"
                  class="text-success"
                />                
                {{revenue.name}}
              </td>
              <td>{{revenue.total_earning}}</td>
            </tr>
            <tr v-for="(revenue, index) in otherServices" :key="index" v-show="revenue.revenue > 0">
              <td>
                <feather-icon
                  size="24"
                  icon="CheckCircleIcon"
                  class="text-success"
                />                
                {{revenue.name}}
              </td>
              <td>{{revenue.total_earning}}</td>
            </tr>
            <tr v-show="revenueData.length">
              <td></td>
              <td><strong>Total: {{settings.revenue}}</strong> </td>
            </tr>
            <tr v-show="!revenueData.length">
              <td colspan="2" class="text-center">No data available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-modal>      
  </div>
</template>

<script>
import { BRow, BCol, BButton, BFormInput, BForm, BSpinner, BFormRadio, BImg, BFormFile, BFormGroup, BFormDatepicker, BFormRadioGroup, BIcon } from 'bootstrap-vue'

import EcommerceMedal from './EcommerceMedal.vue'
import EcommerceStatistics from './EcommerceStatistics.vue'

export default {
  components: {
    BIcon,
    BRow,
    BCol,
    BButton,
    BFormInput,
    BForm,
    BFormGroup,
    BFormDatepicker, 
    BFormRadioGroup,
    BSpinner,
    BFormFile,
    BFormRadio,
    BImg,
    EcommerceMedal,
    EcommerceStatistics,
  },
  data() { 
    return {
      user: {},
      searchQuery: '',
      loading: false,
      data: {},
      links: {},
      pageMeta: {},
      url: '',
      revenueData: [],
      otherServices: [],
      transactions: [],
      settings: {},
      statisticsItems: [
        {
          icon: 'TrendingUpIcon',
          color: 'light-primary',
          title: '0',
          subtitle: 'Transactions',
          customClass: 'mb-2 mb-xl-0',
        },
        {
          icon: 'UserIcon',
          color: 'light-info',
          title: '0',
          subtitle: 'Customers',
          customClass: 'mb-2 mb-xl-0',
        },
        {
          icon: 'BoxIcon',
          color: 'light-danger',
          title: '0',
          subtitle: 'Earners',
          customClass: 'mb-2 mb-sm-0',
        },
        {
          icon: 'DollarSignIcon',
          color: 'light-primary',
          title: '₦0.00',
          subtitle: 'Revenue',
          customClass: '',
        },
        {
          icon: 'DollarSignIcon',
          color: 'light-success',
          title: '₦0.00',
          subtitle: 'Inflow',
          customClass: '',
        },
        {
          icon: 'DollarSignIcon',
          color: 'light-danger',
          title: '₦0.00',
          subtitle: 'Outflow',
          customClass: '',
        },
      ],
      details: {
        name: '',
        saleToday: '0.00',
        today: '0.00'
      },
    }
  },
  created() {
    this.url = this.$url+'/transactions'
    this.getTransactions()
    this.getSettings()
    // this.getRevenue() 
    let data = localStorage.getItem('userData')
    let user = JSON.parse(data)
    this.user = user
    if(user.role && user.role.toLowerCase() != 'admin') {
      this.$router.push('/apps/email')
      // this.$router.push('apps/users/list')
      // localStorage.removeItem('accessToken')
      // localStorage.removeItem('refreshToken')
      // localStorage.removeItem('userData')
      // window.location.reload()
    }
  },
  methods: {
    showModal() {
      this.$refs.revenueModal.show()
    },
    paginate(url) {
      this.url = url
      this.getTransactions()
    },    
    getTransactions() {
      this.$http.get(this.url)
        .then(response => {
          // console.log("TRANS", response)
          this.transactions = response.data.data.data
          this.links = response.data.data.links
          this.pageMeta = response.data.data.meta
          this.statisticsItems.filter(item => item.subtitle === 'Transactions')[0].title = this.pageMeta.total
        })
    }, 
    searchList() {
    //  let param = this.searchQuery === 'credit' || this.searchQuery === 'unverified' ? 'by_status' : 'email'
      this.url = `${this.$url}/transactions?filter=${this.searchQuery}`;
      this.getTransactions()
    },    
    getSettings() {
      this.$http.get(`${this.$url}/settings`)
        .then(response => {
          if(response.data) {            
            this.settings = response.data.data
            this.statisticsItems[0].title = this.settings.transactions
            this.statisticsItems[1].title = this.settings.customer_count
            this.statisticsItems[2].title = this.settings.earners
            this.statisticsItems[3].title = this.settings.revenue
            this.statisticsItems[4].title = this.settings.inflow
            this.statisticsItems[5].title = this.settings.outflow
            this.details.saleToday = this.settings.overall
            this.details.today = this.settings.today
          }
        })
    },
    getRevenue() {
      this.$http.get(`${this.$url}/revenue`)
        .then(response => {
          // console.log('REVENUE', response)
          if(response.data) {            
            this.revenueData = response.data.data.product_earnings
            this.otherServices = response.data.data.other_services
          }
        })
    },
  }, 
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
.capitalize {
  text-transform: capitalize;
}
</style>
