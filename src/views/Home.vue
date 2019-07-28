<template>
  <div class="home">
<h3>使用vuex中的state中的count数据</h3>
<!-- 在视图中使用state里的数据用插值表达式  {{this.$store.state.数据名即可}} -->
<p>{{this.$store.state.count}}</p>
<hr>
<!-- 在js里使用state数据直接在标签里写入插值表达式,,插值表达式里写computed里面的对应的方法名即可 -->
<p>{{count}}--{{age}}</p>
<!-- 使用组件 -->
<Child></Child>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// 导入组件
import Child from './Child'
export default {
  // 注册组件
  components: {
    Child
  },
  name: 'home',
  // 在组件中使用vuex的state数据
  // 1,需要把state数据映射为(修改为)组建的computed(计算属性)
  // 2,利用vuex的辅助函数mapstate简化代码
  // 2.1 mapstate是一个方法
  // 2.2 mapstate()的实参可以是['state中的数据名']
  // 2.3mapstate返回一个对象{count:function(){return this.$store.state.count}}
  computed: {
    // ...是展开运算符,它可以展开数组和对象,从中获取数据
    ...mapState(['count']),
    ...mapState(['age'])
    // 在js里使用state数据直接在标签里写入插值表达式,,插值表达式里写computed里面的对应的方法名即可
    // count () {
    //   return this.$store.state.count
    // }
  }
}
</script>
