import Vue from 'vue'
import App from './App.vue'
// 引入vuex
import Vuex from 'vuex'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
//   使用vuex
Vue.use(Vuex)
// 注册一个vuex实例
const store = new Vuex.Store({
  // state(状态)值是一个对象,作用是声明数据
  state: {
    count: 100,
    age: 200
  },
  // mutations是对象,对象里是同步方法,方法的作用是修改state,
  // mutations中的方法默认传递形参state,,返回值是一个对象
  mutations: {
    // 可传参数
    setCount (state, payload) {
      console.log('state被处罚', payload)
      state.count = 300
    }
  },
  // actions是对象,他里面是异步方法,,方法中写的是和后后台交互的请求
  // 方法中的请求应该是Ajax, 是异步的
  // 常见的异步有: 1,Ajax  2, 定时器  3,所有事件  4,操作数据库(增删改查)
  // 所有异步方法的共同点是不会阻塞程序执行,后续代码不等待
  // 解决上述方法:  回调函数   promise  async+await
  actions: {
    // 此时可通过传参方式传入一个仓库的对象,无论传过来的仓库名叫什么都以现有的参数名去使用
    // actions中的方法默认传
    acSetCount (context) {
      console.log('actions中的方法被处罚')
      // 异步方法
      setTimeout(() => {
        // actions与后台交互后会返回新数据
        // 新数据
        const newCount = 1000
        // 新数据会通过commit方式提交给mutations中的方法
        context.commit('setCount', newCount)
      }, 1000)
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
