<template>
    <div id="app">
        <!--折线图-->
        <div id="myChartc"></div>
        <!--<p id="demo">在这里显示时间</p>-->
        <!--<button  click="myFunction">点我</button>-->
    </div>
</template>

<script>
    let echarts = require('echarts/lib/echarts')
    export default {
        name: 'histogram',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChartc = echarts.init(document.getElementById('myChartc'));
                let hello = true;

                let data = [];
                let now = new Date().getTime();
                let xArr =[];
                function randomData() {
                    if(hello){
                        for(let j=0;j<50;j++){
                            now += 4000;
                            let value = Math.floor(Math.random()*1000+20);
//                            console.log(value)

                            xArr.push(new Date(now).getHours()+':'+new
                                Date(now).getMinutes()+':'+new
                                Date(now).getSeconds());
                            data.push(value)
                        }
                        hello = false;
                    }else{
                        now += 1000;
                        let value = Math.floor(Math.random()*1000+20);
                        xArr.push(new Date(now).getHours()+':'+new
                            Date(now).getMinutes()+':'+new
                            Date(now).getSeconds());
                        data.push(value)
                            xArr.shift();
                            data.shift();
                    }

                }

                myChartc.showLoading();    //数据加载完之前先显示一段简单的loading动画

                // 绘制图表
                myChartc.setOption({
                    title: {
                        text: '折线图',
                    },
                    tooltip: {
                        trigger: 'axis',
//                        axisPointer: {   //x，y轴显示当前
//                            type: 'cross',
//                        }
                    },
                    legend: {
                        x:'center',
                        y:'30px',
                        data:[]
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [],
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
//                            interval: 5
                        },
                        splitLine:{
                            show: true,
//                            onZero:true
                        },//去除网格线
                    },
                    yAxis: {
                        type: 'value',
                        name:'(Bety)',
//                        min:0,
//                        max:1800,
                        axisTick:{
                            show:false
                        },
                        splitLine:{
                            show: true,
//                            onZero:true
                        },//去除网格线
                    },
                    series: [
                        {
                            type:'line',
                            symbol:'circle',
                            stack: '总量',
                            data:data
                        }
                    ]
                });

                setInterval(function () {
                    randomData();
                    myChartc.setOption({
                        series: [{
                            data: data
                        }],
                        xAxis:{
                            data: xArr,
                        }
                    });
                    myChartc.hideLoading();    //隐藏加载动画
                }, 5000);

//                myChartc.showLoading();    //数据加载完之前先显示一段简单的loading动画
//                this.$Axios.get('/data.json',{
//                    params:{
//                    }
//                }).then(function(res){
//                    console.log(res)
//
//                    let arr = []
//                    for(let i = 0;i<res.data.name.length;i++){
//                        let objTemp = {
//                            name: res.data.name[i],
//                            type:'line',
//                            symbol:'circle',
//                            data: res.data.data[i]
//                        }
//                        arr.push(objTemp)
//                    }
//                    let obj ={
//                        xAxis: {
//                            data: res.data.categories
//                        },
//                        legend: {
//                            data:res.data.name
//                        },
//                        series: arr,
//                        list:{
//                            data:res.data.list
//                        }
//                    };
//                    myChartc.setOption(obj);
//                }).catch( function(error){
//                });

                window.addEventListener('resize', function() {
                    myChartc.resize()
//                    console.log(1112)
                }.bind(this))
            }
        }
    }
</script>

<style scoped>
    #myChartc {
        width: 90%;
        height: 300px;
        margin: auto;
    }
</style>