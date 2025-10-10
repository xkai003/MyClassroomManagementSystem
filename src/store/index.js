// 这里面存放的就是 vuex 相关的核心代码
// 1、导包
import Vue from 'vue'
import Vuex from 'vuex'

// 插件安装
Vue.use(Vuex)

// 创建仓库
const store = new Vuex.Store({
  strict: true,
  state: {
    title: '李华',
    count: 100,
    color: '黄色',
    // 保存到本地
    myclass: JSON.parse(localStorage.getItem('myclass')) || [
      {
        id: 1,
        date: '2025-05-20',
        course: '创新创业基础',
        location: '清华楼A栋-407',
        url: 'https://www.baidu.com/'
      },
      {
        id: 2,
        date: '2025-05-21',
        course: 'PHP网站开发技术',
        location: '清华楼A栋-507',
        url: 'https://www.baidu.com/'
      },
      {
        id: 3,
        date: '2025-05-22',
        course: '英语AB级辅导',
        location: '清华楼A栋-302',
        url: 'https://www.baidu.com/'
      },
      {
        id: 4,
        date: '2025-05-23',
        course: 'JavaWab应用开发',
        location: '清华楼A栋-408',
        url: 'https://www.baidu.com/'
      },
      {
        id: 5,
        date: '2025-05-24',
        course: 'Python编程基础',
        location: '清华楼A栋-508',
        url: 'https://www.google.com/?hl=zh_CN'
      },
      {
        id: 6,
        date: '2025-05-25',
        course: '网络安全设备配置',
        location: '清华楼A栋-505',
        url: 'https://www.baidu.com/'
      },
      {
        id: 7,
        date: '2025-05-26',
        course: 'Web前端框架技术',
        location: '清华楼A栋-404',
        url: 'https://www.baidu.com/'
      }
    ]
  },
  mutations: {
    addCount (state, obj) {
      state.count += obj.count
    },
    SubCount (state, n) {
      state.count -= n
    },
    changeTitle (state, newTitle) {
      state.title = newTitle
    },
    changeCount (state, newCount) {
      state.count = newCount
    },
    changColor (state, n) {
      state.color = n
    },
    addClass (state, newClass) {
      state.myclass.push(newClass)
      localStorage.setItem('myclass', JSON.stringify(state.myclass))
    },
    // 删除动作
    delClassById (state, id) {
      state.myclass = state.myclass.filter(item => item.id !== id)
      localStorage.setItem('myclass', JSON.stringify(state.myclass))
    }
  },
  getters: {
    getClassByDate: (state) => (date) => {
      return state.myclass.filter(item => item.date === date)
    }
  }
})

// 导出给main.js使用
export default store
