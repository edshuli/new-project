<template>
  <section id="beerList">
    <BeersPage
      :beers="beers"
    />
  </section>
</template>

<script>
import BeersPage from "@/components/BeersPage";

export default {
      components: {
        BeersPage
    }
};
</script>
