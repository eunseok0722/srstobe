<template>
  <div class="uam-contents">
    <img-content :article-data="articleData"></img-content>
    <feat-content :article-data="articleData"></feat-content>
    <video-content :article-data="articleData"></video-content>
  </div>
</template>

<script>
import FeatContent from "../common/FeatContent.vue";
import ImgContent from "../common/ImgContent.vue";
import VideoContent from "../common/VideoContent.vue";

export default {
  name: "Agv",
  components: {
    FeatContent,
    ImgContent,
    VideoContent
  },
  computed: {
    articleData() {
      return this.$store.getters["PostData"].agvData;
    }
  }
}
</script>