<template>
    
<div id="carro-detal">


    <h1> Detalhes do Carro</h1>


    <div>
      <h3>{{ id }}</h3>
      <h3>{{carro.name}}</h3>
      <h3>{{carro.marca}} {{carro.ano_modelo}}</h3>
      <h3>{{carro.valor}}</h3>
    </div>

    <div>
      <form @submit.prevent="onSubmit">
        <div><h2>Title:</h2></div>
        <div><input type="text" v-model="opniao_dono.title" placeholder="Adic opniao"></div>
        <div><h2>Description:</h2></div>
        <div><input type="text" v-model="opniao_dono.description" placeholder="Adic opniao"></div>
        <div><input type="submit" value="Submit"></div>
      </form>
    </div>
    <button @click="editar">Adcionar comentário</button>
      <router-view></router-view>

  </div>


</template>

<script>
import {mapGetters, mapActions} from "vuex";
 
export default {

  name: "DetalCardsCarros",
    methods: {
    ...mapActions(["getCardsCarro"]),
    },

    data: function(){
      return{ id : this.$route.params.id  };
      },
      computed: {
        ...mapGetters(["carroById",])
    },
    created() {
      this.getCarro();
    }
  
}      
</script>
