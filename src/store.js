import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    data() {
        return {
            beers: []
        }
    },
    methods: {
        async getAllBeers(props, { endpoint }) {
            const cors = "https://cors-anywhere.herokuapp.com/";
            const url = `${cors}https://api.brewerydb.com/v2/${endpoint}/?key=659d5c6b8f3d2447f090119e48202fdb`;
            await axios
                .get(url)
                .then(res => (this.beers = res.data))
                .catch(error => {
                    throw error;
                });
        }
    },
    mounted() {
        this.getAllBeers();
    }
});