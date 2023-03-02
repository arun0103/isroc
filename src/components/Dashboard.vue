<template>
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {{ user.name }}!</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import router from '../router';
  
  export default {
    setup() {
      const user = computed(() => JSON.parse(localStorage.getItem('user')));
  
      const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push({ name: 'login' });
      };
  
      return {
        user,
        logout
      };
    }
  };
  </script>
  