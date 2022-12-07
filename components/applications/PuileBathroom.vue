<template>
  <div class="bath-contents">
    <img-content :article-data="articleData"></img-content>
    <prod-content :article-data="articleData"></prod-content>
    <spec-content :article-data="articleData"></spec-content>
    <feat-content :article-data="articleData"></feat-content>
  </div>
</template>

<script>
import FeatContent from "../common/FeatContent.vue";
import ImgContent from "../common/ImgContent.vue";
import SpecContent from "../common/SpecContent.vue";
import ProdContent from "../common/ProdContent.vue";

export default {
  name: "PuileBathroom",
  components: {
    ProdContent,
    SpecContent,
    FeatContent,
    ImgContent
  },
  computed: {
    articleData() {
      return this.$store.getters["PostData"].bathroomData;
    }
  }
}
</script>