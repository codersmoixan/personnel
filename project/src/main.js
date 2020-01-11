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
  Upload,
  Col,
  submenu,
  menu,
  menuItemGroup,
  menuItem,
  table,
  tableColumn,
  Message,
  MessageBox,
  Card,
  Tabs,
  TabPane,
  DatePicker,
  TimePicker,
  Switch,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Pagination,
  Tooltip,
  Alert,
  Loading,
  Scrollbar,
  Dialog
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
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Switch)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(RadioGroup)
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(Alert)
Vue.use(Loading)
Vue.use(Scrollbar)
Vue.use(Dialog)



Vue.use(Card)

// Vue.component(Button.name, Button)
Vue.component(Col.name, Col)
Vue.component(submenu.name, submenu)
Vue.component(menu.name, menu)
Vue.component(menuItemGroup.name, menuItemGroup)
Vue.component(menuItem.name, menuItem)
Vue.component(tableColumn.name, tableColumn)
Vue.component(table.name, table)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox
Vue.prototype.$ELEMENT = { size: 'small' };

// 引入 Echarts（暂时还没用上
/* import echarts from 'echarts'
Vue.prototype.$echarts = echarts */

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

