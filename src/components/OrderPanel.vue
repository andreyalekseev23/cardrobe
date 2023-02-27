<template>
  <div class="order">
    <router-link to="/" class="order__back"
            v-if="$store.state.cart.length === 0"
    >
      Back to Shop
    </router-link>
    <div class="order__inner"
         v-if="$store.state.cart.length !== 0"
    >
      <h2 class="order__title">Total: ${{ total }}</h2>
      <h2 class="order__title">Summary: {{ $store.state.cart.length }}</h2>
      <button class="order__buy">BUY</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderPanel",
  data () {
    return {
      total: undefined
    }
  },
  methods: {
    getTotal () {
      const items = this.$store.state.cart;
      let total = 0;
      console.log(items)
      items.forEach(item => {
        total = total + item.price;
      });
      this.total = total;
    }
  },
  mounted () {
    this.getTotal()
  }
}
</script>

<style scoped lang="scss">
  .order {
    width: 100%;
    padding: 20px;
    border: 2px solid var(--color_gold);
    border-radius: 20px;

    &__back {
      width: 100%;
      border-radius: 10px;
      padding: 15px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color_green);
      background: var(--color_gold);
      font-size: 16px;
      font-weight: 700;
      text-decoration: none;
    }
    &__inner {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;
    }
    &__title {
      font-size: 22px;
      font-weight: 700;
      text-transform: uppercase;
    }
    &__buy {
      width: 100%;
      background: var(--color_gold);
      color: var(--color_green);
      border-radius: 10px;
      padding: 10px 0;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
</style>