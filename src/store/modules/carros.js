import axios from "axios";
const state = {
  carros:[]
};
const getters = {
  allCarros: state => state.carros,
  carrosById: (state) => (id) => (state.carros = state.carros.filter(c => c.id == id))[0]
};

const actions = {
  fetchCarros({ commit }) {
    commit("setCarros");
  },
  getCarros({ commit }) {
    axios.get(
      "https://5e870e8d781e48001676b6c7.mockapi.io/carros"
      ).then((response) => {
        commit('getCarros', response.data);
      });
    },
    addCarro({ commit }, carro_add) {
      const new_index =  state.carros.length +1
      const response =  {
              "id": 1,
              "name": new_index ,
              "marca": carro_add.marca,
              "ano_modelo":carro_add.ano_modelo,
              "valor": carro_add.valor,
              "imagem": carro_add.imagem,
            }
      commit("newCarro",response);
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
  getCarros: (state, carros) => (state.carros = carros),
  removeCarros: (state, id) =>
  (state.carros = state.carros.filter(c => c.id !== id)),  
};

export default {
  state,
  actions,
  getters,
  mutations,
};
