<template>
  <div class="setting">
    <h2 class="setting__title">Select Items</h2>
    <div class="setting__inner">
      <ul class="setting__list">
        <li class="setting__item"
            v-for="(item, index) of settings"
            :key="index"
        >
          <div class="setting__box">
            <v-icon>mdi-minus</v-icon>
            <v-checkbox
                v-model="item.value"
                :label="item.name"
            ></v-checkbox>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsComponent",
  data () {
    return {
      settings: [
        {
          name: 'clothes',
          value: false
        },
        {
          name: 'footwear',
          value: false
        },
        {
          name: 'other',
          value: false
        },
        {
          name: 'warm_jackets',
          value: false
        },
        {
          name: 'sport_jackets',
          value: false
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .setting {
    width: 100%;
    border-radius: 20px;
    padding: 20px;
    border: 2px solid var(--color_gold);

    &__title {
      font-size: 22px;
      font-weight: 700;
    }
  }
</style>