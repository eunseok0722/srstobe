<template>
  <div class="award-contents">
    <!-- content | 본문 -->
    <award-head-cont></award-head-cont>
    <!-- //content | 본문 -->

    <!-- content | 본문 -->
    <award-history-cont></award-history-cont>
    <!-- //content | 본문 -->

    <!-- content | 본문 -->
    <award-member-cont></award-member-cont>
    <!-- //content | 본문 -->

    <!-- content | 본문 -->
    <award-vision-cont></award-vision-cont>
    <!-- //content | 본문 -->


  </div>

</template>

<script>
import AwardHeadCont from "../about/AwardHeadCont.vue";
import AwardHistoryCont from "../about/AwardHistoryCont.vue";
import AwardVisionCont from "../about/AwardVisionCont.vue";
import AwardMemberCont from "../about/AwardMemberCont.vue";

export default {
  name: "AwardsMain",
  components: {
    AwardHeadCont,
    AwardHistoryCont,
    AwardVisionCont,
    AwardMemberCont,
  }
}
</script>