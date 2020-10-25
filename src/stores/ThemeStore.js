import { makeObservable, observable, action } from "mobx"

const themes = {
    dark: {
        primary: '#b7d7e8',
        secondary: '#4040a1',
    },
    light: {
        primary: '#454140',
        secondary: '#bd5734',
    }
}

export default class ThemeStore {
    currTheme = themes.light;
    currType = 'light';
    constructor(rootStore) {
        makeObservable(this, {
            currTheme: observable,
            currType: observable,
            toggleTheme: action,
        });
        this.rootStore = rootStore;
    }

    get theme() {
        return this.currTheme;
    }

    set theme(value) {
        this.currTheme = value;
    }

    get type() {
        return this.currType;
    }

    set type(value) {
        this.currType = value;
    }

    toggleTheme() {
        this.type = (this.type  === 'light') ? 'dark' : 'light';
        this.theme = themes[this.type];
    }
}