<template>
    
<div id="carro-detal">

    <h1> Detalhes do Carro</h1>

    <div class="detail">
      <div>

        <div>Nome carro: {{carrosById(id).name}}</div>
        <div>Marca e Ano: {{carrosById(id).marca}}, {{carrosById(id).ano_modelo}}</div>
        <div>Valor: {{carrosById(id).valor}}</div>
      </div>
      <router-link
        tag="button" 
        :to="{ name: 'home' }">
        Voltar pra lista de carros
      </router-link>

    </div>
    
    <router-link
          tag="button" :to="{ name: 'addOpniaoDono' }">
            Avaliar
        </router-link>
    <router-view></router-view>  

  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

 
export default {
  name: "DetalCardsCarros",

  methods: {
    ...mapActions(["getCarros"]),
  },
    data: function(){
      return{ 
        id : this.$route.params.id};
    },
    computed: {
        ...mapGetters(["carrosById"]),
     }
  
}      
</script>
