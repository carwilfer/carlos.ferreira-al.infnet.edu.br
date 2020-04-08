import Vuex from "vuex";
import Vue from "vue";
import carros from "./modules/carros";
import dono from "./modules/dono";
import opniao from "./modules/opniao";


Vue.use(Vuex);

export default new Vuex.Store ({
    modules: {
        carros,
        dono,
        opniao,

    }
});