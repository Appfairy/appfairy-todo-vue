<template>
  <af_view-todo-list>
    <add-btn v-on:click="onAddBtnClick"></add-btn>
    <todo-input v-on:keydown="onTodoInputKeyDown"
                ref="todoInput"></todo-input>

    <!-- TODO: Add transitions -->
    <todo v-for="todo of todos"
          af-scope="todo"
          v-on:remove-todo="removeTodo(todo.id)"
          :key="todo.id"
          :data-id="todo.id"
          :data-todo="todo.value"></todo>
  </af_view-todo-list>
</template>

<script>
  export default {
    data() {
      return {
        todos: []
      }
    },
    methods: {
      get todoInput() {
        return this.$refs.todoInput;
      },
      submitTodoInput() {
        const value = this.todoInput.value;

        if (!value) return;

        this.todoInput.value = '';
        this.addTodo(value);
      },
      addTodo(todo) {
        this.todos.push({
          id: this._currId++,
          value: todo,
        });

        this.forceUpdate();
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
  }
</script>
