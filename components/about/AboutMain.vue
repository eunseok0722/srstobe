<template>
  <!-- wrapper -->
  <div id="wrapper">
    <!-- header component -->
    <comp-header :breadcrumb="true" type="ty01"></comp-header>
    <!-- //header component -->

    <!-- container -->
    <div id="container" class="container">
      <!-- content | 본문  -->
      <router-view></router-view>
      <!-- //content | 본문  -->
    </div>
    <!-- //container -->

    <!-- footer component -->
    <comp-footer></comp-footer>
    <!-- //footer component -->

  </div>
  <!-- //wrapper -->
</template>

<script>
import CompHeader from '../common/CompHeader.vue';
import CompFooter from '../common/CompFooter.vue';
import NewsRoomMain from "../about/NewsRoomMain.vue";
import AwardsMain from "../about/AwardsMain.vue";
import TeamMain from "../about/TeamMain.vue"

export default {
  name: "AboutMain",
  components: {
    CompHeader,
    CompFooter,
    NewsRoomMain,
    AwardsMain,
    TeamMain
  }
}
</script>