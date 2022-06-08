import { createRouter, createWebHistory } from 'vue-router'
import ProductDetailsView from '../views/ProductDetailsView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/product_:id',
    name: 'ProductDetailsView',
    component: ProductDetailsView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
