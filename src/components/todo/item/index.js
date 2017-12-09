import Vue from 'vue';
import TodoItem from './component';
import TodoItemElement from './element';

TodoItemElement.implement({
  get options() {
    return {
      dependent: true,
      events: {
        stopPropagation: true,
      }
    };
  },

  render(el, data, callback) {
    new Vue({
      el,
      data,
      template: '<TodoItem />',
      components: { TodoItem },
      mounted: callback,
    });
  }
});
