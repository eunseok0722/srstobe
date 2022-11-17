<template>
  <div class="breadcrumb-wrap">
    <div class="breadcrumb">
      <ul class="bread-list">
        <li class="list-item">
          <div class="bread-item">
            <select>
              <option value="automotive">Automotive</option>
              <option value="industrial">Industrial</option>
              <option value="healthcare">Healthcare</option>
              <option value="smart-places">Smart Places</option>
            </select>
          </div>
        </li>
        <li class="list-item">
          <div class="bread-item">
            <select>
              <option value="autonomous-driving">Autonomous Driving</option>
              <option value="uam">UAM</option>
              <option value="in-cabin">In-Cabin</option>
              <option value="last-mile-delivery">Last Mile Delivery</option>
              <option value="agb">AGV</option>
            </select>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "compBreadcrumb"
}
</script>