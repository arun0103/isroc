import { createRouter, createWebHistory } from 'vue-router';
import Devices from './components/views/Devices.vue';
import Login from './components/Login.vue';
import Reset from './components/Reset.vue';
import ResetPassword from './components/ResetPassword.vue';
import Register from './components/Register.vue';
import Dashboard from './components/Dashboard.vue';
import Distributors from './components/views/Distributors.vue';
import Members from './components/views/Members.vue';
import Clients from './components/views/Clients.vue';
import AppLayoutHome from './components/layouts/AppLayoutHome.vue';
import NewDevice from './components/device/New.vue';
import DeviceDetail from './components/device/Detail.vue';
import { markRaw } from "vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: markRaw(Devices),
    meta: { requiresAuth: true, layout: 'AppLayoutHome' }
  },
  {
    path: '/login',
    name: 'login',
    component: markRaw(Login)
  },
  {
    path: '/register',
    name: 'register',
    component: markRaw(Register)
  },
  {
    path: '/reset',
    name: 'reset',
    component: markRaw(Reset)
  },
  {
    path: '/reset/password',
    name: 'reset_password',
    component: markRaw(ResetPassword)
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: markRaw(Dashboard),
    meta: { requiresAuth: true, layout: 'AppLayoutHome'  }
  },
  {
    path: '/devices',
    name: 'devices',
    component: markRaw(Devices),
    meta: { requiresAuth: true, layout: 'AppLayoutHome'  }
  },
  {
    path: '/distributors',
    name: 'distributors',
    component: markRaw(Distributors),
    meta: { requiresAuth: true, layout: 'AppLayoutHome'  }
  },
  {
    path: '/members',
    name: 'members',
    component: markRaw(Members),
    meta: { requiresAuth: true, layout: 'AppLayoutHome'  }
  },
  {
    path: '/clients',
    name: 'clients',
    component: markRaw(Clients),
    meta: { requiresAuth: true, layout: 'AppLayoutHome'  }
  },
  {
    path: '/device/new',
    name: 'device_new',
    component: markRaw(NewDevice),
    meta: { requiresAuth: true, layout: 'AppLayoutHome'  }
  },

  {
    path: '/device/detail/:id',
    name: 'device_detail',
    component: markRaw(DeviceDetail),
    meta: { requiresAuth: true, layout: 'AppLayoutHome'  }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      next({
        name: 'login'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;