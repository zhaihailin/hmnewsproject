<template>
  <div class="child">
    child
    <p>{{count}}</p>
    <!-- 方法调用时传入实参 -->
    <button @click="setCount( '自己的实参')">anniu</button>

    <button @click="acSetCount()">按钮</button>
    <van-button type="danger" round >默认按钮</van-button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  // name: 'Child'
  computed: {
    // ...是展开运算符,它可以展开数组和对象,从中获取数据
    ...mapState(['count']),
    ...mapState(['age'])
  },
  methods: {
    // 映射为组件的methods
    // 可以利用vuex的辅助函数mapmutations简化代码
    ...mapMutations(['setCount']),
    // setCount () {
    //   // 可在方法后边传入参数
    //   // this.$store.commit('setCount', '自己的实参')
    // }

    // acSetCount () {
    //   this.$store.dispatch('acSetCount')
    // }
    // axtions简化写法
    // 映射在methods里边
    ...mapActions(['acSetCount'])
  }
}
</script>

<style>

</style>
