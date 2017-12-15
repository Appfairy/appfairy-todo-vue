<template>
  <af-todo-item-view>
    <span af-plug="check-box" v-on:click="toggleCheck">
      <span af-plug="check" v-show="checked" />
    </span>
    <span af-plug="todo" v-bind:style="todoStyle">{{ value }}</span>
    <span af-plug="rm-btn" v-on:click="removeTodo" />
  </af-todo-item-view>
</template>

<script>
export default {
  props: ['id', 'value'],
  data() {
    return {
      checked: false,
      todoStyle: {
        textDecoration: ''
      },
    };
  },
  methods: {
    toggleCheck() {
      this.checked = !this.checked;

      this.todoStyle = {
        textDecoration: this.checked ? 'line-through' : ''
      };
    },
    removeTodo() {
      this.$emit('remove-todo', this.id);
    }
  }
};
</script>
