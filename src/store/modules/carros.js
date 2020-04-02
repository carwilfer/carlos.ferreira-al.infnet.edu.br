import axios from "axios";

const state = {
  carros:[]
};
const getters = {
  allCarros: state => state.carros,
  carroById: (state) => (id) => (state.carros.filter(carro => carro.id == id))[0],
};

const actions = {
  fetchCarros({ commit }) {
    axios.get(
        "./static/db.json/carros"
      ).then((response) => {
        commit('setCarros', response.data);
    });
  },
  deleteCarro({ commit }, id) {
    commit("removeCarro", id);
  },
  updateCarro({ commit }, updCarro) {
    commit("updateCarro", updCarro);
  },
};
const mutations = {
  setCarros: (state, carros) => (state.carros = carros),
  getCarro: (state, carro) => (state.carros = carro),
  newCarro: (state, carro) => state.carros.push(carro),
  removeCarro: (state, id) =>
    (state.carros = state.carros.filter(carro => carro.id !== id)),
    updateCarro: (state, updCarro) => {
      const index = state.carros.findIndex(carro => carro.id === updCarro.id)
      if (index !== -1) {
        state.carros.splice(index, 1, updCarro);
      }
    }
};

export default {
  state,
  actions,
  getters,
  mutations
};
