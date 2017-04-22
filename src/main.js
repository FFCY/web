// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import index from './components/index/index'
import aboutUs from './components/aboutUs/aboutUs'
import company from './components/company/company'
import download from './components/download/download'
import student from './components/student/student'
import teacher from './components/teacher/teacher'

Vue.use(VueRouter)

/* eslint-disable no-new */
const routes = [
  { path: '/index', component: index },
  { path: '/aboutUs', component: aboutUs },
  { path: '/company', component: company },
  { path: '/download', component: download },
  { path: '/student', component: student },
  { path: '/teacher', component: teacher }
]
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
router.push('/index')

