<template>
    <div class="beerPage"> 
       <div  v-for="(item, i)  in beers" :key="i" class="row"> 
          <div  class="col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </div>
     <!--  < class="countryList">
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
          </ul>-->
      </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "beerspage",
  computed: {
   ...mapState(["beers"])
  },
  created(){
    this.$store.dispatch("fetchBeers");
  }
};
  
</script>

<style scoped>
.beerPage{
    margin-top:50px;
}


</style>