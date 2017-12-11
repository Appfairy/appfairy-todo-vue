<template>
  <af-todo-list-view>
    <span af-plug="add-btn" v-on:click="onAddBtnClick" />
    <span af-plug="todo-input" v-on:keydown="onTodoInputKeyDown" ref="todoInput" />
    <transition-group tag="ul" af-plug="todos" name="todo" duration="500">
      <li v-for="todo of todos"
          af-scope="todo"
          :key="todo.id"
          :data-id="todo.id"
          :data-value="todo.value" />
    </transition-group>
  </af-todo-list-view>
</template>

<script>
  let globalTodoId = 0;

  export default {
    data() {
      return {
        todos: []
      };
    },
    computed: {
      todoInput() {
        return this.$refs.todoInput.target;
      },
    },
    methods: {
      submitTodoInput() {
        const value = this.todoInput.value;

        if (!value) return;

        this.todoInput.value = '';
        this.addTodo(value);
      },
      addTodo(todo) {
        this.todos.push({
          id: globalTodoId++,
          value: todo,
        });
      },
      removeTodo(id) {
        const todo = this.todos.find(todo => todo.id == id);

        if (!todo) return;

        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
      },
      onAddBtnClick() {
        this.submitTodoInput();
      },
      onTodoInputKeyDown(e) {
        if (e.key != 'Enter') {
          return;
        }

        this.submitTodoInput();
      }
    }
  };
</script>
