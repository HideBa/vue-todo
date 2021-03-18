<template>
  <h2>Todos</h2>
  <div v-for="todo in todoStore" :key="todo.id">
    <div>{{ todo.title }}</div>
  </div>
</template>

<script>
import { defineComponent, inject } from "vue";
import { todoKey } from "@/store/todo";

export default defineComponent({
  setup() {
    const todoStore = inject(todoKey);
    if (!todoStore) throw new Error("todo store is not provided!!!");
    console.log(todoStore);
    return {
      todoStore,
    };
  },
});
</script>
