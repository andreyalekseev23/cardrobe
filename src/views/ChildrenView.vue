<template>
  <div class="children">
    <div class="container">
      <div class="children__inner">
        <SettingsComponent />
        <div class="children__content">
          <div class="children__find">
            <h1 class="children__title">Children</h1>
            <FindComponent />
          </div>
          <div class="children__items">
            <ul class="children__list">
              <li class="children__item">
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
import FindComponent from "@/components/FindComponent";
import SettingsComponent from "@/components/SettingsComponent";
import ProductItem from "@/components/ProductItem";

export default {
  name: "ChildrenView",
  components: {
    FindComponent,
    SettingsComponent,
    ProductItem
  }
}
</script>

<style scoped lang="scss">
.children {
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