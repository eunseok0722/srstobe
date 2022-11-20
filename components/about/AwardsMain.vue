<template>
  <div class="award-contents">
    <!-- content | 본문 -->
    <award-head-cont></award-head-cont>
    <!-- //content | 본문 -->
    <!-- content | 본문 -->
    <award-history-cont></award-history-cont>
    <!-- //content | 본문 -->
  </div>

</template>

<script>
import AwardHeadCont from "../about/AwardHeadCont.vue";
import AwardHistoryCont from "../about/AwardHistoryCont.vue";

export default {
  name: "AwardsMain",
  components: {
    AwardHeadCont,
    AwardHistoryCont
  }
}
</script>