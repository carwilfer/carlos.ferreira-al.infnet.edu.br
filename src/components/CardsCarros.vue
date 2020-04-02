<template>
    <div class="principal">
        <Header />
        <Home />
        <h2>Avalie nossos Carros</h2>

        <b-container fluid class="bv-example-row" >
            <b-row cols="3" offset-md="3">
                <div
                    class="card md-4" v-bind:key="carro.id" v-for="carro in carros" style="max-width: 440px;">
                    <div class="row no-gutters">
                        <div class="col-md-6">
                            <img v-bind:src="carro.imagem" class="card-img" alt="carros de luxo"/>
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">{{carro.name}}</h5>
                                <router-link tag="h5"
                                    class="card-title"
                                    :to="{ name: 'carro', params: { id: carro.id } }"
                                    >{{ carro.marca }}
                                </router-link>
                                <div>{{carro.marca}} {{carro.ano_modelo}}</div>
                                <div> {{ carro.valor | formatarPreco("R$")}} </div>
                                <!-- <a :href="carro.url"--> <a class="btn btn-warning">Detalhar</a> 

                                <div>
                                    <p> {{ carro.marca }}</p>
                                    <i @click="deleteCarro(carro.id)" class="fas fa-trash-alt"></i>
                                </div>
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
import Header from './Header';
import Home from './Home';

export default {
    name:"CardsCarros",
    components:{Header, Home},
    methods: {
     ...mapActions(["fetchCarros"]),
    },
    computed: mapGetters(["allCarros"]),
        created() {
        this.fetchCarros();
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