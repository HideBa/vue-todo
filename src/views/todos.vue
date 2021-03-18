<template>
  <h2>Todos</h2>
  <!-- <div v-for="todo in todoStore.getTodos()" :key="todo.id">
    <div class="todo-wrapper">
      <div>{{ todo.title }}</div>
      <div>{{ todo.status }}</div>
    </div>
  </div> -->
  <todo-item
    v-for="todo in todoStore.getTodos()"
    :key="todo.id"
    :todo="todo"
    @click-delete="clickDelete"
  />
  <router-link to="/new">new</router-link>
</template>

<style scoped>
.todo-wrapper {
  display: flex;
  gap: 10px;
}
</style>

<script>
import { defineComponent, inject } from "vue";
import { todoKey } from "@/store/todo";
import TodoItem from "./TodoItem.vue";

export default defineComponent({
  components: {
    TodoItem,
  },
  setup() {
    const todoStore = inject(todoKey);
    if (!todoStore) throw new Error("todo store is not provided!!!");

    const clickDelete = (id) => {
      todoStore.deleteTodo(id);
    };

    return {
      todoStore,
      clickDelete,
    };
  },
});
</script>
