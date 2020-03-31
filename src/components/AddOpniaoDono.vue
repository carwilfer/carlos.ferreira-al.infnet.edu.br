<template>
  <div>
    <h3>Adicionar Opniao do Dono</h3>
    <div>
      <form @submit.prevent="onSubmit" v-if="cardsCarros">
        <div><h2>Opnião:</h2></div>
        <input type="text" id="name" name="name" v-model="opniao_add.name" />
        <br />
        <label for="username">Username:</label>
        <br />
        <input type="text" id="username" name="username" v-model="opniao_add.username" />
        <br />
        
        <div><input type="text" v-model="opniao_add.title" placeholder="Add title"></div>
        <div><h2>Description:</h2></div>
        <div><input type="text" v-model="opniao_add.description" placeholder="Add title"></div>
        <div><input type="submit" value="Submit"></div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddOpniaoDono",
  data() {
    return {
      opniao_add :{
        imagem: "",
        veículo: "",
        Nome_Dono: "",
        Dono_ha: "",
        Prós : "",
        Contra: "",
        completed: false,
      }
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit() {
      this.addTodo(this.todo_add);
    }
  }
};
</script>

<style scoped>
form {
  display: block;
}
input[type="text"],input[type="textarea"] {
  width: 100%;
  flex: 10;
  padding: 10px;
  border: 1px solid #1BBC9B;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #1BBC9B;
  border: 1px solid #1BBC9B;
  color: #fff;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 10px;
}
</style>
