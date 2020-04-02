import axios from "axios";

const state = {
  opnioes: []
};
const getters = {
  allOpnioes: state => state.opnioes,
  opniaoById: (state) => (id) => (state.opnioes.filter(t => opniao.id == id))[0],

};
const actions = {
  fetchOpnioes({ commit }) {
    axios.get(
      "./static/db.json/opnioes"
    ).then((response) => {
      commit("setOpnioes", response.data);
    });
  },
   addOpniao({ commit }, opniao_add) {
    const new_index =  state.opnioes.length +1
    const response =  {
            "userId": 1,
            "id": new_index ,
            "imagem": opnioes_add.imagem,
            "veículo": opniao_add.veiculo,
            "Nome Dono": opniao_add.name,
            "Dono ha": opniao_add.dono_ha,
            "Prós" : opniao_add.pros,
            "Contra": opniao_add.contra,
            "completed": false,
          }
    commit("newOpniao",response);
  },
  deleteOpniao({ commit }, id) {
    commit("removeOpniao", id);
  },
  updateOpniao({ commit }, upsOpniao) {
    commit("updateOpniao", upsOpniao);
  },
  
};
const mutations = {
  setOpnioes: (state) => state.opniao,
  getOpniao: (state, opniao) => (state.opniao = opniao),
  newOpniao: (state, opniao) => state.opniao.push(opniao),
  removeOpniao: (state, id) =>
    (state.opniao = state.opniao.filter(opniao => opniao.id !== id)),
  updateOpniao: (state, upsOpniao) => {
      const index = state.opniao.findIndex(opniao => opniao.id === upsOpniao.id)
      if (index !== -1) {
        state.opniao.splice(index, 1, upsOpniao);
        }
      }
};

export default {
  state,
  actions,
  getters,
  mutations
};
