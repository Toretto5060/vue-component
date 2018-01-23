<template>
  <div id="extend">
    
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      
    }
  },
  components:{
    
  },
  
  mounted(){
  	let a = this.Universe();
  	let b = this.Universe();
  	// a.bang = "hello"

  	var dad = {
  		count: [1, 2, 3],
  		reads: {paper: true}
  	}
  	let kid = this.extendDeep(dad)
  	kid.count.push(4)
  	// console.log(kid.count, dad.count)

  	// return;
    let component;

		let options = {
	    template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
	    data: function () {
        return {
          firstName: 'Walter',
          lastName: 'White',
          alias: 'Heisenberg'
        }
	    },
	    created() {
        console.log('onCreated-1');
	    },
	    methods:{
	    	sayHello(){
	    		console.log('hello from HeisenBerg')
	    	}
	    }
		};

		let type = 1;
		switch (type) {
	    case 0:
        new Vue(options).$mount('#extend');
        break;
	    case 1:
        let MyComponent = Vue.extend(options);
        new MyComponent({
          data: function () {
            return {
              alias: 'MyComponent'
            }
          },
          created() {
            console.log('onCreated-2');
            this.sayHello();
            this.sayHello2();
          },
          methods:{
			    	sayHello2(){
			    		console.log('hello from MyComponent')
			    	}
			    }
        }).$mount('#extend');
        break;
	    case 2:
        let MyComponent2 = Vue.extend({
          extends: options,
          data: function () {
            return {
              alias: 'MyComponent2'
            }
          },
          created() {
            console.log('onCreated-2');
          }
        });
        new MyComponent2().$mount('#extend');
        break;
	    case 3:
        let MyComponent3 = Vue.extend({
          mixins: [options],
          data: function () {
            return {
              alias: 'MyComponent3'
            }
          },
          created() {
            console.log('onCreated-2');
          }
        });
        new MyComponent3().$mount('#extend');
        break;
		}
  },
  methods:{
    Universe(){
  		if(typeof this.Universe.instance === "object"){
  			return this.Universe.instance;
  		}
  		this.start_time = 0;
  		this.bang = "big";
  		this.Universe.instance = this;
  		return this
  	},
  	extend(parent, child){
  		let i
  		child = child || {}
  		for(i in parent){
  			if(parent.hasOwnProperty(i)){
  				child[i] = parent[i]
  			}
  		}
  		return child
  	},
  	extendDeep(parent, child){
  		let i, toStr = Object.prototype.toString, astr = '[object Array]'
  		child = child || {}
  		for(i in parent){
  			if(parent.hasOwnProperty(i)){
  				if(typeof parent[i] === 'object'){
  					child[i] = (toStr.call(parent[i]) === astr) ? [] : {}
  					this.extendDeep(parent[i], child[i])
  				}else{
  					child[i] = parent[i]
  				}
  			}
  		}
  		return child
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
