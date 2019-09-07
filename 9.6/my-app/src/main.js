import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if(to.meta.allow){
    if(localStorage.getItem('key')){
      next()
    }else{
      next({
        path:'/login'
      })
    }
  }else{
    next()
  }

})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
