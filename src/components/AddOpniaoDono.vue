<template>
  <div>
    <h3>Adicionar Opniao do Dono</h3>
    
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input 
            id="input-2" v-model.trim.lazy="dono_add.name" required placeholder=" Digite o nome ">
          </b-form-input>
        </b-form-group>

        <b-form-group 
          id="input-group-1" label="Endereço de email : " label-for="input-1" description=" Nunca compartilharemos seu email com mais ninguém. ">
            <b-form-input 
              id="input-1" v-model.trim.lazy="dono_add.email" type="email" required  placeholder="Digite o email">
            </b-form-input>
        </b-form-group>

        <div>
          <b-form-group label="Inline switch style checkboxes">
            <b-form-checkbox-group
              v-model.trim.lazy="selected" :opcoes="opcoes" switches>
            </b-form-checkbox-group>
          </b-form-group>
        </div>

        <div>
          <b-form-textarea
            id="textarea" v-model.trim.lazy="declaracaoDono" placeholder="Enter something..." rows="3" max-rows="6">
          </b-form-textarea>
          <pre class="mt-3 mb-0">{{ declaracaoDono }}</pre>
        </div>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
  export default {
    name: "AddOpniaoDono",
    data() {
      return {
        dono_add: 
        {
          name: '',
          email: '',
          selected: [],

        },
        declaracaoDono: '',
      }
    },
    methods: {
    ...mapActions(["addDono"]),
        onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.dono_add))
      },
      onReset(evt) {
        evt.preventDefault()
        this.dono.name = ''
        this.dono.email = ''
      },
    }
  }
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
