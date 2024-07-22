<template>
  <div>
    <ul v-if="user.role == 'admin'">
      <component
        :is="resolveNavItemComponent(item)"
        v-for="item in items"
        :key="item.header || item.title"
        :item="item"
      />
    </ul>
    <ul v-else>
      <component
        :is="resolveNavItemComponent(item)"
        v-for="item in items"
        :key="item.header || item.title"
        :item="item"
        v-show="item.title == 'User Managment' || 
          item.title == 'Dashboards' || item.user "
      />
    </ul>
  </div>
</template>

<script>
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from '@core/layouts/utils'
import { provide, ref } from '@vue/composition-api'
import VerticalNavMenuHeader from '../vertical-nav-menu-header'
import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'
import VerticalNavMenuGroup from '../vertical-nav-menu-group/VerticalNavMenuGroup.vue'

export default {
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuLink,
    VerticalNavMenuGroup,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      user: {}
    }
  },  
  setup() {
    provide('openGroups', ref([]))

    return {
      resolveNavItemComponent,
    }
  },
  created() {
    let data = localStorage.getItem('userData')
    let user = JSON.parse(data)
    this.user = user
    // if(user.role && user.role.toLowerCase() != 'admin') {
    //   // alert(user.role)
    //   // this.$router.push('apps/users/list')
    //   // this.$router.push('apps/users/list')
    //   // localStorage.removeItem('accessToken')
    //   // localStorage.removeItem('refreshToken')
    //   // localStorage.removeItem('userData')
    //   // window.location.reload()
    // }    
  }  
}
</script>
