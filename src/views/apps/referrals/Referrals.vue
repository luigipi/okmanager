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
                        icon="UsersIcon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      {{ total }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      Total Referrals
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
                      {{ monthly }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      Payout this month
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
                      {{ payout }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      Total Payout
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
                      :variant="'light-warning'"
                    >
                      <feather-icon
                        size="24"
                        icon="UsersIcon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      {{ pending }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      Pending
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
              Referrals ({{ referrals.length }})
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
          <div class="card-datatable">
            <table class="datatables-ajax table table-responsive-lg w-100 ">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Refered By</th>
                  <th>Name</th>
                  <th>Code</th>
                  <th>Bonus</th>
                  <th>Status</th>
                  <th>Date</th>
                  <!-- <th>Actions</th> -->
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>SN</th>
                  <th>Refered By</th>
                  <th>Name</th>
                  <th>Code</th>
                  <th>Bonus</th>
                  <th>Status</th>
                  <th>Date</th>
                  <!-- <th>Actions</th> -->
                </tr>
              </tfoot>
              <tbody>
                <tr
                  v-for="(referral, index) in referralList"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <td>
                    {{ referral.refered_by }}
                  </td>
                  <td>
                    {{ referral.name }}
                  </td>
                  <td>{{ referral.referer_code }}</td>
                  <td>₦{{ referral.earned_formatted }}</td>
                  <td
                    v-if="referral.status"
                    class="text-success"
                  >
                    Paid
                  </td>
                  <td
                    v-else
                    class="text-warning"
                  >
                    Pending
                  </td>
                  <td>{{ referral.created_at }}</td>
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
  BRow, BAvatar, BCol, BCard, BMedia, BCardBody, BMediaAside, BMediaBody, BCardText,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BAvatar,
    BCard,
    BMedia,
    BCardBody,
    BMediaAside, 
    BMediaBody,
    BCardText,
    // BLink,
  },
  data() {
    return {
      data: {},
      referrals: [],
      meta: {},
      links: {},
      url: '',
      loading: false,
      searchParam: '',
      payout: '0.00',
      pending: 0,
      total: 0,
      monthly: 0,
    }
  },
  computed: {
    referralList() {
      return this.referrals.filter(referer => referer.referer_code.includes(this.searchParam))
    },
  },
  mounted() {
    this.url = this.$url+'/referrals'
    this.getReferrals()
    this.getStats()
  },
  methods: {
    paginate(url) {
      this.url = url
      this.getReferrals()
    },     
    getReferrals() {
      this.$http.get(this.url)
        .then(response => {
          this.referrals = response.data.data.data
          this.meta = response.data.data.meta
          this.links = response.data.data.links
        })
    },
    getStats() {
      this.$http.get(`${this.$url}/referrals/stats`)
        .then(response => {
          this.payout = response.data.data.payout
          this.pending = response.data.data.pending
          this.total = response.data.data.total
          this.monthly = response.data.data.monthly
        })
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
