<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div><input type="text" v-model="dono_add.username" placeholder="Add title"></div>
            <div><input type="text" v-model="dono_add.email" placeholder="Add title"></div> 
            <div><input type="text" v-model="dono_add.street" placeholder="Add title"></div>   
    
            <div><input type="submit" value="Submit"></div>
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
        dononame: "",
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