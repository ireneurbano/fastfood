import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import MenuPage from '@/views/MenuPage.vue';
import PizzaPepperoni from '@/views/PizzaPepperoni.vue';
import PizzaCarbonara from '@/views/PizzaCarbonara.vue';
import PizzaQuesos from '@/views/PizzaQuesos.vue';
import PizzaHawaiana from '@/views/PizzaHawaiana.vue';
import CarritoPage from '@/views/CarritoPage.vue';
import CheckOut from '@/views/CheckOut.vue';
import MapPage from '@/views/MapPage.vue';
import CompraPage from '@/views/CompraPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuPage,
  },
  {
    path: '/pizzapepperoni',
    name: 'Pepperoni',
    component: PizzaPepperoni,
  },
  {
    path: '/pizzacarbonara',
    name: 'Carbonara',
    component: PizzaCarbonara,
  },
  {
    path: '/pizza4quesos',
    name: 'Quesos',
    component: PizzaQuesos,
  },
  {
    path: '/pizzaHawaiana',
    name: 'Hawaiana',
    component: PizzaHawaiana,
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: CarritoPage,
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut,
  },
  {
    path: '/compra',
    name: 'CompraPage',
    component: CompraPage,
  },
  {
    path: '/map',
    name: 'MapPage',
    component: MapPage
  }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
