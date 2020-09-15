<template>
  <section id="beerList">
    <nav class="nav nav-pills nav-justified">
      <a class="nav-item nav-link active" href="#"><i class="fas fa-beer"></i>All beers</a>
      <a class="nav-item nav-link" href="#"><i class="fas fa-list-ul"></i>Categories</a>
    </nav>
    <AllBeers
      :beers="beers"
    />
  </section>
</template>

<script>
import AllBeers from "@/components/AllBeers";

export default {
      components: {
        AllBeers
    }
};
</script>

<style scoped>
.nav .nav-pills .nav-justified{
  background-color: #540e15;
}
.fas{
  margin-right: 10px;
}
.nav-pills  .nav-link{
  background-color: #540e15;
  color: white;
  border-radius: 0;
}

.nav-link {
    display: block;
    padding: 20px 16px;
}

.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #fff;
    background-color: #540e15;
}

a, a:hover, a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

</style>
