<template>
  <router-link :to="'/product/' + data.id" class="cart">
    <div class="cart__inner">
      <div class="cart__container">
        <img class="cart__preview"
             :src="data.variable.preview"
             alt=""
        >
        <div class="cart__box">
          <h3 class="cart__name">
            {{ data.name }}
          </h3>
          <p class="cart__size">Price: ${{ data.price }}</p>
          <p class="cart__size">Size: {{ data.size }}</p>
          <p class="cart__size">Model: {{ data.variable.name }}</p>
          <p class="cart__size">Article: {{ data.id }}</p>
        </div>
      </div>
      <button class="cart__remove" @click.prevent="$store.commit('removeFromCart', data)">
        Remove from cart
      </button>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    data: Object
  },
  mounted () {
    console.log(this.data)
  }
}
</script>

<style scoped lang="scss">
  .cart {
    display: block;
    color: #282828;
    width: 100%;
    border-radius: 15px;
    border: 2px solid var(--color_gold);
    padding: 20px;
    text-decoration: none;

    &__inner {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;
    }
    &__container {
      width: 100%;
      display: flex;
      align-items: start;
      gap: 40px;
    }
    &__box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 5px;
    }
    &__name {
      font-size: 22px;
      color: var(--color_gold);
      font-weight: 700;
    }
    &__price, &__size {
      font-size: 16px;
      font-weight: 700;
    }
    &__remove {
      align-self: end;
      background: var(--color_gold);
      color: var(--color_green);
      border-radius: 10px;
      padding: 10px 0;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
    }
  }
</style>




