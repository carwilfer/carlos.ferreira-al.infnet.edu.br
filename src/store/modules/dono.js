import axios from "axios";

const state = {
    dono:[]
};
const getters = {
    allDono: state => state.dono,
    donoById: (state) => (id) => (state.dono.filter(d => d.id == id))[0],
};
const actions = {
    fetchDonos({ commit }) {
        commit("setDonos");
    },
      getDonos({ commit }) {
        axios.get(
            "https://5e870e8d781e48001676b6c7.mockapi.io/dono"
        ).then((response) => {
            commit('getDonos', response.data);
        } );
    },
    addDonos({ commit } , dono_add){
        const new_index = state.dono.length +1
        const response = {
        "userId":1,
        "id":  new_index,
        "name": dono_add.name,
        "username": dono_add.username,
        "email": dono_add.email,
        "street": dono_add.street,
        "completed": false,
        }
        commit('newDonos', response);
    },
    deleteDonos({ commit }, id) {
        commit("removeDonos", id);
      },
      updateDonos({ commit }, updDonos) {
        commit("updateDonos", updDonos);
      },
    
};
const mutations = {
    setDonos: (state) => state.dono,
    getDonos: (state, donos) => (state.dono = donos),
    newDonos: (state, donos) => state.dono.push(donos),
    removeDonos: (state, id) =>
        (state.dono = state.dono.filter(d => d.id !== id)),
    updateDonos: (state, updDonos) => {
        const index = state.dono.findIndex(d => d.id === updDonos.id)
        if (index !== -1){
            state.dono.splice(index, 1, updDonos);
        }
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
};

