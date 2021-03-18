<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import todoStore, { todoKey } from "./store/todo/index";

export default defineComponent({
  setup() {
    provide(todoKey, todoStore);
  },
});
</script>
