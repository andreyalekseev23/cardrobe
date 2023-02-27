<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
export default {
  components: {
    HeaderComponent
  }
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  button {
    cursor: pointer;
    transition: all .3s;
    background: transparent;
    border: none;
  }
  ul,ol {
    list-style: none;
    padding: 0;
  }
  a, router-link {
    text-decoration: none;
    color: inherit;
  }
}
.container {
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;
}
:root {
  --color_gold: #b79153;
  --color_green: #606353;
}
body {
  background: var(--color_green);
  color: var(--color_gold);
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  line-height: 120%;
  font-weight: 400;
}

</style>