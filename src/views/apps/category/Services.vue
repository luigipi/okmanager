<template>
  <section>
    <b-row class="match-height">
      <div class="col-12">
        <div class="card">
          <div class="card-header border-bottom">
            <h4 class="card-title">
              Services ({{ services.length }})
            </h4>
          </div>
          <div class="card-datatable table-responsive">
            <table class="datatables-ajax table ">
              <thead>
                <tr>
                  <!-- <th>SN</th> -->
                  <th>Logo</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Code</th>
                  <th>Charge</th>
                  <th>Commission</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <!-- <th>SN</th> -->
                  <th>Logo</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Code</th>
                  <th>Type</th>
                  <th>Charge</th>
                  <th>Commission</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                <tr
                  v-for="(service, index) in services"
                  :key="index"
                >
                  <!-- <td>{{ index + 1 }}</td> -->
                  <td>
                    <b-avatar
                      size="42"
                      :src="service.logo"
                    />
                  </td>
                  <td>
                    {{ service.name }}
                  </td>
                  <td>{{ service.category.name }}</td>
                  <td>{{ service.type }}</td>
                  <td>{{ service.code }}</td>
                  <td>{{ service.charge_formatted }}</td>
                  <td>{{ service.commission_formatted }}</td>
                  <td>
                    <b-link
                      :to="{ name: 'apps-services-edit', params: { id: service.id } }"
                      class="font-weight-bold d-block text-nowrap"
                    >
                      Edit
                    </b-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </b-row>
  </section>
</template>

<script>
import {
  BRow, BLink, BAvatar,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BLink,
    BAvatar,
  },
  data() {
    return {
      data: {},
      services: [],
    }
  },
  mounted() {
    this.getServices()
  },
  methods: {
    getServices() {
      this.$http.get(`${this.$url}/services`)
        .then(response => {
          this.services = response.data.data
        })
    },
  },
}
</script>
