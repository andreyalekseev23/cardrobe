<template>
  <ul class="list">
    <li class="item" v-for="(item) of list" :key="item.id">
      <router-link :to="'/product/' + item.id">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProductsList",
  data () {
    return {
        list: undefined,
    }
  },
  methods: {
    getProducts () {
      this.list = [
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
              ]
            },
            {
              "name": "Light beige/checked",
              "id": "beige",
              "preview" : "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F41%2F07%2F410792a11df6c72f19de2ce4db8356cb0f511f5f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D",
              "images": [
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2b%2F5e%2F2b5e0d26d3f33be84d021f680f7c834843b7d5d7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb0%2F2f%2Fb02f6258da49cfe1153b2a82a27eef9aac388ea5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8e%2F5f%2F8e5fe4bc3f7de41f9a881f3fd312ab0d8bc75117.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]"
              ]
            },
            {
              "name": "Light beige melange",
              "id": "melange",
              "preview" : "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9b%2F0f%2F9b0fb0117f65a64b66f6a884dccae7a927205aff.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D",
              "images": [
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb7%2F91%2Fb7911bf29ee97c5ebacd4671b463d7510931b471.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F73%2F07%2F7307a4de03c2ae9ea8aa6ff6a95379f6616c0512.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb6%2F5c%2Fb65cef84a6f6fa72a7a24defe72e663c85eab8db.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]"
              ]
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
              ]
            },
            {
              "name": "Black",
              "id": "black",
              "preview" : "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F01%2Fe4%2F01e4ca08bba128cbe99e8bf9f8408166f45ab4fd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D",
              "images": [
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F69%2Fab%2F69abae6d2b588cfe50c445b38b029a1802313d34.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5e%2Fa4%2F5ea4ab102b975890d0ec95b5643c298fc01c8bd4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe5%2F69%2Fe56978c63ff10d3b0fc6990bd96209d7e9cba300.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]"
              ]
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
    }
  },
  mounted () {
    this.getProducts ();
  }
}
</script>

<style scoped lang="scss">

</style>