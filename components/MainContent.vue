<template>
  <!-- content | 본문  -->
  <div class="content">
    <!--  content-header | 본문 머릿말  -->
    <div class="content-header">

    </div>
    <!--  //content-header | 본문 머릿말  -->

    <!--  section |  -->
    <section class="section">
      <article class="main-visual">
        <img :src="imgPath" alt="SRS 소개 이미지" class="visual-cont">
      </article>
    </section>
    <!--  //section |  -->
  </div>
  <!-- //content | 본문  -->
</template>

<script>
// import MainMagazineList from '../components/MainMagazineList.vue';
// import MainAuthor from "../components/MainAuthor.vue"
// import PodcastList from "./PodcastList.vue";
// import NewsTicker from "../components/NewsTicker.vue";

export default {
  name: "MainContent",
  data() {
    return {
      imgPath: `../assets/images/img_main_visual_001.png`
    }
  },
  computed: {
    // imgPath() {
    //   return this.$store.state.path.img
    // },
    // newsTickerList() {
    //   return this.$store.state.moduleMainPage.newsTickerList
    // },
    // headlineDetail() {
    //   return this.$store.state.moduleMainPage.headlineDetail
    // }
  },
  components: {
    // 'main-magazine-list': MainMagazineList,
    // 'podcast-list': PodcastList,
    // 'main-author': MainAuthor,
    // 'news-ticker': NewsTicker,
  },
}
</script>

