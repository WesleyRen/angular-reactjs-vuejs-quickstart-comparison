<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/Account">Account</router-link>
      <router-link to="/Info">Info</router-link>
      <router-link to="/Blog">Blog</router-link>
    </div>
    <router-view></router-view>
    <!-- app-user></app-user-->
    <p>This is a test.</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
