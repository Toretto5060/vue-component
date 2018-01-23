<template>
  <div class="">
    这是一个数据：{{num}}
		
		<br/>
      <button @click="num++">click here num +1</button>
    <br/>
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
    '$route' (to, from) {
      this.num = this.$route.query.id;
      console.log('数据已经更改',this.num)
    }
  },
  beforeCreate(){
  	console.log('创建前', this.num)
  },
  created(){
  	console.log('创建后', this.num)
  },
  beforeMount(){
  	console.log('载入前', this.num)
  },
  mounted(){
    console.log('载入后', this.num)
    this.$nextTick(function () {
			console.log('视图渲染完毕')
		})
  },
  beforeUpdate(){
  	console.log('更新前', this.num)
  },
  updated(){
  	console.log('更新后', this.num)
  },
  activated(){
  	console.log('keep-alive 激活时', this.num)
  },
  deactivated(){
  	console.log('keep-alive 停用', this.num)
  },
  beforeDestroy(){
  	console.log('销毁前', this.num)
  },
  destroyde(){
  	console.log('销毁后', this.num)
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
