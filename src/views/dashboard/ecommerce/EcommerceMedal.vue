<template>
  <b-card
    v-if="data"
    class="card-congratulation-medal"
  >
    <h5>Congratulations 🎉 {{ data.name }}!</h5>
    <b-card-text class="font-small-3">
      Total volume of transaction
    </b-card-text>
    <h3 class="mb-75 mt-2 pt-50">
      <b-link>₦{{ kFormatter(data.saleToday) }}</b-link>
    </h3>
    <!-- <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="secondary"
    > -->
      <h4><b-link>Today: ₦{{ kFormatter(data.today) }}</b-link></h4>
    <!-- </b-button> -->
    <b-img
      :src="require('@/assets/images/illustration/badge.svg')"
      class="congratulation-medal"
      alt="Medal Pic"
    />
  </b-card>
</template>

<script>
import {
  BCard, BCardText, BLink, BImg,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    BCard,
    BCardText,
    BLink,
    BImg,
  },
  directives: {
    Ripple,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    kFormatter,
  },
}
</script>
