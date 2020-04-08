<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div><h2>Title:</h2></div>
      <div><input type="text" v-model="opniao_add.name" placeholder="Add name"></div>
      <div><input type="text" v-model="opniao_add.username" placeholder="Add username"></div>
      <div><input type="email" v-model="opniao_add.email" placeholder="Add email"></div>
      <div><input type="number" v-model="opniao_add.phone" placeholder="Add phone"></div>
      <div>
        <input type="checkbox" v-model="opniao_add.email" value="false">
        <label for="opniao_add.completed">Está completa?</label>
      </div>
      <div><input type="submit" value="Submit"></div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditOpniaoDono",
  data() {
    return {
      id:this.$route.params.id,
      opniao_add :{
        name: "",
        username: "",
        email: "",
        phone: "",
      }
    }
  },computed: mapGetters(["opniaoById"]),
  created() {
    this.opniao_add = this.opniaoById(this.id)
  },
  methods: {
    ...mapActions(["updateTodo"]),
    onSubmit() {
      this.updateTodo(this.opniao_add);
      alert("Dados esditados com sucesso")
    }
  }
}
</script>

<style>

</style>