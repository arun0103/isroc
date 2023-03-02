
<template>
  <div id="app">
    <AppLayout markRaw>
      <router-view />
    </AppLayout>
  </div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
</template>

<script>
import AppLayout from './components/layouts/AppLayout'
export default {
  name: 'App',
  components: { AppLayout }
}
</script>

