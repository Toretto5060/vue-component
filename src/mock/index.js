import Mock from 'mockjs'
import machineApi from './machine'
import dragApi from './drag'

Mock.setup({
  timeout: '350-600'
})

//其他
Mock.mock(/\/post/, 'get', {"ret":0,"hello":"city"})


//Form数据
Mock.mock(/\/mok/, 'get', {
	code: 200,
	error: '用户未登录',
	data: [{
					date:'2016-05-02',
          name: '王小虎',
          id:'001',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '孙小豹',
          id:'002',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '张大彪',
          id:'003',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '李云龙',
          id:'004',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          id:'005',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '孙小豹',
          id:'006',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '张大彪',
          id:'007',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '李云龙',
          id:'008',
          address: '上海市普陀区金沙江路 1516 弄'
        }
        , {
          date: '2016-05-04',
          name: '孙小豹',
          id:'009',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '张大彪',
          id:'010',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '李云龙',
          id:'011',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          id:'012',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '孙小豹',
          id:'013',
          address: '上海市普陀区金沙江路 1517 弄'
        },
         {
          date: '2016-05-04',
          name: '孙小豹',
          id:'014',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '张大彪',
          id:'015',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '李云龙',
          id:'016',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          id:'017',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '孙小豹',
          id:'018',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-04',
          name: '孙小豹',
          id:'019',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '张大彪',
          id:'020',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '李云龙',
          id:'021',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          id:'022',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '孙小豹',
          id:'023',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-04',
          name: '孙小豹',
          id:'024',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '张大彪',
          id:'025',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '李云龙',
          id:'026',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          id:'027',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '孙小豹',
          id:'028',
          address: '上海市普陀区金沙江路 1517 弄'
        },
         {
          date: '2016-05-04',
          name: '孙小豹',
          id:'029',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '张大彪',
          id:'030',
          address: '上海市普陀区金沙江路 1519 弄'
        }],
	})
export default Mock

