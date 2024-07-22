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
                      {{ monthly }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      This month
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
                      {{ total }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      Total
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-card class="mt-3 mb-3">
      <b-card-header>
        <b-card-title>
          <h3>EPIN Services</h3>
        </b-card-title>
      </b-card-header>
      <b-card-body>
        <div class="card-datatable">
          <table class="datatables-ajax table table-responsive-lg w-100 ">
            <thead>
              <tr>
                <th>Name</th>
                <th>OkPay Charge</th>
                <th>This Month</th>
                <th>Total Earning</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>OkPay Charge</th>
                <th>This Month</th>
                <th>Total Earning</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>
                  PIN Transfer Service
                </td>
                <td>
                  ₦{{ epinData.charge }}
                </td>
                <td>₦{{ epinData.monthly }}</td>
                <td>₦{{ epinData.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-card-body>
    </b-card>
    <b-card class="mt-3 mb-3">
      <b-card-header>
        <b-card-title>
          <h3>By Category</h3>
        </b-card-title>
      </b-card-header>
      <b-card-body>
        <div class="card-datatable">
          <table class="datatables-ajax table table-responsive-lg w-100 ">
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>OkPay Commission</th>
                <th>Monthly Earning</th>
                <th>Total Earning</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>OkPay Commission</th>
                <th>Monthly Earning</th>
                <th>Total Earning</th>
              </tr>
            </tfoot>
            <tbody>
              <tr
                v-for="(category, index) in categories"
                :key="index"
              >
                <td>{{ index + 1 }}</td>
                <td>
                  {{ category.name }}
                </td>
                <td>
                  ₦{{ category.app_commission_formatted }}
                </td>
                <td>₦{{ category.monthly_earning }}</td>
                <td>₦{{ category.total_earning }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-card-body>
    </b-card>
    <b-card class="mt-3 mb-3">
      <b-card-header>
        <b-card-title>
          <h3>By Service</h3>
        </b-card-title>
      </b-card-header>
      <b-card-body>
        <div class="card-datatable">
          <table class="datatables-ajax table table-responsive-lg w-100 ">
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>OkPay Commission</th>
                <th>Monthly Earning</th>
                <th>Total Earning</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>OkPay Commission</th>
                <th>Monthly Earning</th>
                <th>Total Earning</th>
              </tr>
            </tfoot>
            <tbody>
              <tr
                v-for="(service, index) in services"
                :key="index"
              >
                <td>{{ index + 1 }}</td>
                <td>
                  {{ service.name }}
                </td>
                <td>
                  ₦{{ service.app_commission_formatted }}
                </td>
                <td>₦{{ service.monthly_earning }}</td>
                <td>₦{{ service.total_earning }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-card-body>
    </b-card> 
  </section>
</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BTable, BLink,
  BBadge, BPagination, BMedia, BAvatar, BCardBody, BCardHeader, BMediaAside, BCardText, BMediaBody,
} from 'bootstrap-vue';
import vSelect from 'vue-select';

export default {
  components: {
    BMediaBody,
    BCardBody,
    BCardHeader,
    BMediaAside,
    BCardText,
    BCard,
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
  data() {
    return {
      categories: [],
      services: [],
      searchQuery: {
        text: '',
        status: '',
      },
      epinData: {
        total: '0.00',
        monthly: '0.00',
        charge: '10',
      },
      monthly: '0.00',
      total: '0.00',
      meta: {},
      links: {},
      statusOptions: [
        'success',
        'pending',
        'failed',
      ],
    };
  },
  created() {
    this.getRevenue();
    this.getServiceRevenue();
    this.getCategoryRevenue()
  },
  methods: {
    getRevenue() {
      this.$http.get(`${this.$url}/revenue`)
      .then((response) => {
          if (response.data.status) {
            this.monthly = response.data.data.monthly
            this.total = response.data.data.total
            this.epinData.total = response.data.data.epin_total
            this.epinData.monthly = response.data.data.epin_monthly
          }
        });
    },
    getServiceRevenue() {
      this.$http.get(`${this.$url}/services`)
        .then((response) => {
          if (response.data.status) {
            this.services = response.data.data
          }
        });
    },
    getCategoryRevenue() {
      this.$http.get(`${this.$url}/services/category/all`)
        .then((response) => {
          if (response.data.status) {
            this.categories = response.data.data
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
