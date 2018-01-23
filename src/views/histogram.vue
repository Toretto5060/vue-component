<template>
    <div id="app">
    <!--柱状图-->
    <div id="myCharth"></div>
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
                let myCharth = echarts.init(document.getElementById('myCharth'));

                // 绘制图表
                myCharth.setOption({
                    title: { text: '柱形图' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
                window.addEventListener('resize', function() {
                    myCharth.resize()
//                    console.log(1112)
                }.bind(this))
            },
            submitForm () {
                this.$ajax({
                    method: 'post',
                    url: '/user',
                    data: {
                        name: 'wise',
                        info: 'wrong'
                    }
                })
            } //submitForm end
        }
    }
</script>

<style scoped>
    #myCharth {
        width: 60%;
        height: 400px;
        margin: auto;
    }
</style>