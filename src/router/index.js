import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('../views/UserLogin/index.vue') },
  { path: '/HomePage', component: () => import('../views/HomePage/index.vue') },
  { path: '/MyClassroom', component: () => import('../views/MyClassroom/index.vue') },
  { path: '/ClassroomTeaching', component: () => import('../views/ClassroomTeaching/index.vue') },
  { path: '/TeachingCalendar', component: () => import('../views/ClassroomTeaching/TeachingCalendar.vue') },
  { path: '/MyTextbook', component: () => import('../views/MyTextbook/index.vue') },
  { path: '/MyHomework', component: () => import('../views/MyHomework/index.vue') },
  { path: '/MyExam', component: () => import('../views/MyExam/index.vue') },
  { path: '/UserInfo', component: () => import('../views/UserInfo/index.vue') },
  { path: '/ChangePassword', component: () => import('../views/PersonalCenter/ChangePassword.vue') },
  { path: '/ChangeInfo', component: () => import('../views/PersonalCenter/ChangeInfo.vue') },
  { path: '/UserLogin', component: () => import('../views/UserLogin/index.vue') },
  { path: '/UserRegister', component: () => import('../views/UserRegister/index.vue') }
]

const router = new VueRouter({
  mode: 'history', // 使用 HTML5 history 模式（可选）
  routes
})

export default router
