<template>
  <div>
    <h3>Listagem de Donos</h3>

  <div>
    <AddDonoCarro/>
  </div>
    <div class="carros">
      <div      
        v-for="d in allDono" 
        :key="d.id" 
        class="dono">
        <div> 
          <router-link
            tag="h3" :to="{ name: 'detalDonoCarros', params: { id: d.id } }">
            {{ d.name }}
           </router-link>
        </div>
        <div> 
          <span>Username:</span> {{ d.username }}
        </div>
        <div>
          <span>Email:</span> {{ d.email }}
        </div>
        <div>
          <span>Phone: </span>{{ d.phone }}
        </div>
        <div><p> {{ d.name }}</p></div>
        <i @click="deleteDonos(d.id)" class="btn btn-warning"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddDonoCarro from "./AddDonoCarro"

export default {
  components:{AddDonoCarro},
  name: "dono",
  methods: {
    ...mapActions(["getDonos", "deleteDonos"]),
  },
  computed: 
  mapGetters(["allDono"]),
  created() {
    this.getDonos();
  }
};
</script>

<style>
.carros{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
}
.dono {
  border: 1px solid #ccc;
  background: #d4d8dd;
  padding: 1rem;
  border-radius: 5px;
  justify-content: left;
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
  background: #ffffff;
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
span{
  font-weight: bold;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
