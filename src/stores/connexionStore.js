import { defineStore } from "pinia";

export const connexionStore= defineStore({
    id: 'connection',
    state: () => ({
        loggedIn: false
    }),
    actions: {
        logModify(res) {
            this.loggedIn = res;
        },
        login() {
            this.loggedIn = true;
        },
        logout() {
            this.loggedIn = false;
        }
    }
});

