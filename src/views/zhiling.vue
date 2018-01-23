<template>
  <div class="">
    <input v-focus>
  </div>
</template>

<script>

export default {
  data () {
    return {
      num: 0
    }
  },
  components:{
    
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
        console.log(el)
        el.value = 8
      }
    }
  },
  watch: {

  },
  mounted(){
    console.log('载入后', this.num)
    this.$nextTick(function () {
      console.log('视图渲染完毕')
    })
  },
  beforeDestroy(){
    console.log('销毁前', this.num)
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
