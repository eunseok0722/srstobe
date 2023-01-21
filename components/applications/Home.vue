<template>
  <div class="home-contents">
    <img-content :article-data="articleData"></img-content>
    <feat-content :article-data="articleData"></feat-content>
  </div>
</template>

<script>
import FeatContent from "../common/FeatContent.vue";
import ImgContent from "../common/ImgContent.vue";

export default {
  name: "Home",
  components: {
    FeatContent,
    ImgContent
  },
  computed: {
    articleData() {
      return this.$store.getters["PostData"].homeData;
    }
  }
}
</script>