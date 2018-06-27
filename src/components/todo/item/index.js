import '@/common/todo/item';

import Appfairy from 'appfairy';
import Vue from 'vue';
import TodoItem from './component';

class TodoItemElement extends Appfairy.Element(HTMLElement) {
  render(el, data) {
    this.vm = this.vm || new Vue({
      el,
      components: { TodoItem },
      template: `
        <TodoItem :todo="todo"
                  v-on:remove-todo="removeTodo" />
      `,
      data: {
        todo: {}
      },
      methods: {
        removeTodo: () => {
          data.removeTodo(this.vm.id);
        }
      }
    });

    Object.assign(this.vm, data);
  }
}

Appfairy.Element.define('todo-item', TodoItemElement);
