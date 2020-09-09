<template>
    <div class="beerPage">
      <div class="beerContainer">
        <ul v-for="beer in beers" :key="beer.id" class="nav nav-tabs">
            <li v-for="item in beer" :key="item.name" class="nav-item">
              <a class="nav-link active" href="#">{{ item.name }}</a>
            </li>
          </ul>
      </div>
          
       <!-- <div v-for="beer in beers" :key="beer.id" class="row"> 
          <div v-for="item in beer" :key="item.name" class="col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ item.id }}</h5>
                <p class="card-text">{{ item.name}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="countryList">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>-->
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
     methods: {
      async getAllBeers(props,{endpoint}){
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
};
  


</script>

<style scoped>
.beerPage{
    margin-top:50px;
}


</style>