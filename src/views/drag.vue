<template>
  <div id="drag">
    <el-card class="box-card">
      <el-row>
        <el-col :sm='24' :md="12">
          <div class="grid-content bg-purple">
             <el-transfer
                v-loading="loading"
                v-model="value1"
                :data="data"
                filterable
                filter-placeholder='Please enter your content'
                @change='handleChange'
                :titles="['Topic Lis', 'Target List']"
                  >
              </el-transfer>

          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
     data() {
      return {
        loading:false,
        data:[],
        value1: [],
        arrs:[],
        drawing:[]
      }
    },
    components:{ 
    },
    mounted(){
      this.shuttle() 
    },
    methods:{
      shuttle(){
        let that=this;
        that.loading = true;
        that.$Axios.get('/drag/dragName', {
          params: {
          }
        }).then(function (res) {
            that.loading = false;            
            if (res.data.status == 200) {
              that.arrs=res.data.data;
              let objName={
                name:[],
                id:[]
              }
              for(let j=0;j<res.data.data.length;j++){
                objName.name.push(res.data.data[j].name)
                objName.id.push(res.data.data[j].id)
              }
              // console.log(objName.id)
              objName.name.forEach((name, index) => {
                that.data.push({
                  label: name,
                  key: index,
                });
              })
            }else{
                that.$message.error(res.data.msg);
              }
          }).catch(function (message) {
              that.loading = false;
              // console.log(message)
          });
      },
      handleChange(value, direction, movedKeys) { 
      //value --> 右侧框内所有数据的下标;
      //direction --> 变量移动的方向;
      //movedKeys -->移动的变量的下标
        let that=this;                            
        for(let i=0;i<value.length;i++){         
          that.drawing=that.arrs[i]
          // console.log(that.drawing)
          // console.log(that.arrs[i].id)
        }
        // console.log(value, direction, movedKeys);

      },
      
  }
  };
   
</script>

<style scoped>
.el-transfer{
  display: block;
  margin:auto;
}
</style>

<style>
.el-transfer-panel{
  width: 225px;
}
  

</style>