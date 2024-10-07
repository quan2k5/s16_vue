import { createMemoryHistory, createRouter,createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
// import ContactView from '../views/ContactView.vue'
// import UserDetail from '../views/UserDetail.vue'
import Ex1 from '../views/homework/Ex1.vue'
import Ex2 from '../views/homework/Ex2.vue'
import Register from '../views/homework/Register.vue'
import Login from '../views/homework/Login.vue'
import Notfound from '../views/homework/NotFound.vue'
import Home from '../views/homework/Home.vue'
import Contact from '../views/homework/Contact.vue'
import HomeHeader from '../views/homework/HomeHeader.vue'
import ProductHeader from '../views/homework/ProductHeader.vue'
import DetailHeader from '../views/homework/Detail.vue'
import Navbar from '../views/homework/Navbar.vue'
import DashBoard from '../views/homework/Dashboard.vue'
import Product from '../views/homework/Product.vue'
import Accout from '../views/homework/Account.vue'
const routes = [
  // { path: '/', component: HomeView },
  // { path: '/about', component: AboutView },
  // {path:'/contact',component:ContactView},
  // {path:'/userDetail:id',component:UserDetail}
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Ex1
  // },
  {
    path:'/about',
    component:Ex2
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: Notfound
  },
  {
    path:'/',
    component:Home
  },{
    path:'/Contact',
    component:Contact
  },
  {
    path:'/homeHeader',
    component:HomeHeader
  },
  {
    path:'/productHeader',
    component:ProductHeader
  }
  , {
    path:'/detailHeader',
    component:DetailHeader
  },
  {
    path:'/navbar',
    component:Navbar,
    children:[
      {
        path:'/',
        component:DashBoard,
      },
      {
        path:'product',
        component:Product,
      },
      {
        path:'account',
        component:Accout,
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})