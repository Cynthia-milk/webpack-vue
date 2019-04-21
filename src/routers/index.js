import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/index';
import News from '@/news';
Vue.use(Router);
export  default new Router({
    routes: [
        {
            path:'/',
            name:'index',
            component:Index
        },{
            path:'/news',
            name:'news',
            component:News
        }
    ]
})
