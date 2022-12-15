<template>
  <!-- wrapper -->
  <div id="wrapper">
    <!-- header component -->
    <comp-header :breadcrumb="false" type="ty02" :main-header="true"></comp-header>
    <!-- //header component -->

    <!-- container -->
    <div id="container">
      <!-- content | 본문  -->
      <div class="content">
        <!--  content-header | 본문 머릿말  -->
        <div class="content-header">

        </div>
        <!--  //content-header | 본문 머릿말  -->

        <!--  section |  -->
        <section class="section">
          <article class="main-visual">
            <div class="visual-cont">
              <div class="img-box">
                <img :src="imgPath" alt="SRS 소개 이미지" class="">
              </div>
              <div class="d2-list-wrap">
                <ul class="d2-list">
                  <!--  d2 | Automotive  -->
                  <li class="d2-list-item ty01">
                    <div class="d2-item">
                      <h3 class="blind">Automotive</h3>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <div class="d3-item ty01" @mouseenter="itemActivate(0)" @mouseleave="itemInactivate(0)"
                               :class="{active: itemState[0].active}">
                            <router-link class="tit-l" to="/applications/autonomous-driving">
                              <span class="num">1</span>
                              <span class="tit">Autonomous Driving</span>
                            </router-link>
                          </div>
                        </li>
                        <li class="d3-list-item">
                          <div class="d3-item ty02" @mouseenter="itemActivate(1)" @mouseleave="itemInactivate(1)"
                               :class="{active: itemState[1].active}">
                            <router-link class="tit-l" to="/applications/uam">
                              <span class="num">2</span>
                              <span class="tit">UAM</span>
                            </router-link>
                          </div>
                        </li>
                        <li class="d3-list-item">
                          <div class="d3-item ty03" @mouseenter="itemActivate(2)" @mouseleave="itemInactivate(2)"
                               :class="{active: itemState[2].active}">
                            <router-link class="tit-l" to="/applications/in-cabin">
                              <span class="num">3</span>
                              <span class="tit">In-Cabin</span>
                            </router-link>
                          </div>
                        </li>
                        <li class="d3-list-item">
                          <div class="d3-item ty04" @mouseenter="itemActivate(3)" @mouseleave="itemInactivate(3)"
                               :class="{active: itemState[3].active}">
                            <a class="tit-l" href="#">
                              <span class="num">4</span>
                              <span class="tit">Last Mile Delivery</span>
                            </a>
                          </div>
                        </li>
                        <li class="d3-list-item">
                          <div class="d3-item ty05" @mouseenter="itemActivate(4)" @mouseleave="itemInactivate(4)"
                               :class="{active: itemState[4].active}">
                            <a class="tit-l" href="#">
                              <span class="num">5</span>
                              <span class="tit">AGV</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <!--  // d2 | Automotive  -->
                  <!--  d2 | Industrial  -->
                  <li class="d2-list-item ty02">
                    <div class="d2-item">
                      <h3 class="blind">Industrial</h3>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <div class="d3-item ty06" @mouseenter="itemActivate(5)" @mouseleave="itemInactivate(5)"
                               :class="{active: itemState[5].active}">
                            <router-link class="tit-l" to="/applications/construction-vehicle">
                              <span class="num">6</span>
                              <span class="tit">Construction Vehicle</span>
                            </router-link>
                          </div>
                        </li>
                        <li class="d3-list-item">
                          <div class="d3-item ty07" @mouseenter="itemActivate(6)" @mouseleave="itemInactivate(6)"
                               :class="{active: itemState[6].active}">
                            <a class="tit-l" href="#">
                              <span class="num">7</span>
                              <span class="tit">Factory Robotics</span>
                            </a>
                          </div>
                        </li>
                        <li class="d3-list-item">
                          <div class="d3-item ty08" @mouseenter="itemActivate(7)" @mouseleave="itemInactivate(7)"
                               :class="{active: itemState[7].active}">
                            <a class="tit-l" href="#">
                              <span class="num">8</span>
                              <span class="tit">Level-meter</span>
                            </a>
                          </div>
                        </li>
                        <li class="d3-list-item">
                          <div class="d3-item ty09" @mouseenter="itemActivate(8)" @mouseleave="itemInactivate(8)"
                               :class="{active: itemState[8].active}">
                            <a class="tit-l" href="#">
                              <span class="num">9</span>
                              <span class="tit">Defense Drone</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <!--  // d2 | Industrial  -->
                  <!--  d2 | Healthcare  -->
                  <li class="d2-list-item ty03">
                    <div class="d2-item">
                      <h3 class="blind">Healthcare</h3>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <div class="d3-item r ty10" @mouseenter="itemActivate(9)" @mouseleave="itemInactivate(9)"
                               :class="{active: itemState[9].active}">
                            <router-link to="/applications/home" class="tit-l">
                              <span class="num">10</span>
                              <span class="tit">Home</span>
                            </router-link>
                          </div>
                        </li>
                        <li class="d3-list-item">
                          <div class="d3-item ty11" @mouseenter="itemActivate(10)" @mouseleave="itemInactivate(10)"
                               :class="{active: itemState[10].active}">
                            <router-link class="tit-l" to="/applications/hospital-nursing-home">
                              <span class="num">11</span>
                              <span class="tit">Hospital/Nursing Home</span>
                            </router-link>
                          </div>
                        </li>
                        <li class="d3-list-item">
                          <div class="d3-item ty12" @mouseenter="itemActivate(11)" @mouseleave="itemInactivate(11)"
                               :class="{active: itemState[11].active}">
                            <router-link class="tit-l" to="/applications/puile-bathroom">
                              <span class="num">12</span>
                              <span class="tit">Puile Bathroom</span>
                            </router-link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <!--  // d2 | Healthcare  -->
                  <!--  d2 | Smart Places  -->
                  <li class="d2-list-item ty04">
                    <div class="d2-item">
                      <h3 class="blind">Smart Places</h3>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <div class="d3-item ty13" @mouseenter="itemActivate(12)" @mouseleave="itemInactivate(12)"
                               :class="{active: itemState[12].active}">
                            <router-link class="tit-l" to="/applications/elevator">
                              <span class="num">13</span>
                              <span class="tit">Elevator</span>
                            </router-link>
                          </div>
                        </li>
                        <li class="d3-list-item">
                          <div class="d3-item ty14" @mouseenter="itemActivate(13)" @mouseleave="itemInactivate(13)"
                               :class="{active: itemState[13].active}">
                            <a class="tit-l" href="#">
                              <span class="num">14</span>
                              <span class="tit">Retailer</span>
                            </a>
                          </div>
                        </li>
                        <li class="d3-list-item">
                          <div class="d3-item r ty15" @mouseenter="itemActivate(14)" @mouseleave="itemInactivate(14)"
                               :class="{active: itemState[14].active}">
                            <router-link class="tit-l" to="/applications/office">
                              <span class="num">15</span>
                              <span class="tit">Office</span>
                            </router-link>
                          </div>
                        </li>
                        <li class="d3-list-item">
                          <div class="d3-item ty16" @mouseenter="itemActivate(15)" @mouseleave="itemInactivate(15)"
                               :class="{active: itemState[15].active}">
                            <router-link class="tit-l" to="/applications/smart-pole-pinnn">
                              <span class="num">16</span>
                              <span class="tit">Smart Pole PINNN</span>
                            </router-link>
                          </div>
                        </li>
                        <li class="d3-list-item">
                          <div class="d3-item ty17" @mouseenter="itemActivate(16)" @mouseleave="itemInactivate(16)"
                               :class="{active: itemState[16].active}">
                            <a class="tit-l" href="#">
                              <span class="num">17</span>
                              <span class="tit">Security</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </article>
        </section>
        <!--  //section |  -->
      </div>
      <!-- //content | 본문  -->
    </div>
    <!-- //container -->

    <!-- footer component -->
<!--    <comp-footer></comp-footer>-->
    <!-- //footer component -->

  </div>
  <!-- //wrapper -->
</template>

<script>
import MainHeader from '../common/MainHeader.vue';
import CompHeader from '../common/CompHeader.vue';
import CompFooter from '../common/CompFooter.vue';

export default {
  name: "SrsMain",
  data() {
    return {
      imgPath: `../assets/images/img_main_visual_001.png`,

    }
  },
  computed: {
    itemState: function () {
      return this.$store.getters["ModuleMain/MainData"].itemState
    }
    // imgPath() {
    //   return this.$store.state.path.img
    // },
    // newsTickerList() {
    //   return this.$store.state.moduleMainPage.newsTickerList
    // },
    // moduleMainPage() {
    //   return this.$store.state.moduleMainPage.headlineDetail
    // }
  },
  methods: {
    itemActivate(index) {
      this.$store.commit('ModuleMain/itemActivate', index)
    },
    itemInactivate(index) {
      this.$store.commit('ModuleMain/itemInactivate', index)
    }
  },
  components: {
    MainHeader,
    CompHeader,
    CompFooter,
    // 'main-magazine-list': MainMagazineList,
    // 'podcast-list': PodcastList,
    // 'main-author': MainAuthor,
    // 'news-ticker': NewsTicker,
  },
}
</script>

