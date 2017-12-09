import Vue from 'vue';
import TodoList from './component';
import TodoListElement from './element';

TodoListElement.implement({
  get options() {
    return {
      events: {
        stopPropagation: true,
      }
    };
  },

  render(el, data, callback) {
    new Vue({
      el,
      data,
      template: '<TodoList />',
      components: { TodoList },
      mounted: callback,
    });
  }
});
