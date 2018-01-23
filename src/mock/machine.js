import Mock from 'mockjs'

//collect
let moked =
{
	"status":200,
	"msg":"用户未登录",
	"data":{
		"pageData|6": [{
				"partitions|1-9": 1,
				"name": '@first()',
				"messagesize|1-9":1,
				"id|1-99": 1,
		}],
		tot: 30,			
	}
};
Mock.mock(/\/machine\/mok/, 'get',moked)







export default Mock