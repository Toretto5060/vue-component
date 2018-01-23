import Mock from 'mockjs'



let data = {
  "status":200,
  "msg":"没有拿到数据呦",
  data:[
	  {	
	  	id:43,
	  	description:null,
	  	messageSize:null,
			name:"tamboo_sanitycheck",
			partitions:3,
			state:"normal",
		},
		{
			id:22,
	  	description:null,
	  	messageSize:null,
			name:"tamboo_consumer_metrics",
			partitions:3,
			state:"normal",
		},
		{	
			id:98,
	  	description:null,
	  	messageSize:null,
			name:"tamboo_producer_metrics",
			partitions:3,
			state:"normal",
		},
		{
			id:77,
	  	description:null,
	  	messageSize:null,
			name:"tamboo_config",
			partitions:3,
			state:"normal",
		},
		{
			id:98,
	  	description:null,
	  	messageSize:null,
			name:"tamboo_client_metrics",
			partitions:3,
			state:"normal",
		},
		{
			id:65,
	  	description:null,
	  	messageSize:null,
			name:"myFlumeTopic",
			partitions:3,
			state:"normal",
		},
		{
			id:76,
	  	description:null,
	  	messageSize:null,
			name:"__consumer_offsets",
			partitions:3,
			state:"normal",
		}
  ]
}


let datas={
	"status":200,
  "msg":"没有拿到数据呦",
  'data|8':[
	  {
	  	id:'@string("number", 5)',
	  	name: '@cname()',
	  }
  ]

}


//Form数据
Mock.mock(/\/drag\/dragName/, 'get',datas)

	
export default Mock

