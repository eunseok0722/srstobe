<template>
  <div class="offi-contents">
<!--    <div class="content head-content img-content">-->
<!--      <div class="content-header" :class="{'header-fix-padding': scrollY}">-->
<!--        <p class="txt-r">{{ articleData.ctgr }}</p>-->
<!--        <div class="header-fix-div" :class="{'header-fix': scrollY}">-->
<!--          <h3 class="tit-cont fw-r">{{ articleData.tit }}</h3>-->
<!--        </div>-->
<!--      </div>-->
<!--      <section>-->
<!--        <article class="img-cont">-->
<!--          <div class="tit-box">-->
<!--            <div class="txt-wrap">-->
<!--              <h4 class="tit-head fw-r">{{ articleData.imgCont.tit }}</h4>-->
<!--              <p class="tit-art"> {{ articleData.imgCont.subTit }}-->
<!--              </p>-->
<!--            </div>-->
<!--            <template v-if="articleData.imgCont.prodImg">-->
<!--              <div class="img-wrap">-->
<!--                <img :src="articleData.imgCont.prodImg" :alt="articleData.imgCont.prodAlt">-->
<!--                <div class="img-tag">-->
<!--                  <p class="tit-l">{{ articleData.imgCont.prodAlt }}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </template>-->
<!--            -->
<!--          </div>-->
<!--          <div class="img-box" :class="articleData.imgCont.type">-->
<!--            <img :src="articleData.imgCont.mainImg" :alt="articleData.imgCont.mainAlt">-->
<!--          </div>-->
<!--        </article>-->
<!--      </section>-->
<!--    </div>-->
  <img-content :article-data="articleData"></img-content>


<!--    <div class="content feat-content">-->
<!--      <section>-->
<!--        <article class="feat-cont">-->
<!--          <ul class="feat-list">-->
<!--            <li class="list-item" v-for="item in articleData.feat" :key="item.id">-->
<!--              <div class="feat-item ty02" :class="item.class">-->
<!--                <div class="tit-box">-->
<!--                  <p class="tit-art-04">{{ item.tit }}</p>-->
<!--                </div>-->
<!--                <div class="cont-box">-->
<!--                  <p class="txt-l" v-html="item.cont">-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </article>-->
<!--      </section>-->
<!--    </div>-->
  <feat-content :article-data="articleData"></feat-content>
  </div>
</template>

<script>
import FeatContent from "../common/FeatContent.vue";
import ImgContent from "../common/ImgContent.vue";

export default {
  name: "Elevator",
  components: {
    FeatContent,
    ImgContent
  },
  props: {
    id: String
  },
  computed: {
    // breadcrumbData() {
    //   let brd = this.$store.getters["HeaderData"].breadcrumbData;
    //   brd.dp01.opt = ['APPLICATIONS', 'PRODUCTS', 'DESIGN', 'ABOUT SRS'];
    //   brd.dp01.dft = 'APPLICATIONS';
    //   brd.dp02.opt = ['Automotive', 'Industrial', 'Healthcare', 'Smart Places'];
    //   brd.dp02.dft = 'Smart Places';
    //   brd.dp03.opt = ['Elevator', 'Retailer', 'Office', 'Smart Pole PiNNN', 'Security'];
    //   brd.dp03.dft = 'Elevator';
    // },
    scrollY() {
      return this.$store.getters["ModuleHeader/ScrollY"]
    },
    // productsData() {
    //   // return this.$store.getters["PostData"].productsData
    //   let dataBase = this.$store.getters["PostData"].productsData;
    //   for (let i = 0; i < dataBase.length; i++) {
    //     if (dataBase[i].id == this.$route.params.id) {
    //       return dataBase[i];
    //     }
    //   }
    // },
    articleData() {
      return this.$store.getters["PostData"].officeData;
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