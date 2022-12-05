<template>
  <!-- header | 머릿말 -->
  <div id="header">
    <div class="sub-header" @mouseleave="d2Inactivate" :class="type">
      <!--  gnb | general navigation  -->
      <div class="gnb-wrap">
        <ul class="nav-list">
          <!--  d1 | APPLICATIONS  -->
          <li class="list-item" v-on:mouseenter="d2Activate(0)">
            <h2 class="tit-l">
              <a href="#" class="nav-item">
                APPLICATIONS
              </a>
            </h2>
            <div class="d2-list-wrap v1" :class="{active: d2State[0].active}">

              <div class="d2-section">
                <div class="d2-section-tit">
                  <p class="tit-m">Mobility</p>
                </div>
                <ul class="d2-list">
                  <!--  d2 | Automotive  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <p class="txt-s blind">Mobility</p>
                        <h3 class="tit-m">AutoMotive</h3>
                      </div>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <router-link to="/applications/autonomous-driving" class="txt-r">
                            Autonomous Driving
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            UAM
                          </a>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            In-Cabin
                          </a>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Last Mile Delivery
                          </a>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
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
                        <h3 class="tit-m">Industrial</h3>
                      </div>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Construction Vehicle
                          </a>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Factory Robotics
                          </a>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Level-meter
                          </a>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Defense Drone
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <!--  //d2 | Industrial   -->
                </ul>
              </div>
              <div class="d2-section">
                <div class="d2-section-tit">
                  <p class="tit-m">Smartcity</p>
                </div>
                <ul class="d2-list">
                  <!--  d2 | Healthcare   -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <p class="txt-s blind">Smartcity</p>
                        <h3 class="tit-m">Healthcare</h3>
                      </div>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Home
                          </a>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Hospital/Nursing Home
                          </a>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
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
                        <h3 class="tit-m">Smart Places</h3>
                      </div>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Elevator
                          </a>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Retailer
                          </a>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Office
                          </a>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Smart Pole PINNN
                          </a>
                        </li>
                        <li class="d3-list-item">
                          <a href="#" class="txt-r">
                            Security
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <!--  //d2 | Smart Places   -->
                </ul>
              </div>
            </div>
          </li>
          <!--  //d1 | APPLICATIONS  -->

          <!--  d1 | PRODUCTS  -->
          <li class="list-item" v-on:mouseenter="d2Activate(1)">
            <h2 class="tit-l">
              <a href="#" class="nav-item">
                PRODUCTS
              </a>
            </h2>
            <div class="d2-list-wrap v2" :class="{active: d2State[1].active}">

              <div class="d2-section">
                <div class="d2-section-tit">
                  <p class="tit-m">
                    Imaging Radar
                  </p>
                </div>
                <ul class="d2-list">
                  <!--  d2 | RETINA-Next Gen  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m">RETINA-Next Gen</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/retina-next-gen">
                          <img :src="d2ItemData[0].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | RETINA-Next Gen  -->
                  <!--  d2 | RETINA-4F  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m">RETINA-4F</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/retina-4f">
                          <img :src="d2ItemData[1].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | RETINA-4F  -->
                  <!--  d2 | RETINA-4S  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m">RETINA-4S</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/retina-4s">
                          <img :src="d2ItemData[2].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | RETINA-4S  -->
                  <!--  d2 | RETINA-4A  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m">RETINA-4A</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/retina-4a">
                          <img :src="d2ItemData[3].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | RETINA-4A  -->
                </ul>
              </div>
              <div class="d2-section">
                <div class="d2-section-tit">
                  <p class="tit-m">
                    Single Radar & Module
                  </p>
                </div>
                <ul class="d2-list">
                  <!--  d2 | IRISt  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m">IRISt</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/irist">
                          <img :src="d2ItemData[4].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | IRISt  -->
                  <!--  d2 | IRISc  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m">IRISc</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/irisc">
                          <img :src="d2ItemData[5].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | IRISc  -->

                  <!--  d2 | IRISm   -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m">IRISm</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/irism">
                          <img :src="d2ItemData[6].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | IRISm   -->
                  <!--  d2 | SE68-51W   -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="tit-m">SE68-51W</h3>
                      </div>
                      <div class="img-box">
                        <router-link to="/products/se68-51w">
                          <img :src="d2ItemData[7].path" alt="">
                        </router-link>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | SE68-51W  -->
                </ul>
              </div>


            </div>
          </li>
          <!--  //d1 | PRODUCTS  -->
          <!--  d1 | DESIGN  -->
          <li class="list-item" v-on:mouseenter="d2Activate(2)">
            <h2 class="tit-l">
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
                      <h3 class="tit-m">4D Imaging Radar</h3>
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
                      <h3 class="tit-m">Software Defined Vehicle</h3>
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
                      <h3 class="tit-m">SWaP sensor</h3>
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
                      <h3 class="tit-m">Edge Device with ML</h3>
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
            <h2 class="tit-l">
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
                      <h3 class="tit-m">
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
                      <h3 class="tit-m">
                        <router-link to="/about/awards">Awards & Patents</router-link>
                      </h3>
                    </div>
                  </div>
                </li>
                <!--  // d2 | Awards & Patents  -->
                <!--  d2 | Team building  -->
                <li class="d2-list-item">
                  <div class="d2-item">
                    <div class="tit-box">
                      <h3 class="tit-m">
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
                      <h3 class="tit-m">
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
                      <h3 class="tit-m">
                        <router-link to="/about/newsroom">
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
      ],
      d2ItemData: [
          {id: 1, path: `../assets/images/img_retina_next_gen_002.png` },
          {id: 1, path: `../assets/images/img_retina_4f_002.png` },
          {id: 1, path: `../assets/images/img_retina_4sn_002.png` },
          {id: 1, path: `../assets/images/img_retina_4a_002.png` },
          {id: 1, path: `../assets/images/img_irist_002.png` },
          {id: 1, path: `../assets/images/img_irisc_002.png` },
          {id: 1, path: `../assets/images/img_irism_002.png` },
          {id: 1, path: `../assets/images/img_se68_51w_002.png` },
      ]
    }
  },
  computed: {
    path() {
      return `../assets/images/temp/img_temp_001.png`
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
  // beforeUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
  components: {
    CompBreadcrumb,
    MainHeader,
  }
}
</script>

