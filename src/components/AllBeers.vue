<template>
  <section class="beerPage layout-outer">
    <div class="layout-inner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h2 class="section-title h1">Exploring our Beers</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="auto col-md-6 col-lg-4 beerCard" v-for="(item, i) in beers" :key="i">
            <div class="img-wrapper">
              <img class="img-fluid img-logo mb-4" :src="item.id" />
            </div>
            <p class="lead my-2">{{ item.name }}...</p>
            <!--<router-link class="btn btn-block btn-primary mt-4" to="/artist/bio">
              <span v-on:click="setCurrentArtist(i)" class="w-100 py-2 d-block">Learn More</span>
            </router-link>-->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="beerPage">
     <div  v-for="(item, i)  in beers" :key="i" class="row" style="width: 18rem;">
       <div class="col-md-6 col-lg-6">
          <div class="card">
            <img class="card-img-top" src="" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">{{ item.description }}</p>
            </div>
        </div>
      </div>
    </div>
  </div>-->

     
</template>

<script>
import { mapState } from "vuex";


export default {
  name: "allbeers",
  computed: {
   ...mapState(["beers"])
  },
  created(){
    this.$store.dispatch("fetchBeers");
  }
};
  
</script>

<style scoped>
/*----Card------

.card-container {
    margin-top: 50px;
    margin-bottom: 50px;
}

.card {
    height: auto;
    margin-bottom: 20px;
    background-color: #d0b0b3;
}

.card-img-top {
    display: inline-block;
    width: 100%;
    height: 300px;
}

.card-body {
    padding: 10px 20px;
}

.card-title {
    color: #fefefd;
    max-width: 100%;
    margin-bottom: 5px;
    padding: 10px 24px;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Unna', serif;
}

.card-text {
    margin-bottom: 10px;
}

.card-text {
    color: #fefefd;
    font-size: 20px;
    font-weight: 300;
}

.card-action {
    background-color: transparent;
}

.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {
    color: #fefefd;
}*/
.beerPage{
  background-image: linear-gradient(120deg, grey 80%, white 10%);
}
.layout-outer{
  min-height: 100vh;
}



</style>