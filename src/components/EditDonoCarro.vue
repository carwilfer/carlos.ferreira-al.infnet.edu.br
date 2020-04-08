<template>
    <div>
      <form @submit.prevent="onSubmit">
        <div><input type="text" v-model.trim.lazy="dono_add.name" placeholder="Add name"></div>  
        <div><input type="text" v-model.trim.lazy="dono_add.username" placeholder="Add username"></div>
        <div><input type="text" v-model.trim.lazy="dono_add.email" placeholder="Add email"></div> 
        <div><input type="text" v-model.trim.lazy="dono_add.street" placeholder="Add street"></div>   

        <div><input type="submit" value="Submit"></div>
        <router-link
          tag="button" :to="{ name: 'donoCarros' }">
            Voltar para os carros
        </router-link>

      </form>
    </div>
</template>

<script>
import{mapGetters, mapActions} from "vuex";
export default {
  name: "EditDonoCarro.vue",
  data() {
    return {
      id:this.$route.params.id,
      dono_add :{
        name: "",
        username: "",
        email: "",
        street: "",
      }
    }
  },computed: mapGetters(["donoById"]),
  created() {
    this.dono_add = this.donoById(this.id)
  },  
  methods: {
    ...mapActions(["updateDono"]),
    onSubmit() {
      this.updateDono(this.dono_add);
      alert("Dados atualizados com sucesso")
    }
  } 
}
</script>

<style lang="stylus" scoped>


</style>