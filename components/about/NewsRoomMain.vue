<template>
  <div class="content news-content">
    <!--  Content header | 제목  -->
    <div class="content-header" :class="{'header-fix': scrollY}">
      <h3 class="tit-cont">newsroom</h3>
    </div>
    <!--  Content header | 제목  -->
    <!--  Content body | 본문   -->
    <article-type :article-data="blgArticle"></article-type>
    <!--   //content body | 본문   -->
  </div>
</template>

<script>
import ArticleType from '../common/ArticleType.vue';

export default {
  name: "AboutMain",
  // props: {
  //   articleData: Object
  // },
  computed: {
    blgArticle() {
      return this.$store.getters["ArticleData"].blgArticle;
    },
    scrollY() {
      return this.$store.getters["HeaderData"].scrollY > 200
    }
  },
  components: {
    ArticleType
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