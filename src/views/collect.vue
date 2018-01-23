<template>
	<div>
		<div class="header" style="height: 35px;width: 100%;">
		<!--输入框搜索-->
			<div class="search" style="float: left;text-align: left;">
				<el-input v-model="ser" placeholder="filterkeywords" class="handle-input mr10" size="small"></el-input>
				<el-button type="primary" icon="search" @click.native="search" size="small">搜索</el-button>
			</div>
	
			<!--<div class="btn" style="float: right;margin-left: 5px;">
				<el-button type="primary" size="small" @click="centerDialogVisible = true">操作</el-button>			
			</div>
			
			<div class="btn" style="float: right;margin-left: 5px;">
				<el-button type="primary" size="small">导入</el-button>
			</div>
			
			<div class="btn" style="float: right;">
				<el-button type="primary" size="small">新增</el-button>
			</div>-->
			
			<div class="btn" style="float: right;">
				<el-button type="primary" @click="change()" size="small">切换</el-button>
			</div>
			
		</div>
		
		<!--table部分-->
		<div class="midcontent">
			<div class="pic" v-if="shown" v-for="item in tableData">
				<el-col :xs="24" :sm="12" :md="8">
					<div class="grid-content">
						<el-card class="box-card1">
				  			<div slot="header" class="clearfix">
				    			<span>
				    				{{item.name}}
				    			</span>
				  			</div>
				  			<div class="content">
				  				<span style="display:inline-block;width:45%;text-align: center;">
				  					<h1>{{item.partitions}}</h1>
				  					<div>Partitions</div>
				  				</span>
				  				<span style="display:inline-block;width:49%;text-align: center;">
				  					<h1>{{item.messagesize}}<span style="font-size: 16px;">B</span></h1>
				  					<div>Message Size</div>
				  				</span>
				  			</div>
				  						
					  		<div class="content-hover" @click="page(item)">
					  			<p>View Detail</p>
					  		</div>
					  					
						</el-card>
					</div>
				</el-col>						
			</div>
			
			
			<div class="table" v-if="isShow" style="margin-top:15px;cursor: pointer;">
				<el-table v-loading="loading"  :data="tableData" ref="table" @selection-change="handleSelectionChange" @current-change="handleCurrentChange2" style="width: 100%;">
					
					<el-table-column prop="name" label="Machine Name" sortable>					
					</el-table-column>
					
					<el-table-column prop="partitions" label="Partitions" sortable>					
					</el-table-column>
					
					<el-table-column prop="messagesize" label="Message Size" sortable>					
					</el-table-column>
	
				</el-table>
			</div>
		</div>
		<!--分页-->
		<div class="block" style="float: right;">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[6, 12, 18, 24]" :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="tot">
			</el-pagination>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			ser: '',
			tot: 0,
			str: '',
			value: "",
			multipleSelection: [],
			dataAll: [],
			value: "",
			name:'',
			loading: true,
			cId:'',
			tableData: [],
			currentRow: null,
			currentPage: 1,
			pageCount: 5,
			select_word: "",
			loading: true,
			shown:true,
			isShow:false,
			currentRow: null,
			currentPage: 1,
			pageCount: 6,
			select_word: "",
			form:{
                agent:'',
                text: ''
            },

		};
	},
	
	mounted() {
		let that = this;
		this.mk();
	},
	
	components: {
	},


	methods: {
		page(item){
			console.log(item.id)
			
		},

		change(){
			if(this.shown==true){
				this.shown=false;
				this.isShow=true;
			}else{
				this.shown=true;
				this.isShow=false;
			}
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		mk() {
			let that = this;
			that.loading = true;
			that.$Axios.get("/machine/mok", {
				params: {
					page: that.currentPage,
					num: that.pageCount,
					keywords: that.select_word
				}
			}).then(function(res) {
//				console.log(res);
				that.loading = false;
				if(res.data.status === 200) {
					that.tableData = res.data.data.pageData;
					that.tot = res.data.data.tot;
				} else {
					that.$message(res.data.msg);
				}
			}).catch(function(error) {
				that.loading = false;
//				console.log(error);
			});
		},
		
		search() {
			this.select_word = this.ser;
//			console.log(this.ser);
			this.mk();
		},

		
		handleSizeChange(val) {
			this.pageCount = val;
			this.mk();
		},
		
		handleCurrentChange(val) {
//			console.log(`当前页: ${val}`);
			this.mk();
		},
		handleCurrentChange2(val) {
			this.currentRow = val;
        	if(val)
        	console.log(val.id)
		},
		
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.bottom {
		margin-top: 10px;
	}
	.search{
		.el-input{
			width: 150px;
		}
	}
	
	.mr10 {
		width: 150px;
	}
	
	.has-gutter tr:first-child {
		background-color: #eee;
	}
	
	.inp3 {
		width: 220px;
	}
	
	.block {
		margin-top: 10px;
		text-align: right;
	}
	
	.setting-user {
      	text-align: center;
      	.dialog {
          	text-align: left;
      	}
    }
    
    .has-gutter tr:first-child {
      	background-color: #eee;
    }
    
    .setting-collect{
    	padding-bottom: 8px;
    }
    
    .el-dialog_center{
    	overflow: hidden;
    }
    
    .inlini,.inlinl,.inlinr,.inlinb{
      	display:block;
      	float: left;
    }
    
    .table{
    	width:100%;

    }
    .grid-content{
    	margin-top:15px ;
    	position:relative;
    	padding: 5px;
    }
    .grid-content{
    	.content-hover{
    		opacity: 0;
    	}
    }
    .grid-content:hover{
		.content-hover{
    		opacity: 1;
    		cursor: pointer;
  		}    	
    }
    .content-hover{
   		background-color: rgba(16,16,19,.8);
    	position: absolute;
    	top:0;
    	left:0;
    	bottom:0;
    	right:0;
    	color:#b99b31;
    	text-align: center;
    	transition: .5s all ease-in-out;
    }
	.content-hover p {
    	line-height: 180px;
    	font-size: 16px;
	}
	div.cell{
		text-align: center;
	}
</style>