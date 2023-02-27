import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from "@/views/ProductView";
import CartView from "@/views/CartView";
import LikesView from "@/views/LikesView";
import TopView from "@/views/TopView";
import ManView from "@/views/ManView";
import WomanView from "@/views/WomanView";
import ChildrenView from "@/views/ChildrenView";
import ForHomeView from "@/views/ForHomeView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: `/product/:id`,
    name: 'product',
    component: ProductView,
    props: true
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/likes',
    name: 'likes',
    component: LikesView
  },
  {
    path: '/top',
    name: 'top',
    component: TopView
  },
  {
    path: '/man',
    name: 'man',
    component: ManView
  },
  {
    path: '/woman',
    name: 'woman',
    component: WomanView
  },
  {
    path: '/children',
    name: 'children',
    component: ChildrenView
  },
  {
    path: '/for-home',
    name: 'ForHome',
    component: ForHomeView
  },
]

const router = new VueRouter({
  routes
})

export default router
