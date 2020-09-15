import axios from 'axios'
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        beers: []
    },
    mutations: {
        SET_BEERS(state, payload) {
            state.beers = payload;
        },
        SET_SELECTBEERS(state, payload) {
            state.selectbeers = payload;
            console.log(state.beers)
        },
        SET_CATEGORIES(state, payload) {
            state.categories = payload;
        }
    },
    actions: {
        async fetchBeers({ commit }) {
            try {
                const cors = "https://cors-anywhere.herokuapp.com/";
                const url = `${cors}https://api.brewerydb.com/v2/beers/?key=659d5c6b8f3d2447f090119e48202fdb`;
                const response = await axios.get(url)
                const data = (await response.data).data;
                commit("SET_BEERS", data);
                console.log(data)
                return data;
            } catch (err) {
                console.log(err);
            }
        },
        /*async fetchCategories({ commit }) {
            const cors = "https://cors-anywhere.herokuapp.com/";
            const url = `${cors}https://api.brewerydb.com/v2/categories/?key=659d5c6b8f3d2447f090119e48202fdb`;
            const response = await axios.get(url);
            const data = (await response.data).data;
            commit('SET_CATEGORIES', data);
            console.log(data)
            return data
        }*/
    }

});