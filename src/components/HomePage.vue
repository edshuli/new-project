<template>
    <div class="homePage">
     <!-- <div class="opaque-overlay">&nbsp;</div> -->
      <div class="container homePageContainer h-100">
        <div class="row h-100">
          <div class="col my-auto">
            <h2 class="display-5 homeTtitle">Let's go beer haunting</h2>
            <hr class="my-2">
            <p class="lead">We don't just show you beers. We create an amazing journey through the world of beer.</p>
            <hr class="my-3">
            <a class="showMoreButton btn btn-primary btn-sm" href="#" role="button">View our beers</a>
          </div>
       </div>
      </div>
      </div>
</template>

<script>
export default {
  components: {

  }
   
}
</script>

<style scoped>
.homePage{
  background: url('../assets/media/test3.jpg') no-repeat center center fixed;
  background-size: cover;
  max-width:100%;
  height: calc(100vh - 164px);
  font-style: normal;
  color: black;
  line-height: 1.65;
  margin-top: 30px;
}

.opaque-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.homePageContainer .col{
  background-color: #422525f0;
}

.homeTtitle{
  margin-top:20px;
  font-family: 'Fira Sans', sans-serif;
  color:#dae0e5;
  font-weight: 500;
}

.lead{
  font-family: initial;
  color:#dae0e5cf;
}

.showMoreButton{
  margin-bottom: 30px;
}

.btn-primary{
  background-color: #745908;
  border-color: #745908;
}

/*Media Queries*/
/*@media (min-width: 1500px){
  .homePage{
    background: url('../assets/media/test3.jpg') no-repeat center center ;
    background-size: cover;
    max-width:100%;
    height: calc(120vh - 164px);
  }
}*/
</style>