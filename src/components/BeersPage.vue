<template>
    <div class="beerPage">
      <div class="container beerListContainer">
        <div v-for="object in beers" :key="object.id" class="row"> 
          <div v-for="item in object" :key="item.name" class="col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ item.id }}</h5>
                <p class="card-text">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      beers: []
    }
  },
 created(){
   axios.get('/')
     .then(res => {
       this.beers = res.data
     })
     .catch(err => console.log(err));
 }
}

  /* 
  import Vue from 'vue'
  import Vuex from 'vuex'

Vue.use(Vuex)
  
  data(){
      return{
        beers: []
      }
    },
     created(){},
      actions: {
      async fetchApi( {beers}) {
      const API_KEY = "659d5c6b8f3d2447f090119e48202fdb";
      const cors = "https://cors-anywhere.herokuapp.com/";
      const response = await axios.get(
      `${cors}https://api.brewerydb.com/v2/${beers}/?key=${API_KEY}`
      )
      const data = (await response.data).data;
      console.log(data);
      }
      },
     */

/* created (){
      axios.get('api_url')
       .then(res => {
         debugger
         this.beers = res.data
       })
    }*/
</script>

<style scoped>
.beerPage{
    margin-top:50px;
}
</style>