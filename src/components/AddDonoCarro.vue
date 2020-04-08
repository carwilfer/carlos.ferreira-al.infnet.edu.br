<template>
    <div>
        <h1>Adicionar Dono de carro</h1>

        <button type="button" v-on:click="mostrarFormulario">
            Adcionar donos
        </button>

        <form @submit.prevent="onSubmit" v-if="mostrarDonos">
            <label for="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" v-model="user_add.name" />
            <br />
            <label for="username">Username:</label>
            <br />
            <input type="text" id="username" name="username" v-model="user_add.username" />
            <br />
            <label for="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" v-model="user_add.email" />
            <br />
            <label for="phone">Phone:</label>
            <br />
            <input type="text" id="phone" name="phone" v-model="user_add.phone" />
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "AddDonoCarro",
    data() {
        return {
        mostrarDonos: false,
            user_add :{
                name: "",
                username: "",
                email: "",
                phone: "",
            }
        }
    },
    methods: {
        ...mapActions(["addDonos"]),
        
        onSubmit() {
        this.addDonos(this.user_add);
        alert("Dono Inserido na lista")
        //this.$router.push({name : "users"})
        },
        mostrarFormulario() {
        this.mostrarDonos = this.mostrarDonos ? false : true;
        }
    } 
};

</script>

<style scoped>

label, button, input {
    margin-left: 100px;
}

.divisionForm {
   margin-left: 100px;
}
form {
  display: block;
}
input[type="text"],input[type="email"],input[type="textarea"] {
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