<template>
  <div class="cont-contents">
    <div class="content cont-head-content head-content" :class="{'header-fix-padding': scrollY}">
      <!--  Content header | 제목  -->
      <div class="content-header" :class="{'header-fix': scrollY}">
        <h3 class="tit-cont">Contacts</h3>
      </div>
      <!--  Content header | 제목  -->

      <section class="txt-sec">
        <div class="tit-box">
          <h3 class="tit-sec">
            map
          </h3>
        </div>
        <div class="add-box">
          <div class="add add-01">
            <h4 class="tit-art-02">
              Smart Radar System Inc.
            </h4>
            <address class="txt-cont">
              3F, Fine Venture Bldg, 41, Seongnam-daero 925beon-gil,
              Bundang-gu, Seongnam-si, Gyeonggi-do, South Korea
            </address>
            <p class="phone-num txt-cont">
              +82 1533 0217
            </p>
          </div>
          <div class="add add-02">
            <h4 class="tit-art-02">
              SRS.ai Inc.
            </h4>
            <address class="txt-cont">
              51 Cedarlake, Irvine, CA 92614, USA
            </address>
            <p class="phone-num txt-cont">
              +1 949 677 1989
            </p>
          </div>
        </div>
      </section>
      <section class="map-sec">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.063361515356!2d127.12182651610705!3d37.411977240720546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca7dfda334dd5%3A0xed6b7d1c7972f67a!2z7YyM7J2467Kk7LKY67mM65Sp!5e0!3m2!1sko!2skr!4v1676165104627!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Investors",
  computed: {
    scrollY() {
      return this.$store.getters["ModuleHeader/ScrollY"]
    },
  },
  methods: {
    handleScroll() {
      return this.$store.commit("ModuleHeader/handleScroll");
    }
  },
}
</script>