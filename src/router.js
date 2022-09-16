import { createWebHistory, createRouter } from "vue-router"

import Home         from "@/views/MainHome.vue"
import About        from "@/views/MainAbout.vue"
import Events       from "@/views/MainEvents.vue"
import NotFound     from "@/views/NotFound.vue"
//import LeftSidebar  from '@/components/layout/LeftSidebar.vue'
//import ArticleList      from '@/views/example/ArticleList.vue'
import ArticleDetail    from '@/views/example/ArticleDetail.vue'

import BasicHome       from '@/views/example/BasicHome.vue'
import HelloWorld       from '@/views/example/HelloWorld.vue'
import UserHome       from '@/views/example/UserHome.vue'
import UserDetail       from '@/views/example/UserHomeDetail.vue'

import UserInput            from '@/views/example/UserInput.vue'
import BasicCondition       from '@/views/example/BasicCondition.vue'
import TodoList             from '@/views/example/TodoList.vue'
import InputForm             from '@/views/example/InputForm.vue'
import TreeView             from '@/views/example/TreeView.vue'
import ShowModal             from '@/views/example/ShowModal.vue'
import CounterNumber             from '@/views/example/CounterNumber.vue'
import ConverterTemperature      from '@/views/example/ConverterTemperature.vue'
import FlightBooker              from '@/views/example/FlightBooker.vue'


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },/*
  {
    name: "LeftSidebar",
    component: LeftSidebar
  },*/
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
    path: "/exam/article/:id",
    component: ArticleDetail
  }, 
  { path: "/exam/HelloWorld",  name: "HelloWorld",  component: HelloWorld  } ,
  { 
    path: "/exam/basic/:id",  
    component: BasicHome, 
    children: [
        //{ path: '',             component: ExamBasic,  },
        { path: 'helloWorld',  component: HelloWorld,  },
        { path: 'userInput',   component: { default:UserInput, home: UserHome } },
    ]
  } ,
  { 
    path: "/basic",  
    component: BasicHome, 
    children: [
        { path: 'helloWorld',   component: HelloWorld,  },
        { path: 'basicHome',     components: { default: UserHome,     helper: UserDetail } },
        { path: 'userInput',    component: UserInput   },
        { path: 'condition',    component: BasicCondition   },
        { path: 'todoList',    component: TodoList   },
        { path: 'inputForm',    component: InputForm   },
        { path: 'treeView',    component: TreeView   },
        { path: 'showModal',    component: ShowModal   },
        { path: 'counter',    component: CounterNumber   },
        { path: 'temp',    component: ConverterTemperature   },
        { path: 'flight',    component: FlightBooker   }
    ]
  } ,
];


const router = createRouter({
  history: createWebHistory(),
  routes
})

// const router = VueRouter.createRouter({
//   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//   history: VueRouter.createWebHashHistory(),
//   routes, // short for `routes: routes`
// })


export default router