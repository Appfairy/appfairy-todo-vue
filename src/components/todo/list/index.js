import '@/common/todo/list';

import Appfairy from 'appfairy';
import Vue from 'vue';
import TodoList from './component';

class TodoListElement extends Appfairy.Element(HTMLElement) {
  render(el) {
    if (this.created) return;

    new Vue({
      el,
      components: { TodoList },
      template: '<TodoList />',
    });
  }
}

Appfairy.Element.define('todo-list', TodoListElement);
