<template>
  <div class="item">
    <div class="container">
      <div class="item__inner">
        <div class="item__info">
          <div class="item__images" v-for="(i, index) of item.variables" :key="index">
            <CarouselComponent v-if="i.active" :slides="i.images"/>
          </div>
          <div class="item__info">
            <div class="item__box">
              <h3 class="item__title">Description</h3>
              <p class="item__desc">
                {{ item.desc}}
              </p>
            </div>
            <div class="item__box2">
              <h3 class="item__title">Composition</h3>
              <ul class="item__list">
                <li class="item__item"
                    v-for="(i,index) of item.composition"
                    :key="index"
                >
                  <span class="item__composition">{{ i }}</span>
                </li>
              </ul>
            </div>
            <div class="item__box">
              <h3 class="item__title">Reviews</h3>
              <div class="item__reviews">
                <div class="item__review" v-for="(i, index) of item.reviews" :key="index">
                  <span class="item__review__date">{{ i.date }}</span>
                  <div class="item__review__value">
                    <svg v-for="(index) of i.total"
                         :key="index"
                         fill="#282828"
                         stroke-width="2"
                         width="22"
                         height="22"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path d="M4.584 23 6 14.679 0 8.785l8.292-1.214L12 0l3.708 7.571L24 8.785l-6 5.894L19.416 23 12 19.071z"></path>
                    </svg>
                  </div>
                  <p class="item__review__text">{{ i.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item__order">
          <div class="item__head">
            <h2 class="item__title">{{ item.name }}</h2>
            <button class="item__favorite" @click="$store.commit('addToLikes', item)">
              <svg class="item__favorite"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path class="item__favorite__bg" d="M17.376 1C21.476 1 24 3.556 24 7.748c0 1.614-.961 3.598-2.696 5.9-.89 1.183-1.97 2.425-3.196 3.705a71.38 71.38 0 0 1-3.987 3.832 71.307 71.307 0 0 1-1.816 1.566L12 23l-.305-.25a71.307 71.307 0 0 1-1.816-1.565 71.38 71.38 0 0 1-3.987-3.832c-1.227-1.28-2.305-2.522-3.196-3.704C.961 11.346 0 9.362 0 7.748 0 3.556 2.524 1 6.624 1c2.08 0 4.23 1.548 5.376 3.548C13.145 2.548 15.294 1 17.376 1z" fill="transparent"></path>
                <path class="item__favorite__line" d="M17.376 1C21.476 1 24 3.578 24 7.807c0 1.628-.961 3.63-2.696 5.953-.89 1.192-1.97 2.446-3.196 3.737a71.66 71.66 0 0 1-3.987 3.865 71.495 71.495 0 0 1-1.816 1.58l-.305.251-.305-.252c-.093-.076-.264-.22-.503-.424-.396-.34-.838-.727-1.313-1.155a71.66 71.66 0 0 1-3.987-3.865c-1.227-1.291-2.305-2.545-3.196-3.737C.961 11.437 0 9.435 0 7.807 0 3.578 2.524 1 6.624 1c2.08 0 4.23 1.562 5.376 3.58C13.145 2.56 15.294 1 17.376 1zM12 21.79l.18-.154c.383-.329.812-.704 1.273-1.12a69.488 69.488 0 0 0 3.865-3.746c1.18-1.244 2.217-2.448 3.068-3.587 1.593-2.132 2.462-3.943 2.462-5.286 0-3.64-2.063-5.747-5.565-5.747-1.927 0-4.049 1.768-4.842 3.843L12 7.145l-.44-1.152C10.765 3.919 8.642 2.15 6.716 2.15c-3.502 0-5.565 2.107-5.565 5.747 0 1.343.87 3.154 2.462 5.286.85 1.14 1.887 2.343 3.068 3.587a69.488 69.488 0 0 0 3.865 3.747A69.313 69.313 0 0 0 12 21.789z" fill="#b79153"></path>
              </svg>
            </button>
          </div>
          <div class="item__total__review">
            <h2 class="item__title">Average review:</h2>
            <div class="item__review__icon">
              <svg v-for="(index) of total_review"
                   :key="index"
                   fill="#282828"
                   stroke-width="2"
                   width="22"
                   height="22"
                   viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"
                   xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path d="M4.584 23 6 14.679 0 8.785l8.292-1.214L12 0l3.708 7.571L24 8.785l-6 5.894L19.416 23 12 19.071z"></path>
              </svg>
            </div>
          </div>
          <div class="item__price">
            <span class="item__title" v-if="converter === 'usd'">USD {{ item.price.usd }}</span>
            <span class="item__title" v-if="converter === 'eur'">EUR {{ item.price.eur }}</span>
            <span class="item__title" v-if="converter === 'rub'">RUB {{ item.price.rub }}</span>

            <select v-model="converter">
              <option value="rub">rub</option>
              <option value="usd">usd</option>
              <option value="eur">eur</option>
            </select>
          </div>
          <div class="item__vars">
            <div class="item__var__name"
                 v-for="(i) of item.variables"
                 :key="i.id"
            >
              <span class="item__title" v-if="i.active">{{ i.name }}</span>
            </div>
            <div class="item__var__image">
              <div class="item__var" v-for="(i, index) of item.variables" :key="index">
                <img :src="i.preview" alt="" class="item__preview" @click="variablesSwitcher(i)">
              </div>
            </div>
          </div>
          <div class="item__size">
            <span v-if="size_error" style="color: red">Please choose a size</span>
            <select v-model="size" @change="() => this.size_error = false">
              <option v-for="(i, index) of item.sizes" :key="index" :value="i">{{ i }}</option>
            </select>
          </div>
          <button class="item__add" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselComponent from "@/components/CarouselComponent";

export default {
  name: "ProductView",
  components: {
    CarouselComponent
  },
  props: ['id'],
  data () {
    return {
      item: undefined,
      converter: 'usd',
      size: '',
      size_error: false,
      total_review: undefined,
    }
  },
  methods: {
    variablesSwitcher (i) {
      this.item.variables.forEach(item => {
        item.active = false;
      })
      i.active = true;
    },
    calcTotalReviews () {
      const reviews = this.item.reviews;
      let sum = 0;

      reviews.forEach(review => {
        sum += review.total;
      });

      this.total_review = sum / reviews.length;
    },
    getProduct () {
      const url = window.location.href;
      const urlArr = url.split('/');
      const id = urlArr[urlArr.length - 1];
      const products = [
        {
          "name": "Shacket",
          "price": {
            "rub": 3000,
            "usd": 50,
            "eur": 45
          },
          "sizes": ["XS", "S", "M", "L", "XL"],
          "variables": [
            {
              "name": "Light purple",
              "id": "purple",
              "preview" : "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb2%2F86%2Fb286e3c0f646cf0eddebb020c63844fbf967e57a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D",
              "images": [
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6d%2F1a%2F6d1a758a6c7805372c8cf384a5b7388dc3dee7cd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcc%2F3c%2Fcc3c3ae54961cdfb9731ce6244825c5af5ecab2b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd6%2F51%2Fd651b281ea86c6062e611341294efc091f7bbffe.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]"
              ],
              "active": true
            },
            {
              "name": "Light beige/checked",
              "id": "beige",
              "preview" : "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F41%2F07%2F410792a11df6c72f19de2ce4db8356cb0f511f5f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D",
              "images": [
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2b%2F5e%2F2b5e0d26d3f33be84d021f680f7c834843b7d5d7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb0%2F2f%2Fb02f6258da49cfe1153b2a82a27eef9aac388ea5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8e%2F5f%2F8e5fe4bc3f7de41f9a881f3fd312ab0d8bc75117.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]"
              ],
              "active": false
            },
            {
              "name": "Light beige melange",
              "id": "melange",
              "preview" : "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9b%2F0f%2F9b0fb0117f65a64b66f6a884dccae7a927205aff.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D",
              "images": [
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb7%2F91%2Fb7911bf29ee97c5ebacd4671b463d7510931b471.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F73%2F07%2F7307a4de03c2ae9ea8aa6ff6a95379f6616c0512.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb6%2F5c%2Fb65cef84a6f6fa72a7a24defe72e663c85eab8db.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]"
              ],
              "active": false
            }
          ],
          "id": "WWJ1",
          "desc": "Relaxed-fit shirt jacket in woven fabric with soft, brushed finish. Collar, snap fasteners at front, and yoke at back with pleats. Dropped shoulders and long sleeves with snap fastener at cuffs. Chest pockets with flap and discreet side pockets. Rounded hem, slightly longer at back. Lined.",
          "composition": [
            "Polyester 66%",
            "Wool 17%",
            "Rayon 15%",
            "Polyamide 2%"
          ],
          "reviews": [
            {
              "date": "31 Jan 2023",
              "total": 5,
              "desc": "This is one of the best shacket that I have so far ; it’s so well made, I love the satin lining inside, I love that it has side pockets; it’s so easy to keep phone and keys. It’s really nice and long to a standard. I really enjoyed wearing it yesterday on monday January 30th 2023. It was a really good investment. But I just wish if the color was a bit darker than it actually is, it would have looked more pretty if it was a true bright lavender."
            },
            {
              "date": "10 Feb 2023",
              "total": 3,
              "desc": "I wanted to love this, but it was HUGE! I'm 9 months pregnant and normally wear a small or medium. The small swallowed me even at this stage in pregnancy. Def size down. The quality was nice, it was much thicker and more jacket like than I thought. If you can get the sizing right, its super cute."
            }
          ]
        },
        {
          "name": "Double-breasted Trench Coat",
          "price": {
            "rub": 4500,
            "usd": 64,
            "eur": 60
          },
          "sizes": ["XS", "S", "M", "L", "XL"],
          "variables": [
            {
              "name": "Light beige",
              "id": "beige",
              "preview" : "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd8%2F49%2Fd8497f6d6e614a3e9cc9f22e7bcd4cfe5d6e05b7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D",
              "images": [
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffc%2F3e%2Ffc3e5dd40574b6621b0dedcf437b785ee2354267.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F80%2F67%2F806740d22df74951ed926b99c3eb5c0b20343f53.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe0%2Fe5%2Fe0e55d181a1b54ba7f7e686e78cfc61e3d27b26e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]"
              ],
              "active": true
            },
            {
              "name": "Black",
              "id": "black",
              "preview" : "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F01%2Fe4%2F01e4ca08bba128cbe99e8bf9f8408166f45ab4fd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D",
              "images": [
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F69%2Fab%2F69abae6d2b588cfe50c445b38b029a1802313d34.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5e%2Fa4%2F5ea4ab102b975890d0ec95b5643c298fc01c8bd4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe5%2F69%2Fe56978c63ff10d3b0fc6990bd96209d7e9cba300.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]"
              ],
              "active": false
            }
          ],
          "id": "WWJ2",
          "desc": "Loose-fit, double-breasted trench coat in woven fabric. Collar, wide lapels, and buttons at front. Welt front pockets with flap, removable tie belt at waist, and long raglan sleeves. Lined.",
          "composition": [
            "Polyester 100%"
          ],
          "reviews": [
            {
              "date": "30 Jan 2023",
              "total": 4,
              "desc": "This is one of the best shacket that I have so far ; it’s so well made, I love the satin lining inside, I love that it has side pockets; it’s so easy to keep phone and keys. It’s really nice and long to a standard. I really enjoyed wearing it yesterday on monday January 30th 2023. It was a really good investment. But I just wish if the color was a bit darker than it actually is, it would have looked more pretty if it was a true bright lavender."
            },
            {
              "date": "10 Feb 2023",
              "total": 4,
              "desc": "I wanted to love this, but it was HUGE! I'm 9 months pregnant and normally wear a small or medium. The small swallowed me even at this stage in pregnancy. Def size down. The quality was nice, it was much thicker and more jacket like than I thought. If you can get the sizing right, its super cute."
            }
          ]
        }
      ];
      this.item = products.find(item => item.id === id);
    },
    addToCart () {
      if(this.size === '') {
        this.size_error = true;
      }
      else {
        let variable = {};
        this.item.variables.forEach(item => {
          if (item.active) {
            variable = item;
          }
        })
        const item = {
          name: this.item.name,
          id: this.item.id,
          price: this.item.price.usd,
          size: this.size,
          variable: variable
        }
        this.$store.commit('addToCart', item)
      }
    }
  },
  created () {
    this.getProduct ();
  },
  mounted () {
    this.calcTotalReviews ();
  }
}
</script>

<style scoped lang="scss">
  .item {
    width: 100%;
    padding: 50px 0;
    color: #282828;

    &__inner {
      width: 100%;
      display: grid;
      grid-template-columns: 55% 40%;
      grid-column-gap: 5%;

      @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 20px;
      }
    }
    &__info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 20px;
    }
    &__title {
      color: var(--color_gold);
      font-size: 22px;
      font-weight: 700;
    }
    &__images {
      width: 100%;
    }
    &__box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 5px;
    }
    &__box2 {
      width: 100%;
      display: flex;
      align-items: start;
      gap: 20px;
    }
    &__desc, &__review__text {
      font-size: 18px;
    }
    &__review__text {
      margin-top: 5px;
    }
    &__review__value {
      float: right;
    }
    &__list {
      list-style: none;
      padding: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 5px;
    }
    &__composition {
      font-size: 18px;
    }
    &__reviews {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 20px;
    }
    &__order {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 30px;
    }
    &__head {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: space-between;
    }
    &__favorite {
      &__bg, &__line {
        transition: all .2s;
      }
      &:hover {
        .item__favorite__bg, .item__favorite__line {
          fill: var(--color_gold);
        }
      }
    }
    &__total__review {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    &__price {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: space-between;
      span {
        font-weight: bold;
        font-size: 18px;
      }
      select {
        width: 60%;
      }
    }
    &__vars {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;
    }
    &__var__name {
      width: 100%;
      font-weight: bold;
      font-size: 16px;
    }
    &__var__image {
      width: 100%;
      display: flex;
      align-items: start;
      gap: 10px;
    }
    &__var {
      cursor: pointer;
      border: 4px solid var(--color_gold);
      border-radius: 5px;
      overflow: hidden;
      height: 90px;
    }
    &__preview {
      width: auto;
      height: 100%;
    }
    &__size {
      width: 100%;
      select {
        width: 100%;
      }
    }
    &__add {
      width: 100%;
      padding: 15px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color_gold);
      border-radius: 5px;
      color: var(--color_green);
      font-weight: 700;
    }
  }
</style>