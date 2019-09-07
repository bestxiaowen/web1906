import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:()=>import('../pages/login.vue')
        },
        {
            path:'/login',
            component:()=>import('../pages/login.vue')
        },
        {
            path:'/home',
            component:()=>import('../pages/home.vue'),
            meta:{
                allow:true
            },
            children:[
                {
                    path:'/',
                    alias:'admin',
                    component:()=>import('../pages/admin/admin.vue'),
                    meta:{
                        allow:true
                    },
                },
                {
                    path:'users',
                    component:()=>import('../pages/admin/users.vue'),
                    meta:{
                        allow:true
                    },
                },
                {
                    path:'msg',
                    component:()=>import('../pages/admin/msg.vue'),
                    meta:{
                        allow:true
                    },
                },
            ]
        }
    ]
})