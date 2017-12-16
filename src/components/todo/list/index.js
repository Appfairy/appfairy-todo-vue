import '@/common/todo/list';

import Appfairy from 'appfairy';
import Vue from 'vue';
import TodoList from './component';

class TodoListElement extends Appfairy.Element(HTMLElement) {
  get component() {
    return this.vm.$refs.component;
  }

  get childScopes() {
    return {
      todo: {
        removeTodo: (id) => {
          this.component.removeTodo(id);
        }
      }
    };
  }

  render(el) {
    if (this.created) return;

    this.vm = new Vue({
      el,
      components: { TodoList },
      template: '<TodoList ref="component" />',
    });
  }
}

Appfairy.Element.define('todo-list', TodoListElement);
