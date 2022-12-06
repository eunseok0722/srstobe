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
import AutonomousDriving from "../applications/AutonomousDriving.vue";
import Elevator from "../applications/Elevator.vue";

export default {
  name: "ApplicationsMain",
  components: {
    CompHeader,
    CompFooter,
    AutonomousDriving,
    Elevator
  }
}
</script>