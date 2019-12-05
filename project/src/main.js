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
  Row,
  Col,
  submenu,
  menu,
  menuItemGroup,
  menuItem,
  table,
  tableColumn,
  Message,
  MessageBox,
  Card
} from 'element-ui'

Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Row)
Vue.use(Card)

Vue.component(Button.name, Button)
Vue.component(Col.name, Col)
Vue.component(submenu.name, submenu)
Vue.component(menu.name, menu)
Vue.component(menuItemGroup.name, menuItemGroup)
Vue.component(menuItem.name, menuItem)
Vue.component(tableColumn.name, tableColumn)
Vue.component(table.name, table)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox

// 引入 Echarts（暂时还没用上
/* import echarts from 'echarts'
Vue.prototype.$echarts = echarts */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

