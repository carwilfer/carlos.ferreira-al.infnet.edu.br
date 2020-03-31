const state = {
  todos: [
    {
      "userId": 1,
      "id": 1,
      "imagem": "https://img.olx.com.br/images/23/238002023978366.jpg",
      "veiculo": "A3",
      "Nome": "Douglas Brito",
      "Dono ha": "2 anos",
      "Prós" : "O carro é bastante economico, balança pouco, bom desempenha nas rotações",
      "Contra": "acabamento das portas e a central multimidia só funciona com Iphone"
    },
    {
      "userId": 1,
      "id": 2,
      "imagem": "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/m-series/m235i-xdrive-gran-coupe/bmw-f44-00-teaser-hd-cosy.jpg?imwidth=568",
      "veículo": "BMW i235",
      "Nome": "Carlos Ferreira",
      "Dono ha": "6 meses",
      "Prós" : "O carro é confortável, tração traseira, estabilidade, motor de 6 cilindros, bom desempenha nas rotações",
      "Contra": "preço das revisões"
    },
    {
      "userId": 1,
      "id": 3,
      "imagem": "https://suaoficinaonline.com.br/conteudo/content/images/2018/07/chrysler-pt-cruiser.jpg",
      "veículo": "PT Cruiser Touring",
      "Nome": "Alexandra Ferreira",
      "Dono ha": "3 anos",
      "Prós": "Possui um designer exclusivo, confortável, construido de acordo com a personalidade da pessoa",
      "Contra" : "Só tem 4 marchas, volante com pouco jogo e fica ruim pra estacionar, ruim de manutenção e consumo elevado na cidade",
    },]
};
const getters = {
  allOpnioes: state => state.opnioes,
};
const actions = {
  fetchOpnioes({ commit }) {
      commit("setOpnioes");
  },
   addOpniao({ commit }, opniao_add) {
    const new_index =  state.opnioes.length +1
    const response =  {
            "userId": 1,
            "id": new_index ,
            "imagem": opniao_add.imagem,
            "veículo": opniao_add.marca,
            "Nome Dono": opniao_add.nomeDono,
            "Dono ha": opniao_add.tempoDono,
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
    (state.opniao = state.opniao.filter(t => t.id !== id)),
  updateOpniao: (state, upsOpniao) => {
      const index = state.opniao.findIndex(t => t.id === upsOpniao.id)
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
