<script setup>
import WowSearch from "../components/WowSearch.vue";
</script>

<template>
  <div class="headings">
    <h1>Owen Wilson Shrine</h1>
    <h2>See all the legendary Wows</h2>
  </div>
  <div class="page-wrapper">
    <h2 class="h2t">Directors:</h2>
    <Suspense>
      <WowSearch />
    </Suspense>
  </div>
</template>
