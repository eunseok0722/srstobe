<template>
  <div class="breadcrumb-wrap">
    <div class="breadcrumb">
      <ul class="bread-list">
        <li class="list-item">
          <div class="bread-item">
            <custom-select
              :options="['Automotive', 'Industrial', 'Healthcare', 'Smart Places']"
              :default="'Automotive'"
              class="select"
            ></custom-select>
          </div>
        </li>
        <li class="list-item">
          <div class="bread-item">
            <custom-select
                :options="['Autonomous Driving', 'UAM', 'In-Cabin', 'Last Mile Delivery', 'AGV']"
                :default="'Autonomous Driving'"
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
  methods: {
    // activate: (index) => {
    //   this.selectActive[index].active = !this.selectActive[index].active;
    // }
  }
}
</script>