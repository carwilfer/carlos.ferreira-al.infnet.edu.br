<template>
  <div>
    <div>
      <AddOpniaoDono/>
    </div>
    <h3>Opniões de Donos</h3>
    <div class="opniaoDono">
      <div
        v-for="opniaoDono in allOpniaoDono" :key="opniaoDono.id" :id="opniaoDono.id" 
        class="opniaoDono" :class="{'is-complete':opniaoDono.completed}">

        <router-link
          tag="h5"
          :to="{ name: 'detalCardsCarros', params: { id: opniaoDono.id } }">
          {{ opniaoDono.title }}
        </router-link>  

        <div>
          <p> {{ opniaoDono.description }}</p>
        </div>

        <i @click="deleteOpniao(opniaoDono.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddOpniaoDono from './AddOpniaoDono.vue'
export default {
  name: "opniaoDono",
  components:{AddOpniaoDono},
  methods: {
    ...mapActions(["fetchOpniaoDono", "deleteOpniaoDono"]),

  },
  computed: mapGetters(["allOpniaoDono"]),
  created() {
    this.fetchOpniaoDono();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
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
