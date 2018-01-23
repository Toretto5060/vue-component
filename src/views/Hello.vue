<template>
  <div class="hello">


    <h2>Pie chart <small>(with action dispatch)</small></h2>
    <figure><chart :options="pie" ref="pie" auto-resize></chart></figure>

    <br/>
    <el-button @click="visible = true">按钮</el-button>
  
    <el-dialog
      title="提示"
      :visible.sync="visible"
      width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="visible = false">确 定</el-button>
      </span>
    </el-dialog>

    <aslot>
      <p slot="hello">这是父组件的内容</p>
      <template slot="child" slot-scope="props">
        <span>hello from parent</span>
        <span>{{ props.text }}</span>
      </template>
    </aslot>
    <div v-for="item in 5"> {{item}}</div>
  </div>
</template>

<script>
// import Mock from 'mockjs'
import Aslot from './Slot.vue'

import ECharts from '../components/ECharts.vue'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
// import 'echarts/lib/chart/map'
// import 'echarts/lib/chart/radar'
// import 'echarts/lib/chart/scatter'
// import 'echarts/lib/chart/effectScatter'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/polar'
// import 'echarts/lib/component/geo'
// import 'echarts/lib/component/legend'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/visualMap'

// import 'echarts-liquidfill'
import pie from './data/pie'
// built-in theme
import 'echarts/theme/dark'

// custom theme
import theme from './theme.json'

// Map of China
// import chinaMap from './china.json'

// registering map data
// ECharts.registerMap('china', chinaMap)

// registering custom theme
ECharts.registerTheme('ovilia-green', theme)

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      visible: false,
      pie,
      connected: false,
    }
  },
  components:{
    Aslot,
    chart: ECharts
  },
  mounted(){
    this.getSth();
    let dataIndex = -1
    let pie = this.$refs.pie
    let dataLen = pie.options.series[0].data.length
    // setInterval(() => {
    //   pie.dispatchAction({
    //     type: 'downplay',
    //     seriesIndex: 0,
    //     dataIndex
    //   })
    //   dataIndex = (dataIndex + 1) % dataLen
    //   pie.dispatchAction({
    //     type: 'highlight',
    //     seriesIndex: 0,
    //     dataIndex
    //   })
    //   // 显示 tooltip
    //   pie.dispatchAction({
    //     type: 'showTip',
    //     seriesIndex: 0,
    //     dataIndex
    //   })
    // }, 1000)
    this.connected = true
  },
  methods:{
    getSth(){
      console.log(22)
      this.$Axios.get('/post',{
        params:{
          url: 'url'
        }
      }).then(function(res){
        if(res.status == 200){
          console.log(res)
        }

      }).catch( function(error){

      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.echarts{
  width: 40vw;
  min-width: 400px;
  height: 300px;
  margin: 0 auto;
}
figure {
    display: inline-block;
    margin: 2em auto;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 8px;
    box-shadow: 0 0 45px rgba(0,0,0,.2);
    padding: 1.5em 2em;
}
</style>
