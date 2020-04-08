<template>
    <div class="detail">
        <h1> Detalhe dono do carro</h1>
        <div> 
            <h3>
                {{ donoById(id).name }}
            </h3>
            <router-link
                tag="button" :to="{ name: 'donoCarros' }">
                Voltar pra Donos
            </router-link>
        </div>
            <div> <span>Username:</span> {{ donoById(id).username }}</div>
            <div><span>Email:</span> {{ donoById(id).email }}</div>
            <div><span>Phone: </span>{{ donoById(id).phone }}</div>
        <div>
            <span v-if="donoById(id).completed">completed : <i class="fas fa-check"></i></span>  
            <span v-else>completed : <i class="fas fa-times"></i></span> 

            <button @click="editar">Editar Dono</button>   
            <router-view></router-view>                 
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "DetalDonoCarro",
    data: function()
    {
        return{ id : this.$route.params.id  };
    },
    computed: {
        ...mapGetters(["donoById",])
    },
    methods: {
        editar() {
        this.$router.push({ name: 'editarDono' , params: { id: this.id } });
        }
    }

}
</script>

<style>
button{
  flex: 2;
  background: #d4d8dd;
  border: 1px solid #ccc;
  color: #fff;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 10px;
}
.detail{
    padding: 24px;
}
i {
  cursor: pointer;
  color: #000;
  position: inherit;
}

</style>