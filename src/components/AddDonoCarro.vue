<template>
    <div>
        <Header/>
        <div >
        <button type="button" v-on:click="mostrarFormulario">
            Adicionar donos
        </button>

        <form @submit.prevent="onSubmit" v-if="mostrarDonos">
            <label for="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" v-model="user_add.name"  placeholder="Add Nome"/>
            <br />
            <label for="username">Username:</label>
            <br />
            <input type="text" id="username" name="username" v-model="user_add.username"  placeholder="Sobrenome"/>
            <br />
            <label for="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" v-model="user_add.email"  placeholder="carneirinhos@gmail.com"/>
            <br />
            <label for="phone">Phone:</label>
            <br />
            <input type="text" id="phone" name="phone" v-model="user_add.phone"  placeholder="21 999999999"/>
            <br />
            <br />
            <button type="submit" value="Submit">Enviar</button>
        </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from './Header'
export default {
    components:{Header},
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

label, input {
    display: flex;
    margin-left: 60px;
}

.divisionForm {
   margin-left: 100px;
}
form {
  display: block;
}
input[type="text"],input[type="email"],input[type="textarea"] {
  width: 97%;
  display: flex;
  flex: 10;
  padding: 10px;
  border: 1px solid rgb(54, 59, 58);
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