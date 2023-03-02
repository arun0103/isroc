// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// import ApiService from './jwt.service';

// ApiService.init();
// ApiService.setHeader();

// createApp(App).use(store).use(router).mount('#app')

// import jQuery from "jquery";
window.$ = window.jQuery = require('jquery');


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.defaults.baseURL = 'http://64.227.30.205:80/api'; // server
// axios.defaults.baseURL = 'http://127.0.0.1:80/api'; // local




createApp(App)
  .use(router)
  .use($)
  .mount('#app');
