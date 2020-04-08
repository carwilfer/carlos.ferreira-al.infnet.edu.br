import Vue from 'vue';
import VueRouter from 'vue-router';
import './Filters';

import CardsCarros from './components/CardsCarros';
import OpniaoDono from './components/OpniaoDono';
import AddOpniaoDono from './components/AddOpniaoDono';
import DetalDonoCarro from './components/DetalDonoCarro';
import DetalCardsCarros from './components/DetalCardsCarros';
import DonoCarro from './components/DonoCarro';
import EditOpniaoDono from './components/EditDonoCarro';
import EditDonoCarro from './components/EditDonoCarro';
import AddDonoCarro from './components/AddDonoCarro';
import Home from './components/Home';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes:[{
        path: '/',
        name: 'home',
        component: Home
    },{
        path: '/cardsCarros',
        name: 'cardsCarros',
        component: CardsCarros
    },{
        path: '/detalhe/:id',
        name: 'detalCardsCarros',
        component: DetalCardsCarros
    },{
        path: 'addOpniaoDono',
        name: 'addOpniaoDono',
        component: AddOpniaoDono
    },{
        path: '/donoCarros',
        name: 'donoCarros',
        component: DonoCarro
    },{
        path: '/detalhe/:id',
        name: 'detalDonoCarros',
        component: DetalDonoCarro
    },{
        path:'editar',
        name: 'editarDono',
        component: EditDonoCarro
    },{
        path: '/formulario',
        name: 'addDonoCarro',
        component: AddDonoCarro
    },{
        path: '/opniaoDono',
        name: 'opniaoDono',
        component: OpniaoDono,
    },{
        path: '/detalhe/:id',
        name: 'editOpniaoDono',
        component: EditOpniaoDono,
        children: [{
            path: 'edit',
            name: 'editarOpniao',
            component: EditOpniaoDono,

        }]
    }
    ]
});