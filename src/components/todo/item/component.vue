<template>
  <af_view-todo-item>
    <check-box v-on:click="toggleCheck">
      <check v-show="checked"></check>
    </check-box>

    <todo v-bind:style="todoStyle">{{ todo }}</todo>

    <rm-btn v-on:click="removeTodo"></rm-btn>
  </af_view-todo-item>
</template>

<script>
  export default {
    props: ['todo'],
    data() {
      return {
        checked: false
      }
    },
    methods: {
      toggleCheck() {
        this.checked = !this.checked;
      },
      removeTodo() {
        this.$emit('remove-todo');
      }
    }
  }
</script>
