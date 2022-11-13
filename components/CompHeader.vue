<template>
  <!-- header | 머릿말 -->
  <div id="header">

  </div>
  <!-- //header | 머릿말 -->
</template>

<script>
// import NavSnsList from "../components/NavSnsList.vue";

export default {
  name: "compHeader",
  props: [],
  data() {
    return {
      // scrollY: 0,
      // lastScrollY: 0,
      // timer: null,
    }
  },
  computed: {
    // imgPath() {
    //   return this.$store.state.path.img
    // },
    // logoImgUrl() {
    //   return this.$store.state.moduleHeader.logoImg.url
    // },
    // navMenuItem() {
    //   return this.$store.state.moduleHeader.navMenuItem
    // },
    // navActive() {
    //   return this.$store.state.moduleHeader.navActive
    // },
    // navSnsItem() {
    //   return this.$store.state.navSnsItem
    // },
    // inactivate() {
    //   return this.$store.state.moduleHeader.scrollY >= 150 && this.$store.state.moduleHeader.lastScrollY < this.$store.state.moduleHeader.scrollY
    // }

  },
  methods: {
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
    // 'nav-sns-list': NavSnsList,
  }
}
</script>

