import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Button, Col, submenu, menu, menuItemGroup, menuItem } from 'element-ui'
Vue.component(Button.name, Button)
Vue.component(Col.name, Col)
Vue.component(submenu.name, submenu)
Vue.component(menu.name, menu)
Vue.component(menuItemGroup.name, menuItemGroup)
Vue.component(menuItem.name, menuItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

