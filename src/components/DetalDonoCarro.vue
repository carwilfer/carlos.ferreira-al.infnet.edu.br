<template>
    <div>
        <h1> Detalhe dono do carro</h1>
        <div> 
            <h3>
                {{ donoById(id).name }}
            </h3>
            <router-link
                tag="button" :to="{ name: 'users' }">
                Voltar pra Donos
            </router-link>
        </div>
        <div> <span>Username:</span> {{ donoById(id).username }}</div>
        <div><span>Email:</span> {{ donoById(id).email }}</div>
        <div><span>Phone: </span>{{ donoById(id).phone }}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "DetalDonoCarro",
    methods: {
    ...mapActions(["getDonos"]),
    },
    data: function()
    {
    return{ id : this.$route.params.id  };
    },computed: {
        ...mapGetters(["donoById",])
    },created() {
        this.getDonos();
    }

}
</script>

<style>

</style>