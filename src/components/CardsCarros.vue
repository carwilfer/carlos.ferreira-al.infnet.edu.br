<template>
    <div class="principal">
        <div>
        </div>    
        <h2>Avalie nossos Carros</h2>
        <b-container fluid class="bv-example-row" >
            <b-row cols="3" offset-md="3">
                <div
                    class="card md-4" v-for="c in allCarros" 
                    :key="c.id" style="max-width: 440px;">
                    <div class="row no-gutters">
                        <div class="col-md-6">
                            <img v-bind:src="c.imagem" class="card-img" alt="carros de luxo"/>
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                
                                <h5 class="card-title">{{c.name}}</h5>
                                
                                <h5 class="card-title">{{ c.marca }}</h5>
                                
                                <div>{{c.marca}} {{c.ano_modelo}}</div>
                                <div> {{ c.valor | formatarPreco ("R$" ) }} </div>

                                <router-link tag="h5"
                                class="btn btn-warning"
                                :to="{ name: 'detalCardsCarros', params: { id: c.id } }"
                                >Detalhar</router-link>
                            </div>    
                        </div>
                    </div>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name:"Carros",
    methods: {
        ...mapActions(["getCarros"]),
    },
    computed: mapGetters(["allCarros"]),
    created() {
        this.getCarros();
    },
};
</script>

<style>
h2 {
  display: inline-block;
  margin-top: 20px;
  transform: skew(0, -5deg);
}
.card-img {
    display: flex;
}
.card{
    margin: 14px;
}

span.avaliacao-active {

  background-repeat: no-repeat;
  background-position-y: 3px;
  background-position-x: 1px;
  background-size: 20px;
}

</style>