import { makeObservable, observable, computed, action } from "mobx";

export default class TodoStore {
  todoList = [];
  constructor(rootStore) {
      this.rootStore = rootStore;
      makeObservable(this, {
          todoList: observable,
          total: computed,
          completedTodos: computed,
          add: action,
          remove: action,
      })
    }

    get todos() {
        return this.todoList;
    }

    set todos(value) {
        this.todoList = value;
    }

    get total() {
        return this.todoList.length;
    }

    get completedTodos() {
      return this.todoList.filter(todo => todo.completed).length;
    }
    
    add(value) {
      const todo = {
        id: Date.now(),
        content: value,
        completed: false
      }
      this.todoList.push(todo);
    }
    
    remove(id) {
      this.todoList = this.todoList.filter(todo => id !== todo.id);
    }
}
