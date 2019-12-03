import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import elementUi from 'element-ui'
import {
  Button,
  Select,
  Container,
  Header,
  Aside,
  Main,
  Row
} from 'element-ui'


Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Row)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

