import Vue from 'vue';
import router from './router'
import App from './app.vue'
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use( Vuex );

//Define vuex store
const store = new Vuex.Store( {
    state: {
        title: ''
    },
    mutations: {
        rtChangeTitle( state, value ) {
            // mutate state
            state.title = value;
            document.title = ( state.title ? state.title + ' - ' : '' ) + rtwp.site_name;
        }
    }
} );

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})