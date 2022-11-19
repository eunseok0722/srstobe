<template>
  <!-- header | 머릿말 -->
  <div id="header">
    <div class="sub-header" @mouseleave="d2Inactivate" :class="type">
      <!--  gnb | general navigation  -->
      <div class="gnb-wrap">
        <ul class="nav-list">
          <!--  d1 | APPLICATIONS  -->
          <li class="list-item" v-on:mouseenter="d2Activate(0)">
            <h2 class="tit-h1">
              <a href="#" class="nav-item">
                APPLICATIONS
              </a>
            </h2>
            <div class="d2-list-wrap v1" :class="{active: d2State[0].active}">
              <ul class="d2-list">
                <!--  d2 | Automotive  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <p class="txt-s">Mobility</p>
                      <h3 class="tit-h3">AutoMotive</h3>
                    </div>
                    <ul class="d3-list">
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          Autonomous Driving
                        </a>
                      </li>
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          UAM
                        </a>
                      </li>
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          In-Cabin
                        </a>
                      </li>
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          Last Mile Delivery
                        </a>
                      </li>
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          AGV
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <!--  //d2 | Automotive  -->
                <!--  d2 | Industrial   -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <p class="txt-s"></p>
                      <h3 class="tit-h3">Industrial</h3>
                    </div>
                    <ul class="d3-list">
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          Construction Vehicle
                        </a>
                      </li>
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          Factory Robotics
                        </a>
                      </li>
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          Level-meter
                        </a>
                      </li>
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          Defense Drone
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <!--  //d2 | Industrial   -->
                <!--  d2 | Healthcare   -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <p class="txt-s">Smartcity</p>
                      <h3 class="tit-h3">Healthcare</h3>
                    </div>
                    <ul class="d3-list">
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          Home
                        </a>
                      </li>
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          Hospital/Nursing Home
                        </a>
                      </li>
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          Puile Bathroom
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <!--  //d2 | Healthcare   -->
                <!--  d2 | Smart Places   -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <p class="txt-s"></p>
                      <h3 class="tit-h3">Smart Places</h3>
                    </div>
                    <ul class="d3-list">
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          Elevator
                        </a>
                      </li>
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          Retailer
                        </a>
                      </li>
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          Office
                        </a>
                      </li>
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          Smart Pole PINNN
                        </a>
                      </li>
                      <li class="d3-list-item">
                        <a href="#" class="txt-s">
                          Security
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <!--  //d2 | Smart Places   -->
              </ul>
            </div>
          </li>
          <!--  //d1 | APPLICATIONS  -->
          <!--  d1 | PRODUCTS  -->
          <li class="list-item" v-on:mouseenter="d2Activate(1)">
            <h2 class="tit-h1">
              <a href="#" class="nav-item">
                PRODUCTS
              </a>
            </h2>
            <div class="d2-list-wrap v2" :class="{active: d2State[1].active}">
              <ul class="d2-list">
                <!--  d2 | RETINA-Next Gen  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <p class="txt-s">Imaging Radar</p>
                      <h3 class="tit-h3">RETINA-Next Gen</h3>
                    </div>
                    <div class="img-box">
                      <a href="#">
                        <img :src="path" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <!--  // d2 | RETINA-Next Gen  -->
                <!--  d2 | RETINA-4F  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-h3">RETINA-4F</h3>
                    </div>
                    <div class="img-box">
                      <a href="#">
                        <img :src="path" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <!--  // d2 | RETINA-4F  -->
                <!--  d2 | IRISt  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <p class="txt-s">Single Radar & Module</p>
                      <h3 class="tit-h3">IRISt</h3>
                    </div>
                    <div class="img-box">
                      <a href="#">
                        <img :src="path" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <!--  // d2 | IRISt  -->
                <!--  d2 | IRISc  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-h3">IRISc</h3>
                    </div>
                    <div class="img-box">
                      <a href="#">
                        <img :src="path" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <!--  // d2 | IRISc  -->
                <!--  d2 | RETINA-4S  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-h3">RETINA-4S</h3>
                    </div>
                    <div class="img-box">
                      <a href="#">
                        <img :src="path" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <!--  // d2 | RETINA-4S  -->
                <!--  d2 | RETINA-4A  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-h3">RETINA-4A</h3>
                    </div>
                    <div class="img-box">
                      <a href="#">
                        <img :src="path" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <!--  // d2 | RETINA-4A  -->
                <!--  d2 | IRISm   -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-h3">IRISm</h3>
                    </div>
                    <div class="img-box">
                      <a href="#">
                        <img :src="path" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <!--  // d2 | IRISm   -->
                <!--  d2 | SE68-51W   -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-h3">SE68-51W</h3>
                    </div>
                    <div class="img-box">
                      <a href="#">
                        <img :src="path" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <!--  // d2 | SE68-51W  -->
              </ul>
            </div>
          </li>
          <!--  //d1 | PRODUCTS  -->
          <!--  d1 | DESIGN  -->
          <li class="list-item" v-on:mouseenter="d2Activate(2)">
            <h2 class="tit-h1">
              <a href="#" class="nav-item">
                DESIGN
              </a>
            </h2>
            <div class="d2-list-wrap v3" :class="{active: d2State[2].active}">
              <ul class="d2-list">
                <!--  d2 | 4D Imaging Radar  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <p class="txt-s"></p>
                      <h3 class="tit-h3">4D Imaging Radar</h3>
                    </div>
                    <div class="img-box">
                      <a href="#">
                        <img :src="path" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <!--  // d2 | 4D Imaging Radar  -->
                <!--  d2 | Software Defined Vehicle  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <p class="txt-s"></p>
                      <h3 class="tit-h3">Software Defined Vehicle</h3>
                    </div>
                    <div class="img-box">
                      <a href="#">
                        <img :src="path" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Software Defined Vehicle  -->
                <!--  d2 | SWaP sensor  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <p class="txt-s"></p>
                      <h3 class="tit-h3">SWaP sensor</h3>
                    </div>
                    <div class="img-box">
                      <a href="#">
                        <img :src="path" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <!--  // d2 | SWaP sensor  -->
                <!--  d2 | Edge Device with ML  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <p class="txt-s"></p>
                      <h3 class="tit-h3">Edge Device with ML</h3>
                    </div>
                    <div class="img-box">
                      <a href="#">
                        <img :src="path" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Edge Device with ML  -->

              </ul>
            </div>
          </li>
          <!--  //d1 | DESIGN  -->
          <!--  d1 | ABOUT SRS  -->
          <li class="list-item" v-on:mouseenter="d2Activate(3)">
            <h2 class="tit-h1">
              <a href="#" class="nav-item">
                ABOUT SRS
              </a>
            </h2>
            <div class="d2-list-wrap v4" :class="{active: d2State[3].active}">
              <ul class="d2-list">
                <!--  d2 |Investors & Partners  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-h3">
                        <a href="#">Investors & Partners</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Investors & Partners  -->
                <!--  d2 | Awards & Patents  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-h3">
                        <a href="#">Awards & Patents</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Awards & Patents  -->
                <!--  d2 | Team building  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-h3">
                        <a href="#">Team building</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Team building  -->
                <!--  d2 | Contacts  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-h3">
                        <a href="#">Contacts</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Contacts  -->
                <!--  d2 | Newsroom  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-h3">
                        <router-link to="/about">
                          Newsroom
                        </router-link>
                      </h3>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Newsroom  -->
              </ul>
            </div>
          </li>
          <!--  //d1 | ABOUT SRS  -->
        </ul>
      </div>
      <!--  gnb | general navigation   -->
      <!--  breadcrumb | breadcrumb navigation  -->
      <template v-if="breadcrumb">
        <comp-breadcrumb></comp-breadcrumb>
      </template>
      <!--  breadcrumb | breadcrumb navigation  -->
    </div>
    <!--  main-header | Depth2 gnb Navigation  -->
    <template v-if="mainHeader">
      <main-header></main-header>
    </template>
    <!--  //main-header | Depth2 gnb Navigation  -->
  </div>
  <!-- //header | 머릿말 -->
</template>

<script>
import CompBreadcrumb from "./CompBreadcrumb.vue";
import MainHeader from "./MainHeader.vue";

export default {
  name: "compHeader",
  props: {
    type: String,
    breadcrumb: Boolean,
    mainHeader: Boolean,
  },
  data() {
    return {
      d2State: [
        {id: 1, active: false},
        {id: 2, active: false},
        {id: 3, active: false},
        {id: 4, active: false},
      ]
    }
  },
  computed: {
    path() {
      return `../assets/images/img_temp_001.png`
    }
    // imgPath() {
    //   return this.$store.state.path.img
    // },

  },
  methods: {
    d2Activate(index) {
      for (let i = 0; i < this.d2State.length; i++) {
        this.d2State[i].active = false
      }
      this.d2State[index].active = true
    },
    d2Inactivate() {
      for (let i = 0; i < this.d2State.length; i++) {
        this.d2State[i].active = false
      }
    }
    // navChange() {
    //   this.$store.commit('moduleHeader/navChange')
    // },
    // handleScroll() {
    //   this.$store.commit('moduleHeader/handleScroll')
    // }
  },
  // created() {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
  components: {
    CompBreadcrumb,
    MainHeader,
  }
}
</script>

