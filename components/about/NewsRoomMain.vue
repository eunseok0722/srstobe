<template>
  <div class="content news-content">
    <!--  Content header | 제목  -->
    <div class="content-header">
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
    }
  },
  components: {
    ArticleType
  },

}
</script>