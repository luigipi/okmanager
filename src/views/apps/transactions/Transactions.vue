<template>
  <!-- Table Container Card -->
  <b-card
    no-body
  >

    <b-row class="match-height">
      <div class="col-12">
        <div class="card">
          <div class="card-header border-bottom">
            <h4 class="card-title">
              Transactions
            </h4>
              <b-col
                cols="12"
                md="6"
              >
                <div class="d-flex align-items-center justify-content-end">
                  <b-form-input
                    v-model="searchQueryParam"
                    class="d-inline-block mr-0"
                    placeholder="Search by type, amount, reference, agent ID, Date"
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
            <form>
              <div class="mb-2 row mx-2">
                  <div class="col-md-4">
                    <label>Start Date</label>
                    <input type="date" class="form-control" v-model="details.start_date" />
                  </div>
                  <div class="col-md-4">
                    <label>End Date</label>
                    <input type="date" class="form-control"  v-model="details.end_date"/>
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
</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BTable, BLink,
  BBadge, BPagination, BSpinner, BButton,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Button from '@/views/components/button/Button.vue'
import Swal from 'sweetalert2';

export default {
  components: {
    BCard,
    BRow,
    BSpinner,
    BCol,
    BFormInput,
    BTable,
    BLink,
    BBadge,
    BPagination,
    BButton,

    vSelect,
    Button,
  },
  data() {
    return {
      transactions: [],
      searchQueryParam: '',
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
      details: {
        start_date:'',
        end_date: ''
      },
      loading: false,
    }
  },
  computed: {
    transactionFilter() {
      return this.transactions.filter(trans => trans.type === this.searchQuery.text || trans.beneficiary.toLowerCase().includes(this.searchQuery.text) || trans.beneficiary.includes(this.searchQuery.text) || trans.status === this.searchQuery.status)
    },
  },
  created() {
    this.url = this.$url+'/transactions'
    this.getTransactions()
  },
  methods: {
    paginate(url) {
      this.url = url
      this.getTransactions()
    },     
    getTransactions() {
      this.$http.get(this.url)
        .then(response => {
          // console.log('===>', response.data.data)
          if (response.data.status) {
            this.transactions = response.data.data.data
            this.links = response.data.data.links
            this.meta = response.data.data.meta
          }
        })
    },
    generateReport() {
        if(this.details.start_date == '' || this.details.end_date == '') {
          Swal.fire({
            icon: 'error',
            text: 'Select a start and end date'
          })
          return
        }
        this.loading = true
        this.$http.post(this.$url+'/reports/generate', this.details, {responseType: 'arraybuffer' })
        .then(response => {
            this.loading = false
             var fileURL = window.URL.createObjectURL(new Blob([response.data]));
             var fileLink = document.createElement('a');
             fileLink.href = fileURL;
             fileLink.setAttribute('download', 'transactions.xlsx');
            document.body.appendChild(fileLink);
            fileLink.click();
        })
        .finally(() => this.loading = false)
    },    
    searchList() {
    //  let param = this.searchQuery === 'credit' || this.searchQuery === 'unverified' ? 'by_status' : 'email'
      this.url = `${this.$url}/transactions?filter=${this.searchQueryParam}`;
      this.getTransactions()
    },     
  },
}
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
