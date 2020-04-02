import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
 
Vue.use(Vuex);
 
export const store = new Vuex.Store({
    state: {
        db: {}
    },
    mutations: {
        SET_STORE: (state, db) => {
            state.db = db;
        }
    },
    actions: {
        INICIALIZAR_STORE: ({ commit }) => {
            axios.get('static/db.json')
                .then((response) => {
                    console.log(response.data.db);
                    commit('SET_STORE', response.data.db);
                });
        }
    },
    getters: {
        db: state => state.filmes
    }
});