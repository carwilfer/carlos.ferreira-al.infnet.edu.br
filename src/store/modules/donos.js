import axios from "axios";

const state = {
    donos:
      []
  };
  
  const getters = {
    allDonos: state => state.donos,
    donoById: (state) => (id) => (state.donos = state.donos.filter(dono => dono.id == id))[0],
  };
  const actions = {
    getDonos({ commit }) {
      axios.get(
          "./static/db.json/donos"
        ).then((response) => {
          commit('getDonos', response.data);
      });
  },
  addDono({ commit }, dono_add) {
      const new_index =  state.donos.length +1
      const response =  {
              "userId": 1,
              "id": new_index,
              "name": dono_add.name,
              "username": dono_add.username,
              "email": dono_add.email,
              "completed": false,
           }
      commit("newDono",response);
    },
      deleteDono({ commit }, id) {
      commit("removeDono", id);
    },
    updateDono({ commit }, updaDono) {
      commit("updateDono", updaDono);
    },
  };
  const mutations = {
    setDonos: (state) => state.donos,
    getDonos: (state, donos) => (state.donos = donos),
    newDono: (state, dono) => state.donos.push(dono),
    addDono: (state, new_dono) => state.donos.push(new_dono),
    removeDono: (state, id) =>
    (state.donos = state.donos.filter(t => t.id !== id)),
    updateDono: (state, updaDono) => {
      const index = state.donos.findIndex(t => t.id === updaDono.id)
      if (index !== -1) {
        state.donos.splice(index, 1, updaDono);
      }
    }
  };
  const mutations = {
    getDonos: (state, donos) => (state.donos = donos),
    adddono: (state, new_dono) => state.donos.push(new_dono),
  };
 
  export default {
    state,
    getters,
    actions,
    mutations,
  };
  