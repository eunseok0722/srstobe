<template>
  <div class="news-post-contents">
    <div class="content post-content" :class="{'header-fix-padding': scrollY}">
      <div class="content-header" :class="{'header-fix': scrollY}">
        <h3 class="tit-cont">newsroom</h3>
      </div>
      <section>
        <article class="post-cont">
          <div class="post-tit">
            <div class="tit-box">
              <h3 class="tit-cont">SRS at CES2022 in Las Vegas Jan 5~8, 2022</h3>
              <p class="txt-l">Dec 16, 2021</p>
            </div>
            <div class="img-wrap">
              <iframe src="https://www.youtube.com/embed/WnjReLoMDBM" title="YouTube video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
            </div>
          </div>
          <div class="post-txt">
            <p class="sent-01 txt-cont">CES2022 CES <br> is just around the corner, so please stay tuned!</p>
            <p class="sent-02 txt-cont">We invite you to our booth where you’ll see how the world-leading 4D Imaging
              Radar can work not only for the Automotive
              but also for other Smart City applications.
              <br><br>
              Booth location: WEST Hall #4477</p>
          </div>
        </article>
        <div class="btn-list-wrap">
          <ul class="btn-list">
            <li class="list-item">
              <div class="btn-wrap btn-ty01">
                <a href="#" class="lb-tit-r">List</a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsRoomPost",
  components: {
    // TextArticle,
  },
  props: {
    id: Number
  },
  computed: {
    // postData() {
    //   let dataBase = this.$store.getters["PostData"].newsPost;
    //   for (let i = 0; i < dataBase.length; i++) {
    //     if (dataBase[i].id == this.$route.params.id) {
    //       return dataBase[i];
    //     }
    //   }
    // },
    img() {
      return `../assets/images/temp/img_temp_002.png`
    },
    scrollY() {
      return this.$store.getters["ModuleHeader/ScrollY"]
    },
    // PostData() {
    //   let dataBase = this.$store.getters["PostData"].newsPost;
    //   for (let i = 0; i < dataBase.length; i++) {
    //     if (dataBase[i].id == this.$route.params.id) {
    //       return dataBase[i].postData;
    //     }
    //   }
    // }
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
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>