import { createWebHistory, createRouter } from "vue-router"
import Home         from "@/views/MainHome.vue"
import About        from "@/views/MainAbout.vue"
import Events       from "@/views/MainEvents.vue"
import NotFound     from "@/views/NotFound.vue"
import LeftSidebar  from '@/components/layout/LeftSidebar.vue'

import HelloWorld       from '@/views/example/HelloWorld.vue'
//import ArticleList      from '@/views/example/ArticleList.vue'
import ArticleDetail    from '@/views/example/ArticleDetail.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    name: "LeftSidebar",
    component: LeftSidebar
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/events",
    name: "Events",
    component: Events
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound
  },
  {
    path: "/exam/HelloWorld",
    name: "HelloWorld",
    component: HelloWorld
  }, 
  {
    path: "/exam/article/:id",
    component: ArticleDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;