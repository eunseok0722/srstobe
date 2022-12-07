<template>
  <div class="prod-contents">
    <div class="prod-bg-wrap" :class="productsData.bg">
      <div class="content prod-content head-content">
        <div class="content-header" :class="{'header-fix-padding': scrollY}">
          <p class="txt-r">{{ productsData.cart }}</p>
          <div class="header-fix-div" :class="{'header-fix': scrollY}">
            <h3 class="tit-cont fw-r">{{ productsData.name }}</h3>
          </div>
        </div>
        <section>
          <article class="prod-head-cont">
            <div class="tit-box">
              <h4 class="tit-head fw-r">{{ productsData.tit }}</h4>
              <p class="txt-l" v-html="productsData.desc">
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
          <h4 class="tit-cont">{{ productsData.name }}</h4>
        </div>
        <section>
          <article class="prod-dtl-cont">
            <ul class="dtl-list">
              <li class="list-item" v-for="item in productsData.dtl" :key="item.id">
                <div class="dtl-item">
                  <div class="tit-box">
                    <p class="tit-l">{{ item.tit }}</p>
                  </div>
                  <div class="img-box">
                    <img :src="item.img" :alt="productsData.name + ' ' + item.tit">
                  </div>
                </div>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>
    <div class="prod-bg-wrap">
      <div class="content prod-spec-content spec-content">
        <div class="content-header">
          <h4 class="tit-cont fw-r">Product Specifications</h4>
          <p class="tit-r">Parameter / Specifications</p>
        </div>
        <section>
          <article class="prod-spec-cont">
            <ul class="spec-list">
              <li class="list-item" v-for="item in productsData.spec" :key="item.id" :class="item.class">
                <div class="spec-item">
                  <div class="tit-box">
                    <p class="tit-s">{{ item.tit }}</p>
                  </div>
                  <div class="spec-box">
                    <p class="lb-txt-r">{{item.subCont}}</p>
                    <p class="tit-art-03">{{ item.cont}}</p>
                    <p v-html="item.subCont02"></p>
                  </div>
                </div>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>
    <div class="prod-bg-wrap">
      <div class="content prod-feat-content">
        <div class="content-header blind">
          <h4 class="tit-cont fw-r">Product features</h4>
        </div>
        <section>
          <article class="prod-feat-cont">
            <ul class="feat-list">
              <li class="list-item" v-for="item in productsData.feat" :key="item.id">
                <div class="feat-item" :class="item.class">
                  <div class="tit-box">
                    <p class="tit-art-04">{{ item.tit }}</p>
                  </div>
                  <div class="cont-box">
                    <p class="txt-l" v-html="item.cont"></p>
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
  name: "ProductArticle",
  components: {
    // TextArticle,
  },
  props: {
    id: String
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
      // return this.$store.getters["PostData"].productsData
      let dataBase = this.$store.getters["PostData"].productsData;
      for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].id == this.$route.params.id) {
          return dataBase[i];
        }
      }
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
  beforeUnmount() {
    this.$store.getters["HeaderData"].scrollY = 0;
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>