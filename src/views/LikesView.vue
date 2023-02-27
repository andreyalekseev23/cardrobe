<template>
  <div class="cart">
    <h1>Liked</h1>
    <h2 v-if="$store.state.likes.length === 0 ">No liked items</h2>
    <ul class="list" v-if="$store.state.likes.length !== 0 ">
      <li class="item"
          v-for="(item, index) of $store.state.likes"
          :key="index"
      >
        <span @click="$store.commit('removeFromLikes', item)">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LikesView"
}
</script>

<style scoped lang="scss">

</style>