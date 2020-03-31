const state = {
  carros:[
    {id: 1, referencia: "mar\u00e7o de 2020", fipe_codigo: "060001-6", valor: "46817", name: "MARRU\u00c1 2.8 12V 132cv TDI Diesel", key: "marrua-2007", time: "0.03000000000002956", ano_modelo: "2007", combustivel: "Diesel",  marca: "Agrale", imagem:"https://www.autoo.com.br/fotos/2015/12/1280_960/agrale_Marru%C3%A1_2015_1_9122015_139_1280_960.jpg"},
    {id: 2, fipe_codigo: "060003-2", combustivel: "Diesel", marca: "Agrale", ano_modelo: "2015", valor: "104417", key: "marrua-2015", veiculo: "MARRU\u00c1 AM 100 2.8  CS TDI Diesel",  referencia: "mar\u00e7o de 2020", name: "MARRU\u00c1 AM 100 2.8  CS TDI Diesel", time: 0.06999999999999318, imagem:"https://img.olx.com.br/images/11/112019019321808.jpg"},
    {id: 3, referencia: "mar\u00e7o de 2020", fipe_codigo: "006009-7", valor: "12841", name: "145 Elegant 1.7/1.8 16V", key: "145-1999", time: 0.01999999999998181, ano_modelo: "1999", combustivel: "Gasolina",  marca: "Alfa Romeo", imagem:"https://heycar.com.br/images/2017/Marco/Alfa-Romeo-145-Elegant-2.0-1997.jpg"},
    {id: 4, fipe_codigo: "006015-1", combustivel: "Gasolina", marca: "Alfa Romeo", ano_modelo: "2003", valor: "48908", key: "156-2003", veiculo: "156 2.5 V6 24V 190cv 4p Aut.", referencia: "mar\u00e7o de 2020", name: "156 2.5 V6 24V 190cv 4p Aut.", time: 0.01999999999998181, imagem:"https://media.autoweek.nl/m/m1by0s7b4j4q_800.jpg"},
    {id: 5, fipe_codigo: "006016-0", combustivel: "Gasolina", marca: "Alfa Romeo", ano_modelo: "2004", valor: "36336", key: "156-2004", veiculo: "156 Sport Wagon 2.5 V6 24V 4p Aut.",  referencia: "mar\u00e7o de 2020", name: "156 Sport Wagon 2.5 V6 24V 4p Aut.", time: 0.10000000000002274, imagem:"https://www.autodata1.com/media/alfa-romeo/pics/alfa-romeo-156-sport-wagon-ii-[42].jpg"},
    {id: 6, fipe_codigo: "006011-9", combustivel: "Gasolina", marca: "Alfa Romeo", ano_modelo: "2003", valor: "45420", key: "166-2003", veiculo: "166 3.0 V6 24V", referencia: "mar\u00e7o de 2020", name: "166 3.0 V6 24V", time: 0.009999999999990905, imagem:"https://www.cars-data.com/pictures/alfa-romeo/alfa-romeo-166_30_1.jpg"},
    {id: 7, referencia: "mar\u00e7o de 2020", fipe_codigo: "006017-8", valor: "52016", name: "147 2.0 16V 148cv 4p Semi-Aut.", key: "147-2005", time: 0.01999999999998181, ano_modelo: "2005", combustivel: "Gasolina", marca: "Alfa Romeo", imagem:"https://lh3.googleusercontent.com/proxy/lniEqXzTCjXQtm0yvbVzES6LrKQxBkobVxJDneGo4m4t9wsnwzazeIneqPxGxE436U5ShNdlgePg-O1gkw"},
    {id: 8, fipe_codigo: "008003-9", combustivel: "Gasolina", marca: "Audi", ano_modelo: "1999", valor: "42286", key: "80-1999", veiculo: "80 2.8 Cabriolet",  referencia: "mar\u00e7o de 2020", name: "80 2.8 Cabriolet", time: 0.0, imagem:"https://cloud.leparking.fr/2018/11/10/07/55/audi-80-cabriolet-audi-cabriolet-2-8-v6-automaat-elektrisch-dak-lange-apk-n-noir_6536692892.jpg"},
    {id: 9, fipe_codigo: "008185-0", combustivel: "Gasolina", marca: "Audi", ano_modelo: "2016", valor: "83680", key: "a3-2016", veiculo: "A3 Sportback 1.8 16V TFSI S-tronic 5p", referencia: "mar\u00e7o de 2020", name: "A3 Sportback 1.8 16V TFSI S-tronic 5p", time: 0.009999999999990905, imagem:"https://img.olx.com.br/images/23/238002023978366.jpg"},
    {id: 10, fipe_codigo: "008245-7", combustivel: "Gasolina", marca: "Audi", ano_modelo: "2019", valor: "185171", key: "a4-2019", veiculo: "A4 Prestige Plus 2.0 TFSI 190cv S tronic",  referencia: "mar\u00e7o de 2020", name: "A4 Prestige Plus 2.0 TFSI 190cv S tronic", time: 0.040000000000020464, imagem:"https://4.bp.blogspot.com/-bo_OX1btRtU/WrPC2rVVNKI/AAAAAAABDDM/IRaacLMEygMJGHTIrDu-Rjvl-5Ov1v_QQCLcBGAs/s1600/Audi-A4-2019%2B%25285%2529.jpg"},
    {id: 11, fipe_codigo: "008207-4", combustivel: "Gasolina", marca: "Audi", ano_modelo: "2017", valor: "121745", key: "a4-2017", veiculo: "A4 Launch Edition 2.0 TFSI 190cv S troni",  referencia: "mar\u00e7o de 2020", name: "A4 Launch Edition 2.0 TFSI 190cv S troni", time: 0.040000000000020464, imagem:"https://www.audi.pt/content/dam/nemo/models/a4/a4-limousine/my-2020/1920x1080-inline-media-gallery/1920x1080_AA4_L_191004.jpg"},
    {id: 12, fipe_codigo: "008206-6", combustivel: "Gasolina", marca: "Audi", ano_modelo: "2016", valor: "200385", key: "a7-2016", veiculo: "A7 Sportback 2.0 TFSI S Tronic",  referencia: "mar\u00e7o de 2020", name: "A7 Sportback 2.0 TFSI S Tronic", time: 0.03999999999996362, imagem:"https://i.pinimg.com/originals/70/b3/04/70b30441169412109651996e13aa87bf.jpg"},
    {id: 13, fipe_codigo: "008179-5", combustivel: "Gasolina", marca: "Audi", ano_modelo: "2014", valor: "162154", key: "a6-2014", veiculo: "A6 3.0 Avant.TFSI V6 Quattro S tronic 5p",  referencia: "mar\u00e7o de 2020", name: "A6 3.0 Avant.TFSI V6 Quattro S tronic 5p", time: 0.03000000000002956, imagem:"https://combustivel.app/imgs/t650/consumo-a6-avant-allroad-3-0-v6-tfsi-quattro-2.jpg"},
    {id: 14, fipe_codigo: "008166-3", combustivel: "Gasolina", marca: "Audi", ano_modelo: "2015", valor: "231134", key: "s5-2015", veiculo: "S5 Sportback 3.0 TFSI Quattro Stronic",  referencia: "mar\u00e7o de 2020", name: "S5 Sportback 3.0 TFSI Quattro Stronic", time: 0.01999999999998181, imagem:"https://abrilquatrorodas.files.wordpress.com/2017/08/audi-q5-1-e1501777739472.jpg?quality=70&strip=info&w=1254&h=864"},
    {id: 15, fipe_codigo: "008157-4", combustivel: "Gasolina", marca: "Audi", ano_modelo: "2018", valor: "284972", key: "rs3-2018", veiculo: "RS3 Sportback 2.5 TFSI Quattro S-tronic",  referencia: "mar\u00e7o de 2020", name: "RS3 Sportback 2.5 TFSI Quattro S-tronic", time: 0.03000000000002956, imagem:"https://abrilquatrorodas.files.wordpress.com/2018/01/audi_rs_3_sportback_104.jpeg?quality=70&strip=info"},
    {id: 16, referencia: "mar\u00e7o de 2020", fipe_codigo: "008249-0", name: "A5 Sportback S-Line 2.0 TFSI S-tronic", combustivel: "Gasolina", marca: "Audi", ano_modelo: "2019", valor: "219994", key: "a5-2019", time: "0.0", veiculo: "A5 Sportback S-Line 2.0 TFSI S-tronic",  imagem:"https://netrinoimages.s3.eu-west-2.amazonaws.com/2005/05/06/1656/262820/audi_a5_sportback_sline_2020_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2759701_o.jpg"},
    {id: 17, fipe_codigo: "008156-6", combustivel: "Gasolina", marca: "Audi", ano_modelo: "2017", valor: "693595", key: "a8-2017", veiculo: "A8 6.3 W12 48V Quattro Tiptronic",  referencia: "mar\u00e7o de 2020", name: "A8 6.3 W12 48V Quattro Tiptronic", time: 0.01999999999998181, imagem:"https://cdn.salaodocarro.com.br/_upload/carros/audi/a8.jpg"},
    {id: 18, fipe_codigo: "008198-1", combustivel: "Gasolina", marca: "Audi", ano_modelo: "2017", valor: "692756", key: "s8-2017", veiculo: "S8 4.0 TFSI Quattro Tiptronic 4p",  referencia: "mar\u00e7o de 2020", name: "S8 4.0 TFSI Quattro Tiptronic 4p", time: 0.009999999999990905, imagem:"https://bestcars.uol.com.br/bc/wp-content/uploads/2019/07/Audi-S8-01.jpg"},
    {id: 19, fipe_codigo: "008186-8", combustivel: "Gasolina", marca: "Audi", ano_modelo: "2017", valor: "167937", key: "q5-2017", veiculo: "Q5 2.0 16V TFSI 225cv Quattro Tiptronic",  referencia: "mar\u00e7o de 2020", name: "Q5 2.0 16V TFSI 225cv Quattro Tiptronic", time: 0.009999999999990905, imagem:"https://squir.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/u/audi_ttrs_roadster_2020_0000.jpg"},
    {id: 20, fipe_codigo: "008213-9", combustivel: "Diesel", marca: "Audi", ano_modelo: "2019", valor: "390865", key: "q7-2019", veiculo: "Q7 3.0 V6 TDI Quat.Tip. 5p Die./Perfor.",  referencia: "mar\u00e7o de 2020", name: "Q7 3.0 V6 TDI Quat.Tip. 5p Die./Perfor.", time: 0.029999999999972715, imagem:"https://images.summitmedia-digital.com/topgear/images/2016/07/22/audi_q7_feature.jpg"},
    {id: 21, fipe_codigo: "008155-8", combustivel: "Gasolina", marca: "Audi", ano_modelo: "2016", valor: "693372", key: "r8-2016", veiculo: "R8 Spyder 5.2 Quattro R-tronic/S-tronic",  referencia: "mar\u00e7o de 2020", name: "R8 Spyder 5.2 Quattro R-tronic/S-tronic", time: 0.01999999999998181, imagem:"https://combustivel.app/imgs/meta/consumo-r8-5-2-v10-plus-quattro-s-tronic-1.jpg"},
    {id: 22, fipe_codigo: "009193-6", combustivel: "Gasolina", marca: "BMW", ano_modelo: "2016", valor: "163331", key: "m-2016", veiculo: "M 235i Coupe 3.0 24V 326cv",  referencia: "mar\u00e7o de 2020", name: "M 235i Coupe 3.0 24V 326cv", time: 0.040000000000020464, imagem:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/m-series/m235i-xdrive-gran-coupe/bmw-f44-00-teaser-hd-cosy.jpg?imwidth=568"},
    {id: 23, fipe_codigo: "009246-0", combustivel: "Gasolina", marca: "BMW", ano_modelo: "2020", valor: "723063", key: "m850i-2020", veiculo: "M850i XDrive Coup\u00e9 4.4 V8 530cv Aut.",  referencia: "mar\u00e7o de 2020", name: "M850i XDrive Coup\u00e9 4.4 V8 530cv Aut.", time: 0.01999999999998181, imagem:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/8-series/convertible/2018/bmw-8-series-convertible-00-teaser-hd-cosy.jpg?imwidth=568"},
    {id: 24, fipe_codigo: "009224-0", combustivel: "Gasolina", marca: "BMW", ano_modelo: "2020", valor: "273760", key: "430i-2020", veiculo: "430i Cabriolet Sport 2.0 TB 252cv 2p",  referencia: "mar\u00e7o de 2020", name: "430i Cabriolet Sport 2.0 TB 252cv 2p", time: 0.06999999999999318, imagem:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/4-series/convertible/2019/bmw-4series-convertible-00-teaser-hd-cosy.jpg?imwidth=568"},
    {id: 25, fipe_codigo: "009239-8", combustivel: "Gasolina", marca: "BMW", ano_modelo: "2020", valor: "193937", key: "x1-2020", veiculo: "X1 SDRIVE 20i X-Line 2.0 TB Active Flex",  referencia: "mar\u00e7o de 2020", name: "X1 SDRIVE 20i X-Line 2.0 TB Active Flex", time: 0.01999999999998181, imagem:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/x-series/x1/2019/bmw-x-series-x1-00-teaser-hd-cosy-2.jpg?imwidth=568"},
    {id: 26, fipe_codigo: "009204-5", combustivel: "Gasolina", marca: "BMW", ano_modelo: "2016", valor: "366560", key: "x6-2016", veiculo: "X6 XDRIVE 50i M Sport 4.4 Bi-Turbo", referencia: "mar\u00e7o de 2020", name: "X6 XDRIVE 50i M Sport 4.4 Bi-Turbo", time: 0.03999999999996362, imagem:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/x-series/x6/2019/bmw-x-series-x6-modelfinder-cosy.jpg?imwidth=568"},
    {id: 27, fipe_codigo: "009249-5", combustivel: "Gasolina", marca: "BMW", ano_modelo: "2020", valor: "356140", key: "z4-2020", veiculo: "Z4 M40i 3.0 340cv Aut.",  referencia: "mar\u00e7o de 2020", name: "Z4 M40i 3.0 340cv Aut.", time: 0.040000000000020464, imagem:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/z-series/roadster/2018/bmw-z4-teaser-cosy.jpg?imwidth=568"},
    {id: 28, fipe_codigo: "009250-9", combustivel: "Gasolina", marca: "BMW", ano_modelo: "2020", valor: "569437", key: "x7-2020", veiculo: "X7 XDRIVE 50i M Sport 4.4 V8 Bi-TB Aut.",  referencia: "mar\u00e7o de 2020", name: "X7 XDRIVE 50i M Sport 4.4 V8 Bi-TB Aut.", time: 0.009999999999990905, imagem:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/x-series/x7/2018/bmw-x-series-x7-00-teaser-hd-cosy_v2.jpg?imwidth=568"},
    {id: 29, referencia: "mar\u00e7o de 2020", fipe_codigo: "009246-0", name: "M850i XDrive Coup\u00e9 4.4 V8 530cv Aut.", combustivel: "Gasolina", marca: "BMW", ano_modelo: "2020", valor: "723063", key: "m850i-2020", time: 0.0, veiculo: "M850i XDrive Coup\u00e9 4.4 V8 530cv Aut.",  imagem:"https://cdn.motor1.com/images/mgl/YReky/s1/bmw-serie-8-2019.jpg"},
    {id: 30, fipe_codigo: "041002-0", combustivel: "Gasolina", marca: "Cadillac", ano_modelo: "1996", valor: "61390", key: "seville-1996", veiculo: "Seville 4.6",  referencia: "mar\u00e7o de 2020", name: "Seville 4.6", time: 0.009999999999990905, imagem:"https://i.pinimg.com/originals/01/a4/51/01a451f3119c3af0dedd9f37dfa3b665.jpg"},
    {id: 31, referencia: "mar\u00e7o de 2020", fipe_codigo: "010033-1", name: "300 C 3.6 V6 Aut.", combustivel: "Gasolina", marca: "Chrysler", ano_modelo: "2016", valor: "154102", key: "300-2016", "time": 0.0, veiculo: "300 C 3.6 V6 Aut.",  imagem:"https://i1.wp.com/www.carroesporteclube.com.br/wp-content/uploads/2017/03/Chrysler-300C_SRT8-2005.jpg?resize=800%2C445"},
    {id: 32, referencia: "mar\u00e7o de 2020", fipe_codigo: "010031-5", name: "PT Cruiser Touring DEC. EDITION 2.4 16V", combustivel: "Gasolina", marca: "Chrysler", ano_modelo: "2010", valor: "30882", key: "pt-2010", time: 0.0, veiculo: "PT Cruiser Touring DEC. EDITION 2.4 16V",  imagem:"https://suaoficinaonline.com.br/conteudo/content/images/2018/07/chrysler-pt-cruiser.jpg"},
    {id: 33, referencia: "mar\u00e7o de 2020", fipe_codigo: "010032-3", name: "TOWN & COUNTRY Touring 3.6 V6 Aut.", combustivel: "Gasolina", marca: "Chrysler", ano_modelo: "2014", valor: "132459", key: "town-2014", time: 0.009999999999990905, veiculo: "TOWN & COUNTRY Touring 3.6 V6 Aut.", imagem:"https://revistaautoesporte.globo.com/Revista/Autoesporte/foto/0,,69758668.jpg"},
  ]
};
const getters = {
  allCarros: state => state.carros
};

const actions = {
  fetchCarros({ commit }) {
    commit('setCarros');
  },
  addCarro({ commit }, carro_add) {
    const new_index =  state.carros.length +1
    const response =  {
      "donoId": 1,
      "id": new_index,
      "marca": carro_add.marca,
      "veiculo": carro_add.veiculo,
      "ano_modelo": carro_add.ano_modelo,
      "description" : carro_add.name,
      "valor": carro_add.valor,
      "imagem": carro_add.imagem,
    }
    commit("newCarro",response);
  },
  deleteCarro({ commit }, id) {
    commit("removeCarro", id);
  },
};
const mutations = {
  setCarros: (state, carros) => (state.carros = carros),
  newCarro: (state, carro) => state.carros.push(carro),
  removeCarro: (state, id) =>
    (state.carros = state.carros.filter(t => t.id !== id)),
};

export default {
  state,
  actions,
  getters,
  mutations
};
