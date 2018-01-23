import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/slot',
      component: function (resolve) {
        require(['@/views/Slot.vue'], resolve)
      }
    },
    {
      path: '/demo',
      component: function (resolve) {
        require(['@/views/demo.vue'], resolve)
      }
    },
    {
      path: '/zhiling',
      component: function (resolve) {
        require(['@/views/zhiling.vue'], resolve)
      }
    },
    {
      path: '/extend',
      component: function (resolve) {
        require(['@/views/extend.vue'], resolve)
      }
    },
    {
      path: '/form',
      component: function (resolve) {
        require(['@/views/Form.vue'], resolve)
      }
    },
    {
      path: '/collect',
      component: function (resolve) {
        require(['@/views/collect.vue'], resolve)
      }
    },
    {
      path: '/pie',
      component: function (resolve) {
        require(['@/views/pie.vue'], resolve)
      }
    },
    {
      path: '/histogram',
      component: function (resolve) {
        require(['@/views/histogram.vue'], resolve)
      }
    },
    {
      path: '/curve',
      component: function (resolve) {
        require(['@/views/curve.vue'], resolve)
      }
    },
    {
      path: '/drag',
      component: function (resolve) {
        require(['@/views/drag.vue'], resolve)
      }
    }

    
  ]
})
