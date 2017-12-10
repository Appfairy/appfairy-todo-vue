import Appfairy from 'appfairy';
import Vue from 'vue';
import animations from './animations.scss';
import TodoList from './component';
import styleSheet from './style.scss';
import viewHTML from './view.html';

class TodoListView extends Appfairy.View(HTMLElement) {
  initializeStyle(style) {
    style.innerHTML = styleSheet + animations;
  }

  initializeView(view) {
    view.innerHTML = viewHTML;
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
