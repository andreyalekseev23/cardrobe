<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <nav class="header__nav">
          <router-link class="header__link" to="/">
            <img src="@/assets/logotype.jpg" alt="" class="header__logo">
          </router-link>
          <ul class="header__list">
            <li class="header__item">
              <router-link class="header__link" to="/top">Top</router-link>
            </li>
            <li class="header__item">
              <router-link class="header__link" to="/man">Man</router-link>
            </li>
            <li class="header__item">
              <router-link class="header__link" to="/woman">Woman</router-link>
            </li>
            <li class="header__item">
              <router-link class="header__link" to="/children">Children</router-link>
            </li>
            <li class="header__item">
              <router-link class="header__link" to="/for-home">For Home</router-link>
            </li>
          </ul>
          <div class="header__buttons">
            <router-link to="/cart" class="header__icon">
              <span class="header__icon__counter" v-if="$store.state.cart.length !== 0">
                {{ $store.state.cart.length }}
              </span>
              <svg width="30"
                   height="30"
                   viewBox="0 0 24 24"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path opacity="0.15" d="M4.97043 9.81038C5.06819 8.78391 5.93031 8 6.96142 8H17.0386C18.0697 8 18.9318 8.78391 19.0296 9.81038L19.7915 17.8104C19.9033 18.9846 18.9799 20 17.8005 20H6.19952C5.02004 20 4.0967 18.9846 4.20853 17.8104L4.97043 9.81038Z" fill="#b79153"></path>
                  <path d="M16 8H17.1597C18.1999 8 19.0664 8.79732 19.1528 9.83391L19.8195 17.8339C19.9167 18.9999 18.9965 20 17.8264 20H6.1736C5.00352 20 4.08334 18.9999 4.18051 17.8339L4.84718 9.83391C4.93356 8.79732 5.80009 8 6.84027 8H8M16 8H8M16 8L16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7L8 8M16 8L16 12M8 8L8 12" stroke="#b79153" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
              </svg>
            </router-link>
            <router-link to="/likes" class="header__icon">
              <span class="header__icon__counter" v-if="$store.state.likes.length !== 0">
                {{ $store.state.likes.length }}
              </span>
              <svg width="24"
                   height="24"
                   viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"
                   xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path class="item__favorite__bg" d="M17.376 1C21.476 1 24 3.556 24 7.748c0 1.614-.961 3.598-2.696 5.9-.89 1.183-1.97 2.425-3.196 3.705a71.38 71.38 0 0 1-3.987 3.832 71.307 71.307 0 0 1-1.816 1.566L12 23l-.305-.25a71.307 71.307 0 0 1-1.816-1.565 71.38 71.38 0 0 1-3.987-3.832c-1.227-1.28-2.305-2.522-3.196-3.704C.961 11.346 0 9.362 0 7.748 0 3.556 2.524 1 6.624 1c2.08 0 4.23 1.548 5.376 3.548C13.145 2.548 15.294 1 17.376 1z" fill="transparent"></path>
                <path class="item__favorite__line" d="M17.376 1C21.476 1 24 3.578 24 7.807c0 1.628-.961 3.63-2.696 5.953-.89 1.192-1.97 2.446-3.196 3.737a71.66 71.66 0 0 1-3.987 3.865 71.495 71.495 0 0 1-1.816 1.58l-.305.251-.305-.252c-.093-.076-.264-.22-.503-.424-.396-.34-.838-.727-1.313-1.155a71.66 71.66 0 0 1-3.987-3.865c-1.227-1.291-2.305-2.545-3.196-3.737C.961 11.437 0 9.435 0 7.807 0 3.578 2.524 1 6.624 1c2.08 0 4.23 1.562 5.376 3.58C13.145 2.56 15.294 1 17.376 1zM12 21.79l.18-.154c.383-.329.812-.704 1.273-1.12a69.488 69.488 0 0 0 3.865-3.746c1.18-1.244 2.217-2.448 3.068-3.587 1.593-2.132 2.462-3.943 2.462-5.286 0-3.64-2.063-5.747-5.565-5.747-1.927 0-4.049 1.768-4.842 3.843L12 7.145l-.44-1.152C10.765 3.919 8.642 2.15 6.716 2.15c-3.502 0-5.565 2.107-5.565 5.747 0 1.343.87 3.154 2.462 5.286.85 1.14 1.887 2.343 3.068 3.587a69.488 69.488 0 0 0 3.865 3.747A69.313 69.313 0 0 0 12 21.789z" fill="#b79153"></path>
              </svg>
            </router-link>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  padding: 20px 0;
  border-bottom: 2px solid var(--color_gold);
  border-radius: 0 0 20px 20px;
  background-color: transparent;
  backdrop-filter: blur(5px);

  &__nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    max-height: 40px;
    width: auto;
  }
  &__list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__link {
    text-decoration: none;
    color: var(--color_gold);
    font-weight: bold;
    font-size: 20px;
  }
  &__buttons {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__icon {
    width: 30px;
    height: 30px;
    position: relative;

    &__counter {
      position: absolute;
      top: -5px;
      right: -5px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color_gold);
      color: var(--color_green);
      font-weight: bold;
      font-size: 10px;
    }
  }
}
</style>