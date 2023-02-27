<template>
  <div class="home">
    <div class="container">
      <div class="home__inner">
        <ProductsList />
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from "@/components/ProductsList";
export default {
  name: 'HomeView',
  components: {
    ProductsList
  },
}
</script>

<style scoped lang="scss">
  .home {
    width: 100%;
    margin-top: 50px;
  }
</style>
