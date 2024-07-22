<template>
  <section>
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
                xl="2"
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
                        icon="DollarSignIcon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      {{ monthly }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      Withdrawal this month
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col>
              <b-col
                xl="2"
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
                        icon="DollarSignIcon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      {{ prev_month }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      Withdrawal last month
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col>

              <b-col
                xl="2"
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
                      {{ total_widthrawals }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      All-time Total Withdrawal
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col>

              <b-col
                xl="2"
                sm="6"
                class="mb-2 mb-xl-0"
              >
                <b-media no-body>
                  <b-media-aside
                    class="mr-2"
                  >
                    <b-avatar
                      size="48"
                      :variant="'light-secondary'"
                    >
                      <feather-icon
                        size="24"
                        icon="XIcon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      {{ cancelled_withdrawals }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      Cancelled Withdrawals
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col>

              <b-col
                xl="2"
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
                        icon="XIcon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      {{ failed_withdrawals }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      Failed Withdrawals
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>    
    <b-row class="match-height">
      <div class="col-md-12 col-lg-12">
        <div class="card">
          <div class="card-header border-bottom">
            <h4 class="card-title">
              EPIN Requests ({{ epins.length }})
            </h4>
            <form>
              <div class="form-group">
                <input
                  v-model="searchParam"
                  name="search"
                  placeholder="Search"
                  class="form-control"
                >
              </div>
            </form>
          </div>
            <form>
              <div class="mb-2 row mx-2">
                  <div class="col-md-4">
                    <label>Select Month</label>
                    <input type="date" class="form-control" v-model="details.month" />
                  </div>
                  <div class="col-md-4 mt-2">
                    <button type="button" class="btn-primary btn" @click="generateReport">
                      Download
                      <b-spinner
                        v-show="loading"
                        variant="light"
                        small
                      />                      
                    </button>
                  </div>
              </div>
            </form>          
          <div class="card-datatable">
            <table class="datatables-ajax table table-responsive-lg w-100 ">
              <thead>
                <tr>
                  <th>SN</th>
                  <!-- <th>Pin</th> -->
                  <th>Amount</th>
                  <th>Sender</th>
                  <th>Beneficiary</th>
                  <th>Agent</th>
                  <th>Status</th>
                  <th>Request Date</th>
                  <th>Payment Date</th>
                  <!-- <th>Actions</th> -->
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>SN</th>
                  <!-- <th>Pin</th> -->
                  <th>Amount</th>
                  <th>Sender</th>
                  <th>Beneficiary</th>
                  <th>Agent</th>
                  <th>Status</th>
                  <th>Request Date</th>
                  <th>Payment Date</th>
                  <!-- <th>Actions</th> -->
                </tr>
              </tfoot>
              <tbody>
                <tr
                  v-for="(epin, index) in pinList"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <!-- <td>
                    {{ epin.pin }}
                  </td> -->
                  <td>
                    ₦{{ epin.amount_formatted }}
                  </td>
                  <td>{{ epin.sender }}</td>
                  <td>{{ epin.beneficiary }}</td>
                  <td>{{ epin.merchant ? epin.merchant.name : '' }}</td>
                  <td
                    v-if="epin.status === 'success'"
                    class="text-success"
                  >
                    Paid
                  </td>
                  <td
                    v-else-if="epin.status === 'pending'"
                    class="text-warning"
                  >
                    Pending
                  </td>
                  <td
                    v-else-if="epin.status === 'cancelled'"
                    class="text-secondary"
                  >
                    Cancelled
                  </td>
                  <td
                    v-else
                    class="text-danger"
                  >
                    Failed
                  </td>
                  <td>{{ epin.created_at_formatted }}</td>
                  <td>{{ epin.updated_at_formatted }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </b-row> 
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li :class="link.active ? 'page-item active' : 'page-item'" v-for="link in meta.links" :key="link.id">
            <a class="page-link" href="javascript:;" @click="paginate(link.url)" v-html="link.label"></a>
          </li>
        </ul>
      </nav>      
    <div
      v-show="loading"
      class="overlay"
    >
      Please wait ....
    </div>
  </section>
</template>

<script>
import {
  BRow, BMedia, BAvatar, BCard, BCol, BCardBody, BMediaAside, BMediaBody,BCardText, BSpinner,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BMedia,
    BAvatar,
    BCard,
    BCol, BSpinner,
    BCardBody, BMediaAside, BMediaBody,BCardText,
  },
  data() {
    return {
      data: {},
      epins: [],
      meta: {},
      links: {},
      url: '',
      loading: false,
      searchParam: '',
      cancelled_withdrawals: 0,
      failed_withdrawals: 0,
      monthly: 0,
      prev_month: 0,
      total_widthrawals: 0,
      details: {}
    }
  },
  computed: {
    pinList() {
      return this.epins.filter(item => item.pin.includes(this.searchParam) || item.sender.includes(this.searchParam))
    },
  },
  mounted() {
    this.url = this.$url+'/epin-transactions'
    this.getPinRequests()
    this.getStats()
  },
  methods: {
    paginate(url) {
      this.url = url
      this.getPinRequests()
    },      
    getPinRequests() {
      this.$http.get(this.url)
        .then(response => {
          // console.log("R", response.data.data)
          this.epins = response.data.data.data
          this.links = response.data.data.links
          this.meta = response.data.data.meta
        })
    },
    getStats() {
      this.$http.get(`${this.$url}/epin-transactions/stats`)
        .then(response => {
          this.monthly = response.data.data.monthly
          this.prev_month = response.data.data.prev_month
          this.total_widthrawals = response.data.data.total
          this.failed_withdrawals = response.data.data.failed
          this.cancelled_withdrawals = response.data.data.cancelled
        })
    },
    generateReport() {
        if(this.details.month == '') {
          Swal.fire({
            icon: 'error',
            text: 'Select month'
          })
          return
        }
        this.loading = true
        this.$http.post(this.$url+'/reports/generate-epin', this.details, {responseType: 'arraybuffer' })
        .then(response => {
            this.loading = false
             var fileURL = window.URL.createObjectURL(new Blob([response.data]));
             var fileLink = document.createElement('a');
             fileLink.href = fileURL;
             fileLink.setAttribute('download', this.details.month+'_pin_transactions.xlsx');
            document.body.appendChild(fileLink);
            fileLink.click();
        })
        .finally(() => this.loading = false)
    },      
  },
}
</script>

<style lang="scss">
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.2);
    font-size: 20px;
    color: #fff;
  }
</style>
