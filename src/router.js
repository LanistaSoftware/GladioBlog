import Vue from 'vue'
import Content from './Components/Content.vue'
import Contact from './Components/Contact.vue'
import Blog from './Components/ContentComponents/Blog.vue'
import UserProfile from './Components/UsersComponent/UserProfile.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes =[
    {path:"/", component:Content},
    {path:"/contact",component:Contact},
    {path:"/blog-details/:id",component:Blog,name:'details'},
    {path:"/user-profile/:id",component:UserProfile,name:'user'},
    {path:"*",redirect:"/"}
];

export const router = new VueRouter({
    mode:"history",
    routes
})