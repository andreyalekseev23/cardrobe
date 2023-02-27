<template>
  <div class="find">
    <label for="find" class="find__label">
      <input type="text" class="find__input" name="find" id="find" placeholder="Find...">
      <button class="find__button">
        <svg width="24" height="24"
             fill="#b79153"
             viewBox="0 0 96 96"
             xmlns="http://www.w3.org/2000/svg"
             transform="matrix(-1, 0, 0, 1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M54,0A42.051,42.051,0,0,0,12,42a41.5989,41.5989,0,0,0,8.48,25.0356L1.7578,85.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L28.9644,75.52A41.5989,41.5989,0,0,0,54,84,42,42,0,0,0,54,0Zm0,72A30,30,0,1,1,84,42,30.0353,30.0353,0,0,1,54,72Z"></path>
          </g>
        </svg>
      </button>
    </label>
  </div>
</template>

<script>
export default {
  name: "FindComponent"
}
</script>

<style scoped lang="scss">
  .find {
    max-width: 500px;
    width: max-content;
    &__label {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
    }
    &__input {
      background: var(--color_green);
      border: 2px solid var(--color_green);
      padding: 10px;
      font-size: 12px;
      font-weight: 700;
      color: var(--color_gold);
      border-radius: 10px;
      outline: none;
      text-transform: uppercase;
      transition: all .5s ease;
      max-width: 0;
      width: 400px;
      overflow: hidden;
      &:hover {
        max-width: 500px;
        width: 400px;
      }
      &:focus {
        max-width: 500px;
        width: 400px;
      }
    }
    &__button {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color_green);
      border-radius: 10px;
    }
  }
</style>