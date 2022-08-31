import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RendezvousView from '@/views/RendezvousView.vue'
import ContactusView from "@/views/ContactusView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Rendezvous',
    name: 'RendezvousView',
    component:RendezvousView
  },
  {
    path: '/Contactus',
    name: 'ContactusView',
    component:ContactusView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
