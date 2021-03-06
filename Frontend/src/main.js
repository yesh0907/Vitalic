// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// element
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'

// router
import VueRouter from 'vue-router'

// store
import store from './store'

// views
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Detail from './views/Detail.vue'
import Home from './views/Home.vue'
import Live from './views/Live.vue'
import Desktop from './views/Desktop.vue'
import About from './views/About.vue'

// plugins
import Load from './plugins/Load/Load'

Vue.use(Element, {locale})
Vue.use(VueRouter)
Vue.use(Load)

const router = new VueRouter({
  routes: [
    { path: '/Login', component: Login },
    { path: '/Dashboard', component: Dashboard },
    { path: '/Detail', component: Detail },
    { path: '/', component: Home },
    { path: '/Live', component: Live },
    { path: '/Desktop', component: Desktop },
    { path: '/About', component: About }
  ]
})

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  Vue.load.start({}, next.bind(this))
  // next()
})

router.afterEach(function (to, from) {
  Vue.load.finish({})
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
