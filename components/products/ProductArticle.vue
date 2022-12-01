<template>
  <div class="prod-contents">
    <div class="prod-bg-wrap bg-retina-4f">
      <div class="content prod-content" :class="{'header-fix-padding': scrollY}">
        <div class="content-header" :class="{'header-fix': scrollY}">
          <p class="txt-r">{{ productsData[0].cart }}</p>
          <h3 class="tit-cont">{{ productsData[0].name }}</h3>
        </div>
        <section>
          <article class="prod-head-cont">
            <div class="tit-box">
              <h3 class="tit-head">{{ productsData[0].tit }}</h3>
              <p class="txt-l" v-html="productsData[0].desc">
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
    <div class="prod-bg-wrap gray">
      <div class="content prod-dtl-content">
        <div class="content-header blind">
          <p class="txt-r">product detail</p>
          <h3 class="tit-cont">{{ productsData[0].name }}</h3>
        </div>
        <section>
          <article class="prod-dtl-cont">
            <ul class="dtl-list">
              <li class="list-item" v-for="item in productsData[0].dtl" :key="item.id">
                <div class="dtl-item">
                  <div class="tit-box">
                    <p class="tit-l">{{ item.tit }}</p>
                  </div>
                  <div class="img-box">
                    <img :src="item.img" :alt="productsData[0].name + ' ' + item.tit">
                  </div>
                </div>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "NewsRoomPost",
  components: {
    // TextArticle,
  },
  props: {
    id: Number
  },
  computed: {
    // postData() {
    //   let dataBase = this.$store.getters["PostData"].newsPost;
    //   for (let i = 0; i < dataBase.length; i++) {
    //     if (dataBase[i].id == this.$route.params.id) {
    //       return dataBase[i];
    //     }
    //   }
    // },
    img() {
      return `../assets/images/temp/img_temp_002.png`
    },
    scrollY() {
      return this.$store.getters["ModuleHeader/ScrollY"]
    },
    productsData() {
      return this.$store.getters["PostData"].productsData
    }
  },
  methods: {
    handleScroll() {
      return this.$store.commit("ModuleHeader/handleScroll");
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>