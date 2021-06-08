import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Catalog from '../views/Catalog.vue'
import About from "@/views/About";
import Company from "@/views/Company";
import Contacts from "@/views/Contacts";
import Delivery from "@/views/Delivery";
import FAQ from "@/views/Faq";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/catalog/:productId',
    name: 'Product',
    component: Catalog
  },
  {
    path: '/company',
    name: 'Company',
    component: Company
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
