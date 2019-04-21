import Vue from 'vue';
import router from './routers/'
import App from './App.vue'
import Axios from  'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,Axios)
 let vm=new Vue({
     el:'#app',
     components:{
       App
     },
     router,
     template:`
         <App/>
     `
 })