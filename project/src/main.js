import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import elementUi from 'element-ui'
import {
  Button,
  Select,
  Container,
  Header,
  Aside,
  Main,
  Row,
  Input,
  TableColumn,
  Table,
  Option,
  Radio,
  InputNumber,
  Form,
  FormItem,
  Upload
} from 'element-ui'


Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Row)
Vue.use(Input)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Option)
Vue.use(Radio)
Vue.use(InputNumber)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Upload)



Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

// console.log('zhanghuan')
