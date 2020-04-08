<template>
  <div>
    <div>
      <AddOpniaoDono/>
    </div>
    <h3>Opniões de Donos</h3>
    <div class="opniaoDonos">
      <div
        v-for="o in allOpniao" 
        :key="o.id" 
        :id="o.id" 
        class="opniaoDono" :class="{'is-complete':o.completed}">

        <router-link
          tag="h5"
          :to="{ name: 'editOpniaoDono', params: { id: o.id } }">
          {{ o.name }}
        </router-link>  

        <div>
          <b-card-text><p> {{ o.src }}</p></b-card-text>
          <b-card-text><p> Nome Veículo: {{ o.veiculo }}</p></b-card-text>
          <b-card-text><p> Sono Veículo: {{ o.Nome }}</p></b-card-text>
          <b-card-text><p> Tempo de uso: {{ o.Dono_ha }}</p></b-card-text>
          <b-card-text><p> Prós: {{ o.Prós }}</p></b-card-text>
          <b-card-text><p> Contra: {{ o.Contra }}</p></b-card-text>
        </div>


        <i @click="deleteOpnioes(opnioes.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddOpniaoDono from "./AddOpniaoDono"
export default {
  components:{AddOpniaoDono},
  name: "OpniaoDono",
  methods: {
    ...mapActions(["getOpnioes", "deleteOpnioes"]),

  },
  computed: mapGetters(["allOpniao"]),
  created() {
    this.getOpnioes();
  }
};
</script>

<style scoped>
.opniaoDonos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.opniaoDono {
  background: #d4d8dd;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  color: #fff;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
