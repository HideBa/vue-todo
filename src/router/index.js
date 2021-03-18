import { createRouter, createWebHistory } from "vue-router";
import Todos from "@/views/Todos.vue";
import AddTodo from "@/views/AddTodo.vue";

const routes = [
  {
    path: "/",
    name: "Todos",
    component: Todos,
  },
  {
    path: "/new",
    name: "AddTodo",
    component: AddTodo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
