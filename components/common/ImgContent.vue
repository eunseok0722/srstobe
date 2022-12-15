<template>
  <div class="content head-content img-content">
    <div class="content-header" :class="{'header-fix-padding': scrollY}">
      <p class="txt-r">{{ articleData.ctgr }}</p>
      <div class="header-fix-div" :class="{'header-fix': scrollY}">
        <h3 class="tit-cont fw-r">{{ articleData.tit }}</h3>
      </div>
    </div>
    <section>
      <article class="img-cont">
        <div class="tit-box">
          <div class="head-sec">
            <div class="txt-wrap">
              <template v-if="articleData.imgCont.subTit02">
                <div class="txt-inner-wrap">
                  <p class="tit-art-04">{{ articleData.imgCont.subTit02 }}</p>
                  <h4 class="tit-head fw-r">{{ articleData.imgCont.tit }}</h4>
                </div>
                <p class="tit-art"> {{ articleData.imgCont.subTit }}</p>
              </template>
              <template v-else>
                <h4 class="tit-head fw-r">{{ articleData.imgCont.tit }}</h4>
                <p class="tit-art"> {{ articleData.imgCont.subTit }}</p>
              </template>
            </div>
            <template v-if="articleData.imgCont.prodImg">
              <div class="img-wrap" :class="articleData.imgCont.prodImgType">
                <img :src="articleData.imgCont.prodImg" :alt="articleData.imgCont.prodAlt">
                <div class="img-tag">
                  <p class="tit-l">{{ articleData.imgCont.prodAlt }}</p>
                </div>
              </div>
            </template>
          </div>
          <div class="feat-sec">
            <ul class="feat-info-list">
              <li class="list-item" v-for="item in articleData.imgCont.featInfo" :key="item.id">
                <div class="feat-info-item">
                  <div class="ico-box" :class="item.class">
                  </div>
                  <div class="tit-l">
                    {{ item.feat }}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="img-box" :class="articleData.imgCont.mainType">
          <div class="main-img">
            <img :src="articleData.imgCont.mainImg" :alt="articleData.imgCont.mainAlt">
          </div>
          <div class="sub-img" v-if="articleData.imgCont.subImg">
            <img :src="articleData.imgCont.subImg" :alt="articleData.imgCont.subAlt">
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "ImgContent",
  props: {
    articleData:Object
  },
  computed: {
    scrollY() {
      return this.$store.getters["ModuleHeader/ScrollY"]
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    this.$store.getters["HeaderData"].scrollY = 0;
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>