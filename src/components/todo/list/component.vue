<template>
  <af_view-todo-list>
    <add-btn v-on:click="onAddBtnClick" />
    <todo-input v-on:keydown="onTodoInputKeyDown"
                ref="todoInput" />

    <transition-group name="todo" tag="todos">
      <li v-for="todo of todos"
          af-scope="todo"
          :key="todo.id"
          :data-id="todo.id"
          :data-value="todo.value" />
    </transition-group>
  </af_view-todo-list>
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

<style scoped>
  .todo-enter-active, .todo-leave-active {
    transition: all 1s;
  }

  .todo-enter, .todo-leave-to {
    opacity: 0;
    transform: translateX(200px);
  }
</style>
