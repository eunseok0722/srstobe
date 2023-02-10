<template>
  <div class="auto-contents">
    <img-content :article-data="articleData"></img-content>
    <feat-content :article-data="articleData"></feat-content>
<!--    <div class="content feat-content">-->
<!--      <section>-->
<!--        <article class="feat-cont">-->
<!--          <ul class="feat-list">-->
<!--            <li class="list-item" v-for="item in autonomousData.feat" :key="item.id">-->
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
  </div>
</template>

<script>
import ImgContent from "../common/ImgContent.vue";
import FeatContent from "../common/FeatContent.vue";

export default {
  name: "AutonomousDriving",
  components: {
    ImgContent,
    FeatContent,
  },
  props: {
    id: String
  },
  computed: {
    breadcrumbData() {
      let brd = this.$store.getters["HeaderData"].breadcrumbData;
      brd.dp01.opt = ['APPLICATIONS', 'PRODUCTS', 'DESIGN', 'ABOUT SRS'];
      brd.dp01.dft = 'APPLICATIONS';
      brd.dp02.opt = ['Automotive', 'Industrial', 'Healthcare', 'Smart Places'];
      brd.dp02.dft = 'Automotive';
      brd.dp03.opt = ['Autonomous Driving', 'UAM', 'In-Cabin', 'Last Mile Delivery', 'AGV'];
      brd.dp03.dft = 'Autonomous Driving';
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
    },
    autonomousData() {
      return this.$store.getters["PostData"].autonomousData;
    },
    articleData() {
      return this.$store.getters["PostData"].autonomousData;
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
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
}
</script>