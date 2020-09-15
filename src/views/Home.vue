<template>
 <section>
    <HomePage></HomePage>
    <SocialContainer></SocialContainer>
 </section>

</template>

<script>
import HomePage from "@/components/HomePage.vue";
import SocialContainer from "@/components/SocialContainer.vue";

export default {
  name: "home",
  components: {
    SocialContainer,
    HomePage
  }
}
</script>

<style scoped>

</style>