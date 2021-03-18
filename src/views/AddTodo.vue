<template>
  <form @submit.prevent="onSubmit">
    <input type="text" placeholder="title" v-model="data.title" />
    <select id="status" v-model="data.staus">
      <option value="done">done</option>
      <option value="working">working</option>
      <option value="waiting">waiting</option>
    </select>
    <button type="submit" @click="onSubmit">add</button>
  </form>
</template>

<script>
import { inject, reactive } from "vue";
import { todoKey } from "../store/todo";
import { useRouter } from "vue-router";

export default {
  setup() {
    const todoStore = inject(todoKey);
    if (!todoStore) throw new Error("store is not provided");

    const router = useRouter();
    const data = reactive({
      title: "",
      status: "",
    });

    const onSubmit = () => {
      const { title, status } = data;
      todoStore.addTodo({
        title,
        status,
      });
      router.push("/");
    };
    return {
      data,
      onSubmit,
    };
  },
};
</script>
