<template>
  <div class="breadcrumb-wrap">
    <div class="breadcrumb">
      <ul class="bread-list">
        <li class="list-item">
          <div class="bread-item">
<!--            <select class="select-ty" @click="selectActive[0].active = !selectActive[0].active" @blur="selectActive[0].active= false" :class="{active:selectActive[0].active}">-->
<!--              <option value="automotive">Automotive</option>-->
<!--              <option value="industrial">Industrial</option>-->
<!--              <option value="healthcare">Healthcare</option>-->
<!--              <option value="smart-places">Smart Places</option>-->
<!--            </select>-->
            <custom-select
              :options="['Automotive', 'Industrial', 'Healthcare', 'Smart Places']"
              :default="'Automotive'"
              class="select"
            ></custom-select>
          </div>
        </li>
        <li class="list-item">
<!--          <div class="bread-item">-->
<!--            <select class="select-ty" @click="selectActive[1].active = !selectActive[1].active" @blur="selectActive[1].active= false" :class="{active:selectActive[1].active}">-->
<!--              <option value="autonomous-driving">Autonomous Driving</option>-->
<!--              <option value="uam">UAM</option>-->
<!--              <option value="in-cabin">In-Cabin</option>-->
<!--              <option value="last-mile-delivery">Last Mile Delivery</option>-->
<!--              <option value="agb">AGV</option>-->
<!--            </select>-->
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