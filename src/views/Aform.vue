<template>
	<div class="bottom" style="position: relative;">

		<el-tabs type="border-card">
			<el-tab-pane label="用户管理">
				<div class='table'>
					<el-table v-loading="loading" border height='300' :data="data" @current-change="handleCurrentChange2" style="width: 100%">
						<el-table-column prop="date" label="日期" sortable width="180">
						</el-table-column>
						<el-table-column prop="name" label="姓名" sortable width="180">
						</el-table-column>
						<el-table-column prop="id" label="ID" sortable width="180">
						</el-table-column>
						<el-table-column prop="address" label="地址" :formatter="formatter">
						</el-table-column>
					</el-table>
				</div>
				<div class="block" style="margin-top:10px ;text-align: right;">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 30]" :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="30">
					</el-pagination>
				</div>
			</el-tab-pane>

			<el-tab-pane label="配置管理">

				<div class='table'>
					<el-table v-loading="loading" border height='300' :data="data" @current-change="handleCurrentChange2" style="width: 100%">

						<el-table-column prop="id" label="ID" sortable width="180">
						</el-table-column>

						<el-table-column prop="date" label="日期" sortable width="180">
						</el-table-column>

						<el-table-column prop="name" label="姓名" sortable width="180">
						</el-table-column>
						
						<el-table-column prop="address" label="地址" :formatter="formatter">
						</el-table-column>
						
					</el-table>
				</div>
				<div class="block" style="margin-top:10px ;text-align: right;">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 30]" :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="30">
					</el-pagination>
				</div>
			</el-tab-pane>

		</el-tabs>

		<div class="btn" style="position: absolute;top:4px;right: 6px;">
			<el-button type="primary" @click="dialogFormVisible = true" size="small">Add</el-button>
		</div>

		<div class="dialog">
			<el-dialog title="添加信息" :visible.sync="dialogFormVisible">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="text-align: left;">
					<el-form-item label="活动名称" prop="name">
						<el-input v-model="ruleForm.name"></el-input>
					</el-form-item>
					<el-form-item label="活动区域" prop="region">
						<el-select v-model="ruleForm.region" placeholder="请选择活动区域">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="活动时间" required>
						<el-col :span="11">
							<el-form-item prop="date1">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col class="line" :span="2">-</el-col>
						<el-col :span="11">
							<el-form-item prop="date2">
								<el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
							</el-form-item>
						</el-col>
					</el-form-item>
					<el-form-item label="即时配送" prop="delivery">
						<el-switch v-model="ruleForm.delivery"></el-switch>
					</el-form-item>
					<el-form-item label="活动性质" prop="type">
						<el-checkbox-group v-model="ruleForm.type">
							<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
							<el-checkbox label="地推活动" name="type"></el-checkbox>
							<el-checkbox label="线下主题活动" name="type"></el-checkbox>
							<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="特殊资源" prop="resource">
						<el-radio-group v-model="ruleForm.resource">
							<el-radio label="线上品牌商赞助"></el-radio>
							<el-radio label="线下场地免费"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="活动形式" prop="desc">
						<el-input type="textarea" v-model="ruleForm.desc"></el-input>
					</el-form-item>
					<el-form-item style="text-align: center;margin-left: -100px;">
						<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
						<el-button @click="dialogFormVisible = flase">取消</el-button>
					</el-form-item>
				</el-form>

			</el-dialog>
		</div>
		<!--<div style="float: left;text-align: left;">
			<el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10" size="small"></el-input>
            <el-button type="primary" icon="search" @click="search" size="small">搜索</el-button>
		</div>-->
		<!--<div style="float: right;" class="btn">
			<el-button type="primary" @click="dialogFormVisible = true" size="small">Add</el-button>
		</div>-->
		<el-steps :active="active" finish-status="success" style="width:480px;margin-top: 30px;">
  			<el-step title="步骤 1"></el-step>
  			<el-step title="步骤 2"></el-step>
  			<el-step title="步骤 3"></el-step>
		</el-steps>
		<el-card class="box-card">
  			<div v-for="o in 4" :key="o" class="text item">
    			{{'日志' + o }}
 			</div>
		</el-card>

		<el-button style="margin-top: 12px;" @click="next">下一步</el-button>

	</div>
</template>

<script>
export default {
    data() {
      return {
      	active: 0,
      	dataAll:[],
        value: '',
        loading: true,
        tableData: [],
        currentRow: null,
        currentPage: 1,
        pageCount: 5,
        select_word: '',
        dialogFormVisible: false,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        formLabelWidth: '120px'
      }
    },
    mounted(){
    	let that = this;
      
      this.mk();
	},
	computed: {
	    data(){
	        const self = this;
	        return self.tableData.filter(function(d){
	                if(d.name.indexOf(self.select_word) > -1 ||
	                    d.address.indexOf(self.select_word) > -1){
	                    return d;
	                }
	        })
	    }
	},
    methods: {
    	next() {
        	if (this.active++ > 2) this.active = 0;
     			},
    	mk(){
    		let that = this;
    		this.$Axios.get('/mok').then(function(res){
    			that.loading=false;
    			if(res.data.code == 200){
    				that.dataAll = res.data.data;
	        	that.tableData = that.dataAll.slice(0,that.pageCount);
    			}else{
    				that.$message(res.data.error);
    			}
	     }).catch( function(error){
	     	that.loading=false;
				console.log(error)
	     });
    	},
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },	    
    handleCurrentChange(val){
            this.cur_page = val;
            this.getData();
        },
	    search(){
	      	
	    },
      	
    handleCurrentChange2(val) {
	        this.currentRow = val;
	        if(val)
	        alert('此人的ID为'+val.id)
	      },
	      formatter(row, column) {
	        return row.address;
	      },
	      handleSizeChange(val) {
	        this.pageCount = val;
	        this.tableData =  this.dataAll.slice(0,this.pageCount);
	      },
	      handleCurrentChange(val) {
	       console.log(`当前页: ${val}`);
	        
	        this.tableData =  this.dataAll.slice(this.pageCount*(val-1),this.pageCount*val);
	      }
    },
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.bottom{
	margin-top: 10px;
}
.mr10{
	width: 150px;
	}
.has-gutter tr:first-child{
  	background-color: #eee;
	}
.inp3{
		width:220px;
	}
div.cell{
		text-align:center;
	}
	.text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
