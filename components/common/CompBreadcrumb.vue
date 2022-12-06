<template>
  <div class="breadcrumb-wrap">
    <div class="breadcrumb">
      <ul class="bread-list">
        <li class="list-item">
          <div class="bread-item">
            <custom-select
                :options="breadcrumbData.dp01.opt"
                :default="breadcrumbData.dp01.dft"
                class="select"
            ></custom-select>
          </div>
        </li>
        <li class="list-item">
          <div class="bread-item">
            <custom-select
              :options="breadcrumbData.dp02.opt"
              :default="breadcrumbData.dp02.dft"
              class="select"
            ></custom-select>
          </div>
        </li>
        <li class="list-item">
          <div class="bread-item">
            <custom-select
                :options="breadcrumbData.dp03.opt"
                :default="breadcrumbData.dp03.dft"
                class="select"
            ></custom-select>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CustomSelect from "../common/CustomSelect.vue";

export default {
  name: "compBreadcrumb",
  components: {
    CustomSelect
  },
  data() {
    return {
      selectActive: [
        {id: 1, active: false},
        {id: 2, active: false},
      ],
    }
  },
  computed: {
    breadcrumbData() {
      return this.$store.getters["HeaderData"].breadcrumbData
    }
  },
  methods: {
    // activate: (index) => {
    //   this.selectActive[index].active = !this.selectActive[index].active;
    // }
  }
}
</script>