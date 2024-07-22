<template>
  <section id="home-dashboard">
    <b-row class="match-height">
      <b-col
        xl="12"
        md="12"
      >
        <b-card
          class="card-statistics"
        >
          <b-card-header>
            <b-card-title>Safelock</b-card-title>
          </b-card-header>
          <b-card-body class="statistics-body">
            <b-row>
              <b-col
                xl="3"
                sm="6"
                class="mb-2 mb-xl-0"
              >
                <b-media no-body>
                  <b-media-aside
                    class="mr-2"
                  >
                    <b-avatar
                      size="48"
                      :variant="'light-primary'"
                    >
                      <feather-icon
                        size="24"
                        icon="TrendingUpIcon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      {{ monthly_lock }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      This month
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col>

              <b-col
                xl="3"
                sm="6"
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
                        icon="DollarSignIcon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      {{ total_lock }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      Total
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col>

              <b-col
                xl="3"
                sm="6"
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
                        icon="TrendingDownIcon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      {{ monthly_payout }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      Payout
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col>

              <b-col
                xl="3"
                sm="6"
                class="mb-2 mb-xl-0"
              >
                <b-media no-body>
                  <b-media-aside
                    class="mr-2"
                  >
                    <b-avatar
                      size="48"
                      :variant="'light-info'"
                    >
                      <feather-icon
                        size="24"
                        icon="DollarSignIcon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      {{ total_payout }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      Total Payout
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <!-- Table Container Card -->
    <b-card
      no-body
    >
    <b-row class="match-height">
      <div class="col-12">
        <div class="card">
          <div class="card-header border-bottom">
            <h4 class="card-title">
              Safelock Transactions
            </h4>
          </div>
          <div class="card-datatable">
            <table class="datatables-ajax table">
              <thead>
                <tr>
                  <th>Agent ID</th>
                  <th>Beneficiary</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Sub Type</th>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Agent ID</th>
                  <th>Beneficiary</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Sub Type</th>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
              </tfoot>
              <tbody>
                <tr
                  v-for="(transaction, index) in transactions"
                  :key="index"
                >
                  <td>{{ transaction.agent_id }}</td>
                  <td>{{ transaction.beneficiary }}</td>
                  <td>₦{{ transaction.amount_formatted }}</td>
                  <td :class="transaction.type === 'debit' ? 'text-danger' : 'text-success'">
                    {{ transaction.type }}
                  </td>
                  <td>{{ transaction.sub_type }}</td>
                  <td>{{ transaction.description }}</td>
                  <td>{{ transaction.created_at_formatted }}</td>
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
    </b-card>
  </section>
</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BTable, BLink,
  BBadge, BPagination, BMedia, BAvatar, BMediaAside, BMediaBody, BCardText, BCardHeader, BCardTitle, BCardBody,
} from 'bootstrap-vue';
import vSelect from 'vue-select';

export default {
  components: {
    BCardHeader,
    BCardTitle,
    BCardBody,
    BMediaAside,
    BMediaBody,
    BCard,
    BRow,
    BCardText,
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
  data() {
    return {
      transactions: [],
      searchQuery: {
        text: '',
        status: '',
      },
      meta: {},
      links: {},
      url: '',
      statusOptions: [
        'success',
        'pending',
        'failed',
      ],
      total_lock: '0.00',
      monthly_lock: '0.00',
      monthly_payout: '0.00',
      total_payout: '0.00',
      transactions: []
    };
  },
  computed: {
    transactionFilter() {
      return this.transactions.filter((trans) => trans.type === this.searchQuery.text || trans.beneficiary.toLowerCase().includes(this.searchQuery.text) || trans.beneficiary.includes(this.searchQuery.text) || trans.status === this.searchQuery.status);
    },
  },
  created() {
    this.url = this.$url+'/transactions/filter?type=safelock'
    this.getTransactions()
    this.getSafelocStats()
  },
  methods: {
    paginate(url) {
      this.url = url
      this.getTransactions()
    },      
    getTransactions() {
      this.$http.get(this.url)
        .then((response) => {
          if (response.data.status) {
            // console.log(response)
             this.transactions = response.data.data.data;
              this.meta = response.data.data.meta;
              this.links = response.data.data.links;
            // this.transactions = trans.map((transaction) => ({
            //   agent_id: transaction.agent_id,
            //   beneficiary: transaction.beneficiary,
            //   amount: transaction.amount_formatted,
            //   type: transaction.type,
            //   sub_type: transaction.sub_type,
            //   description: transaction.description,
            //   date: transaction.created_at_formatted,
            // }));
          }
        });
    },
    getSafelocStats() {
      this.$http.get(`${this.$url}/transactions/safelock`)
        .then((response) => {
          if (response.data.status) {
            const { data } = response.data;
            // console.log('data', data);
            this.monthly_lock = data.monthly;
            this.total_lock = data.total;
            this.monthly_payout = data.monthly_payout;
            this.total_payout = data.total_payout;
          }
        });
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
