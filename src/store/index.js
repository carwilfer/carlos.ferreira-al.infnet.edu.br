import Vuex from "vuex";
import Vue from "vue";
import carros from "./modules/carros";
import donos from "./modules/donos";
import opnioes from "./modules/opnioes";

Vue.use(Vuex);

export default new Vuex.Store ({
    modules: {
        carros,
        donos,
        opnioes
    }
});