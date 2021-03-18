import { reactive, readonly } from "vue";

const sampleTodos = [
  {
    id: "hogehogehoge",
    title: "hoge",
    status: "done",
  },
  {
    id: "fugafugafuga",
    title: "hfugae",
    status: "done",
  },
  {
    id: "foofoofoo",
    title: "fugafuga",
    status: "working",
  },
];

const todoState = reactive({ todos: sampleTodos });

const createTodo = (todo) => {
  return {
    id: Math.random().toString(32).substring(2),
    title: todo.title,
    status: todo.status,
  };
};

const getTodos = () => {
  return readonly(todoState.todos);
};

const getTodosByID = (id) => {
  return todoState.todos.filter((t) => t.id === id);
};

const addTodo = (todo) => {
  todoState.todos.push(createTodo(todo));
};

const updateTodo = (todo) => {
  const index = todoState.todos.findIndex((t) => t.id === todo.id);
  if (index > -1) {
    todoState.todos[index] = todo;
    return;
  }
  return;
};

const deleteTodo = (id) => {
  todoState.todos = todoState.todos.filter((t) => t.id === id);
};

export default {
  createTodo,
  getTodos,
  getTodosByID,
  addTodo,
  updateTodo,
  deleteTodo,
};

export const todoKey = Symbol("todo");
