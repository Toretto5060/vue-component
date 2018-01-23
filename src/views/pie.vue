<template>
    <div id="app">
        <!--饼图-->
        <div id="myChartp">

        </div>
    </div>
</template>

<script>
    let echarts = require('echarts/lib/echarts')
    export default {
        name: 'pie',
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
                let myChartp = echarts.init(document.getElementById('myChartp'));
                // 绘制图表
                myChartp.setOption({
                    title: { text: '饼状图' },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
//                        left: 'left',
                        x:'top',
                        y:'50px',
                        data: ['Linux','Rs600','Rs400','Windows']
                    },
                    series: [{
                        name: '系统占比',
                        type: 'pie',
                        radius: '65%',
                        center: ['50%', '47%'],
                        clockwise: false,
                        data: [
                            {
                                value:45,
                                name:'Linux'
                            },
                            {
                                value:25,
                                name:'Rs600'
                            },
                            {
                                value:15,
                                name:'Rs400'
                            },
                            {
                                value:8,
                                name:'Windows'
                            }
                        ],
                        itemStyle:{
                            normal:{
                                label:{
                                    show: true,
                                    formatter: '{d}%'
                                },
                                labelLine :{show:true}
                            }
                        }

                        }]
                });
                window.addEventListener('resize', function() {
                    myChartp.resize()
//                    console.log(1112)
                }.bind(this))
            }
        }
    }
</script>

<style scoped>
#myChartp{
    width: 60%;
    height: 400px;
    margin: auto;
}
</style>