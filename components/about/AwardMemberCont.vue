<template>
  <div class="content-bg-wrap gray">
    <div class="content award-member-content">
      <!--  Content header | 제목  -->
      <div class="content-header">
        <h3 class="tit-sec">Meet Radar Professionals at Smart Radar System</h3>
      </div>
      <!--  Content header | 제목  -->
      <!--  Content body | 본문   -->
      <section>
          <ul class="team-list">
            <li class="list-item" v-for="item in teamData" :key="item.id">
              <article class="team-item" :class="{on: item.state}">
                <div class="img-box">
                  <div class="img-layer">
                      <div class="btn-wrap">
                          <button class="btn-cross" @click="item.state = true">
                            <i class="blind">더 보기</i>
                          </button>
                      </div>
                  </div>
                  <div class="img-wrap">
                    <img :src="path+item.img" :alt="item.name">
                  </div>
                </div>
                <div class="txt-box">
                  <p class="prf-name tit-art-02">{{ item.name }}</p>
                  <p class="prf-tit txt-l">{{ item.tit }}</p>
                </div>
              </article>
              <article class="layer-item" :class="{on: item.state}">
                <div class="btn-wrap">
                  <button class="btn-cross" @click="item.state = false">
                    <i class="blind">추가정보 닫기</i>
                  </button>
                </div>
                <div class="txt-box">
                  <p class="prf-name tit-art-02">{{ item.name }}</p>
                  <p class="prf-tit txt-l">{{ item.tit }}</p>
                </div>
                <div class="career-list-wrap">
                  <ul class="career-list">
                    <li class="list-item tit-r">
                      {{ item.career01 }}
                    </li>
                    <li class="list-item tit-r">
                      {{ item.career02 }}
                    </li>
                    <li class="list-item tit-r">
                      {{ item.career03 }}
                    </li>
                    <li class="list-item tit-r">
                      {{ item.career04 }}
                    </li>
                    <li class="list-item tit-r">
                      {{ item.career05 }}
                    </li>
                    <li class="list-item tit-r" v-if="item.career06">
                      {{ item.career06 }}
                    </li>
                  </ul>
                </div>
                <div class="intro-wrap">
                  <p class="intro txt-r">
                    {{ item.intro }}
                  </p>
                </div>
              </article>
            </li>
          </ul>
      </section>
      <!--   //content body | 본문   -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AwardHeadCont",
  data() {
    return {
      layer: [
        {id: 1, state: false},
        {id: 1, state: false},
        {id: 1, state: false},
      ]
    }
  },
  computed: {
    img() {
      return `../assets/images/img_about_001.png`
    },
    path() {
      return this.$store.state.path.img;
    },
    teamData() {
      return this.$store.getters["ArticleData"].teamData
    },

  },

}
</script>