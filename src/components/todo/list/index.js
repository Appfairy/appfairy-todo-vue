import Appfairy from 'appfairy';
import Vue from 'vue';
import { css, html } from '@/common/todo/list';
import animations from './animations.scss';
import TodoList from './component';

class TodoListView extends Appfairy.View(HTMLElement) {
  initializeStyle(style) {
    style.innerHTML = css + animations;
  }

  initializeView(view) {
    view.innerHTML = html;
  }
}

Appfairy.View.define('todo-list', TodoListView);

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
