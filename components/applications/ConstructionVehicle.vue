<template>
  <div class="const-vehi-contents">
    <img-content :article-data="articleData"></img-content>
    <feat-content :article-data="articleData"></feat-content>
  </div>
</template>

<script>
import FeatContent from "../common/FeatContent.vue";
import ImgContent from "../common/ImgContent.vue";
// import SpecContent from "../common/SpecContent.vue";
// import ProdContent from "../common/ProdContent.vue";

export default {
  name: "ConstructionVehicle",
  components: {
    // ProdContent,
    // SpecContent,
    FeatContent,
    ImgContent
  },
  computed: {
    articleData() {
      return this.$store.getters["PostData"].constructionData;
    }
  }
}
</script>