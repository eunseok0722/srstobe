<template>
  <div class="cabi-contents">
    <img-content :article-data="articleData"></img-content>
    <!--  <div class="content prod-content">-->
    <!--    <section>-->
    <!--      <article class="prod-cont">-->
    <!--        <div class="tit-box">-->
    <!--          <h4 class="tit-head fw-r">Product</h4>-->
    <!--        </div>-->
    <!--        <ul class="prod-list">-->
    <!--          <li class="list-item" v-for="item in articleData.prod" :key="item.id">-->
    <!--            <div class="dtl-item">-->
    <!--              <div class="img-box">-->
    <!--                <img :src="item.path" :alt="item.desc">-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </li>-->
    <!--        </ul>-->
    <!--      </article>-->
    <!--    </section>-->
    <!--  </div>-->
<!--    <prod-content :article-data="articleData"></prod-content>-->
    <feat-content :article-data="articleData"></feat-content>
  </div>
</template>

<script>
import FeatContent from "../common/FeatContent.vue";
import ImgContent from "../common/ImgContent.vue";
import ProdContent from "../common/ProdContent.vue";


export default {
  name: "InCabin",
  components: {
    FeatContent,
    ImgContent,
    ProdContent
  },
  computed: {
    // scrollY() {
    //   return this.$store.getters["ModuleHeader/ScrollY"]
    // },
    articleData() {
      return this.$store.getters["PostData"].inCabinData;
    }
  },
  methods: {
    // handleScroll() {
    //   return this.$store.commit("ModuleHeader/handleScroll");
    // }
  },
  // created() {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // beforeUnmount() {
  //   this.$store.getters["HeaderData"].scrollY = 0;
  //   window.removeEventListener('scroll', this.handleScroll);
  // },

}
</script>