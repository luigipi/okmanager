<template>
  <section>
    <b-row class="match-height">
      <div class="col-12">
        <div class="card">
          <div class="card-header border-bottom">
            <h4 class="card-title">
              Task Templates ({{ totalCount }})
            </h4>
          </div>
          <div class="card-datatable table-responsive">
            <table class="datatables-ajax table ">
              <thead>
                <tr>
                  <th>SN</th>
                  <!-- <th>Logo</th> -->
                  <th>Title</th>
                  <th>Description</th>
                  <th>Platform</th>
                  <th>Amount</th>
                  <th>Action</th>
                  <th>Task Count</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>SN</th>
                  <!-- <th>Logo</th> -->
                  <th>Title</th>
                  <th>Description</th>
                  <th>Platform</th>
                  <th>Amount</th>
                  <th>Action</th>
                  <th>Task Count</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                <tr
                  v-for="(category, index) in categories"
                  :key="index"
                >
                  <td>{{ index + 1 }}.</td>
                  <!-- <td>
                    <b-avatar
                      size="42"
                      :src="category.logo"
                    />
                  </td> -->
                  <td>
                    {{ category.title }}
                  </td>
                  <td>{{ category.description }}</td>
                  <td>{{ category.social_media }}</td>
                  <td>{{ category.amount }}</td>
                  <td>{{ category.action }}</td>
                  <td>{{ category.relationships.newTaskCount }}</td>
                  <td>
                    <b-link
                      :to="{ name: 'apps-category-edit', params: { id: category.id } }"
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
      categories: [],
      totalCount: 0,
    }
  },
  mounted() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      this.$http.get(`${this.$url}/tasks/templates`)
        .then(response => {
          if(response.data.data) {
            console.log(response.data.data)
            this.categories = response.data.data
            this.totalCount = response.data.meta.total
          }
        })
    },
  },
}
</script>
