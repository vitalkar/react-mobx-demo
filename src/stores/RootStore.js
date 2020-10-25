import TodoStore from '../stores/TodoStore';
import ThemeStore from '../stores/ThemeStore';

export default class RootStore {
    constructor() {
        this.todoStore = new TodoStore(this);
        this.themeStore = new ThemeStore(this);
    }
}