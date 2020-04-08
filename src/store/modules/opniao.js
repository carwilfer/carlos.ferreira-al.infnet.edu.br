import axios from "axios";
const state = {
    opniao: []
  };
  const getters = {
    allOpniao: state => state.opniao,
    opnioesById: (state) => (id) => (state.opniao = state.opniao.filter(o => o.id == id))[0],
  };
  const actions = {
    fetchOpniao({ commit }){
      commit ('setOpniao')
    },
    getOpnioes({ commit }) {
      axios.get(
          "https://5e870e8d781e48001676b6c7.mockapi.io/opniao"
        ).then((response) => {
          commit('getOpnioes', response.data);
      });
    },
    addOpnioes({ commit }, opnioes_add) {
      const new_index =  state.opniao.length +1
      const response =  {
        "userId": 1,
        "id": new_index ,
        "imagem": opnioes_add.imagem,
        "veículo": opnioes_add.veículo,
        "name" : opnioes_add.name,
        "dono_ha": opnioes_add.dono_ha,
        "pros" : opnioes_add.pros,
        "contra" : opnioes_add.contra,
        "completed": false,
        }
        commit("newOpnioes", response);
    },
    deleteOpnioes({ commit }, id) {
      commit("removeOpnioes", id);
    },
    updateOpnioes({ commit }, updOpnioes){
      commit("updateOpnioes", updOpnioes);
    }
    
  };
  const mutations = {
    setOpniao: (state) => state.opniao,
    getOpnioes: (state, opnioes) => (state.opniao = opnioes),    
    newOpnioes: (state, opnioes) => state.opniao.push(opnioes),
    removeOpnioes: (state, id) =>
    (state.opniao = state.opniao.filter(o => o.id !== id)),
    updateOpnioes: (state, updOpnioes) => {
      const index = state.opniao.findIndex(t => t.id === updOpnioes.id)
      if (index !== -1) {
        state.opniao.splice(index, 1, updOpnioes);
        }
      }
  };
  
  export default {
    state,
    actions,
    getters,
    mutations
  };
  