<template>
    <div class="cart">
      <div class="container">
        <div class="cart__inner">
          <div class="cart__info">
            <h1 class="cart__title">CART</h1>
            <h2 class="cart__empty" v-if="$store.state.cart.length === 0 ">No items on cart</h2>
            <ul class="cart__list" v-if="$store.state.cart.length !== 0 ">
              <li class="cart__item"
                  v-for="(item, index) of $store.state.cart"
                  :key="index"
              >
                <CartItem :data="item"/>
              </li>
            </ul>
          </div>
          <OrderPanel />
        </div>
      </div>
    </div>
</template>

<script>
import CartItem from "@/components/CartItem";
import OrderPanel from "@/components/OrderPanel";
export default {
  name: "CartView",
  components: {OrderPanel, CartItem}
}
</script>

<style scoped lang="scss">
  .cart {
    width: 100%;
    margin-top: 50px;

    &__inner {
      width: 100%;
      display: grid;
      grid-template-columns: 55% 40%;
      grid-column-gap: 5%;
      align-items: start;
    }
    &__info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 25px;
    }
    &__title {
      width: 100%;
      text-align: center;
      font-size: 22px;
      font-weight: 700;
    }
    &__empty {
      width: 100%;
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      text-transform: uppercase;
    }
    &__list {
      width: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0px;
    }
    &__item {
      width: 100%;
      height: auto;
    }
  }
</style>