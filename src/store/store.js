import Vue from 'vue'
import Vuex from 'vuex'
import  comment from './modules/comment'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state:{
        name:"",
        email:"",
        website:"",
        content:""
    },
    mutations,
    actions,
    modules:{
        comment
    }
})