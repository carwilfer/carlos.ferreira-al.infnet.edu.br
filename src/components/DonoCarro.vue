<template>
 <div>
    <h3>Listagem de Usuários</h3>
  <!-- <router-link to="/form">
      <button >Adicionar Usuário</button>
  </router-link> -->
  <div> <AddOpniaoDono/> </div>
    <div class="photos">
        <div v-for="dono in addDono" :key="dono.id" class="dono">
            <div><h3>{{ dono.name }}</h3></div>
            <div><span>Username:</span> {{ dono.username }}</div>
            <div><span>Email:</span> {{ dono.email }}</div>
            <div><span>Phone: </span>{{ dono.phone }}</div>
        </div>
        <router-link
           tag="h5"
           :to="{ name: 'detailDonoCarro', params: { id: dono.id } }"
        >
        {{ dono.name }}
        </router-link>
        <div><p> {{ dono.email }}</p></div>
        <i @click="deleteDono(dono.id)" class="fas fa-trash-alt"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddOpniaoDono from "./AddOpniaoDono.vue"
export default {
  name: "DonoCarro",methods: {
    ...mapActions(["fetchDonos", "deleteDono"]),
  },
  components:{AddOpniaoDono},
  computed: mapGetters(["allDonos"]),
  created() {
    this.fetchDonos();
  }
 
};
</script>

<style>
.photos{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
}
.user {
  border: 1px solid #ccc;
  background: #41b883;
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
span{
  font-weight: bold;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
