/* footer component 정의 */
<template>
  <!-- Footer | 꼬리말 -->
  <div id="footer">
    <div class="footer-wrap">
      <section class="sec-addr">
        <article class="art-addr addr-1">
          <h3 class="tit-m">Smart Radar System Inc.</h3>
          <address>
            <span class="txt-m">3rd Floor, Fine Venture Bldg, 41, Seongnam-daero 925gil, Bundan</span>
            <span class="txt-m">+82 1533 0217</span>
          </address>
        </article>
        <article class="art-addr addr-2">
          <h3 class="tit-m">SRS.ai Inc.</h3>
          <address>
            <span class="txt-m">51 Cedarlake, Irvine, CA 92614, USA</span>
            <span class="txt-m">+1 949 677 1989</span>
          </address>
        </article>
      </section>
      <section class="sec-map">
        <div class="gnb-wrap">
          <ul class="nav-list">
            <!--  d1 | APPLICATIONS  -->
            <li class="list-item">
              <h2 class="tit-l">
                <router-link to="/applications/autonomous-driving" class="nav-item">
                  APPLICATIONS
                </router-link>
              </h2>
              <div class="d2-list-wrap v1">
                <ul class="d2-list">
                  <!--  d2 | Automotive  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <p class="txt-s">Mobility</p>
                        <h3 class="txt-r">AutoMotive</h3>
                      </div>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <router-link to="/applications/autonomous-driving" class="txt-s">
                            Autonomous Driving
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link  to="/applications/in-cabin" class="txt-s">
                            In-Cabin
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="" class="txt-s">
                            AGV
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="/applications/uam" class="txt-s">
                            UAM
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="" class="txt-s">
                            Last Mile Delivery
                          </router-link>
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
                        <h3 class="txt-r">Industrial</h3>
                      </div>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <router-link to="/applications/construction-vehicle" class="txt-s">
                            Construction Vehicle
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="" class="txt-s">
                            Factory Robotics
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="" class="txt-s">
                            Level-meter
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="" class="txt-s">
                            Defense Drone
                          </router-link>
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
                        <h3 class="txt-r">Healthcare</h3>
                      </div>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <router-link to="/applications/home" class="txt-s">
                            Home
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="/applications/hospital-nursing-home" class="txt-s">
                            Hospital/Nursing Home
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="/applications/puile-bathroom" class="txt-s">
                            Puile Bathroom
                          </router-link>
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
                        <h3 class="txt-r">Smart Places</h3>
                      </div>
                      <ul class="d3-list">
                        <li class="d3-list-item">
                          <router-link to="/applications/elevator" class="txt-s">
                            Elevator
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="" class="txt-s">
                            Retailer
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="/applications/office" class="txt-s">
                            Office
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="/applications/smart-pole-pinnn" class="txt-s">
                            Smart Pole PINNN
                          </router-link>
                        </li>
                        <li class="d3-list-item">
                          <router-link to="" class="txt-s">
                            Security
                          </router-link>
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
            <li class="list-item">
              <h2 class="tit-l">
                <router-link to="/products/retina-4f" class="nav-item">
                  PRODUCTS
                </router-link>
              </h2>
              <div class="d2-list-wrap v2">
                <ul class="d2-list">
                  <!--  d2 | RETINA-Next Gen  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <p class="txt-s">Imaging Radar</p>
                        <h3 class="txt-r">
                          <router-link to="/products/retina-next-gen">
                            RETINA-Next Gen
                          </router-link>

                        </h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | RETINA-Next Gen  -->
                  <!--  d2 | RETINA-4F  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">
                          <router-link to="/products/retina-4f">
                          RETINA-4F
                          </router-link>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | RETINA-4F  -->
                  <!--  d2 | RETINA-4S  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">
                          <router-link to="/products/retina-4s">
                          RETINA-4S
                          </router-link>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | RETINA-4S  -->
                  <!--  d2 | RETINA-4A  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">
                          <router-link to="/products/retina-4a">
                          RETINA-4A
                          </router-link>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | RETINA-4A  -->
                  <!--  d2 | IRISt  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <p class="txt-s">Single Radar & Module</p>
                        <h3 class="txt-r">
                          <router-link to="/products/irist">
                            IRISt
                          </router-link>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | IRISt  -->
                  <!--  d2 | IRISc  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">
                          <router-link to="/products/irisc">
                          IRISc
                          </router-link>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | IRISc  -->

                  <!--  d2 | IRISm   -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">
                          <router-link to="/products/irism">
                          IRISm
                          </router-link>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | IRISm   -->
                  <!--  d2 | SE68-51W   -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">
                          <router-link to="/products/se68-51w">
                          SE68-51W
                          </router-link>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | SE68-51W  -->
                </ul>
              </div>
            </li>
            <!--  //d1 | PRODUCTS  -->
            <!--  d1 | DESIGN  -->
            <li class="list-item">
              <h2 class="tit-l">
                <a class="nav-item">
                  DESIGN
                </a>
              </h2>
              <div class="d2-list-wrap v3">
                <ul class="d2-list">
                  <!--  d2 | 4D Imaging Radar  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">4D Imaging Radar</h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | 4D Imaging Radar  -->
                  <!--  d2 | Software Defined Vehicle  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">Software Defined Vehicle</h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | Software Defined Vehicle  -->
                  <!--  d2 | SWaP sensor  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">SWaP sensor</h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | SWaP sensor  -->
                  <!--  d2 | Edge Device with ML  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">Edge Device with ML</h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | Edge Device with ML  -->

                </ul>
              </div>
            </li>
            <!--  //d1 | DESIGN  -->
            <!--  d1 | ABOUT SRS  -->
            <li class="list-item">
              <h2 class="tit-l">
                <router-link to="/about/awards" class="nav-item">
                  ABOUT SRS
                </router-link>
              </h2>
              <div class="d2-list-wrap v4">
                <ul class="d2-list">
                  <!--  d2 |Investors & Partners  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">Investors & Partners</h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | Investors & Partners  -->
                  <!--  d2 | Awards & Patents  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">
                          <router-link to="/about/awards">
                          Awards & Patents
                          </router-link>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | Awards & Patents  -->
                  <!--  d2 | Team building  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">
                          <router-link to="">
                          Team building
                          </router-link>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | Team building  -->
                  <!--  d2 | Contacts  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">
                          <router-link to="">
                          Contacts
                          </router-link>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <!--  // d2 | Contacts  -->
                  <!--  d2 | Newsroom  -->
                  <li class="d2-list-item">
                    <div class="d2-item">
                      <div class="tit-box">
                        <h3 class="txt-r">
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
      </section>
      <section class="sec-copy">
        <article class="art-copy">
          <p class="txt-m">©2022 by Smart Radar System Inc.All Rights Reserved.</p>
        </article>
        <article>
          <ul class="ico-list">
            <li class="list-item">
              <div class="ico-item ico-facebook">
                <router-link to="" title="새창 이동" target="_blank"></router-link>
              </div>
            </li>
            <li class="list-item">
              <div class="ico-item ico-linkedin">
                <router-link to="" title="새창 이동" target="_blank"></router-link>
              </div>
            </li>
          </ul>
        </article>
      </section>
    </div>
    <div class="ico-item ty02 ico-arrow-top" :class="{active: scrollY}">
      <button v-on:click="scrollTop"></button>
    </div>
  </div>
  <!-- Footer | 꼬리말 -->
</template>

<script>

export default {
  name: "compFooter",
  props: [],
  computed: {
    scrollY() {
      return this.$store.getters["HeaderData"].scrollY >= 1080
    }
  },
  methods: {
    handleScroll() {
      return this.$store.commit("ModuleHeader/handleScroll");
    },
    scrollTop() {
      document.querySelector('#app').scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    this.$store.getters["HeaderData"].scrollY = 0;
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

