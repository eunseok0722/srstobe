<template>
  <div class="reta-contents">
    <img-content :article-data="articleData"></img-content>
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
    articleData() {
      return this.$store.getters["PostData"].infrastructureData;
    }
  },
}
</script>