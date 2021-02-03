import Vue from "vue"
import Router from "vue-router"

const Home = () => import("../views/home/Home.vue")
const Shopcart = () => import("../views/shopcart/Shopcart.vue")
const Category = () => import("../views/category/Category.vue")
const Profile = () => import("../views/profile/Profile.vue")
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "",
            redirect: "/home",  //重定向
        },
        {
          path: "/home",
          component: Home,
        },
        {
          path: "/shopcart",
          component: Shopcart,
        },
        {
          path: "/category",
          component: Category,
        },
        {
          path: "/profile",
          component: Profile,
        },
      ],
      mode: "history"
})