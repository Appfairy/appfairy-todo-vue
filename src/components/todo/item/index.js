import '@/common/todo/item';

import Appfairy from 'appfairy';
import Vue from 'vue';
import TodoItem from './component';

class TodoItemElement extends Appfairy.Element(HTMLElement) {
  get options() {
    return {
      dependent: true
    };
  }

  render(el, data) {
    this.vm = this.vm || new Vue({
      el,
      components: { TodoItem },
      template: `
        <TodoItem :id="id"
                  :value="value"
                  v-on:remove-todo="removeTodo" />
      `,
      data: {
        id: 0,
        value: '',
      },
      methods: {
        removeTodo: () => {
          this.scope.removeTodo(this.vm.id);
        }
      }
    });

    Object.assign(this.vm, data);
  }
}

Appfairy.Element.define('todo-item', TodoItemElement);
