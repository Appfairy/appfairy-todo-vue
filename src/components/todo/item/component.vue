<template>
  <af_view-todo-item>
    <check-box v-on:click="toggleCheck">
      <check v-show="checked" />
    </check-box>

    <todo v-bind:style="todoStyle">{{ value }}</todo>

    <rm-btn v-on:click="removeTodo" />
  </af_view-todo-item>
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
  }
</script>
