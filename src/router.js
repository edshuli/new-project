import Vue from "vue";
import VueRouter from "vue-router";

//Views
import Home from './views/Home.vue';
import Beers from './views/Beers.vue';

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/beers",
        name: "beers",
        component: Beers
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;