<template>
  <div class="top">
    <div class="container">
      <div class="top__inner">
        <SettingsComponent />
        <div class="top__content">
          <div class="top__find">
            <h1 class="top__title">Top Sell</h1>
            <FindComponent />
          </div>
          <div class="top__items">
            <ul class="top__list">
              <li class="top__item">
                <ProductItem />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SettingsComponent from "@/components/SettingsComponent";
import FindComponent from "@/components/FindComponent";
import ProductItem from "@/components/ProductItem";
export default {
  name: "TopView",
  components: {ProductItem, FindComponent, SettingsComponent}
}
</script>

<style scoped lang="scss">
  .top {
    width: 100%;
    margin-top: 50px;

    &__inner {
      width: 100%;
      display: grid;
      grid-template-columns: 25% 72%;
      grid-column-gap: 3%;
      align-items: start;
    }
    &__content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 40px;
    }
    &__find {
      width: 100%;
      padding: 15px 20px;
      border-radius: 20px;
      background: var(--color_gold);
      display: flex;
      align-items: center;
      gap: 50px;
      justify-content: space-between;
    }
    &__title {
      font-size: 22px;
      font-weight: 700;
      color: var(--color_green);
    }
    &__items {
      width: 100%;
    }
    &__list {
      width: 100%;
      list-style: none;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }

  }
</style>