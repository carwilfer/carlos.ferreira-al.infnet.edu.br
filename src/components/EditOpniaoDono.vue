<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div><h2>Title:</h2></div>
      <div><input type="text" v-model="opniao_add.title" placeholder="Add title"></div>
      <div>
        <input type="checkbox" v-model="opniao_add.completed" value="false">
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
        title: "",
        description: ""
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