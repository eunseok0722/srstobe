<template>
  <!-- wrapper -->
  <div id="wrapper">
    <!-- header component -->
    <comp-header :breadcrumb="true" type="ty01"></comp-header>
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
        <section class="section"></section>
        <!--  //section |  -->
      </div>
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
import MainHeader from '../common/MainHeader.vue';
import CompHeader from '../common/CompHeader.vue';
import CompFooter from '../common/CompFooter.vue';

export default {
  name: "AboutMain",
  components: {
    MainHeader,
    CompHeader,
    CompFooter,
  }
}
</script>

<style scoped>

</style>