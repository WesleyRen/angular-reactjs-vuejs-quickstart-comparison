import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import User from './components/User.vue'
import Account from './components/Account.vue'
import Info from './components/Info.vue'
import Blog from './components/Blog.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: User},
    { path: '/Account', component: Account},
    { path: '/Info', component: Info},
    { path: '/blog', component: Blog}
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

Vue.component('app-user', User);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})
