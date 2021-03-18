<template>
  <div class="card">
    <div>{{ todo.title }}</div>
    <div :class="todo.status">{{ todo.status }}</div>
    <button @click="clickDelete">delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  emits: ["clickDelete"],
  setup(props, { emit }) {
    const clickDelete = () => {
      emit("clickDelete", props.todo.id);
    };
    return {
      clickDelete,
    };
  },
};
</script>

<style scoped>
.card {
  background: gray;
  display: flex;
  direction: column;
}
.waiting {
  color: red;
}
.done {
  color: green;
}
.working {
  color: black;
}
</style>
