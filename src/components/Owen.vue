<script setup>
import { ref } from "vue";

const flag = ref(false);
const response = ref({});

// adding delay
await new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 10);
});

try {
  const res = await fetch(
    "https://owen-wilson-wow-api.onrender.com/wows/random?results=10"
  );
  console.log(res);
  response.value = await res.json();
} catch (error) {
  response.value = {
    answer: "Error! Could not reach the API. " + error,
    image: "",
  };
}
</script>

<template>
  <div v-for="res in response" class="movie">
    <h3>{{ res.movie }}</h3>
    <video controls width="400" height="300">
      <source :src="res.video['480p']" type="video/mp4" />
    </video>

    <div class="desc">
      <button @click="flag = !flag"><h4>Extra info</h4></button>
      <p v-show="flag">Year of release: {{ res.year }}</p>
      <p v-show="flag">Character: {{ res.character }}</p>
      <p v-show="flag">Line: {{ res.full_line }}</p>
      <p v-show="flag">Total wow count: {{ res.total_wows_in_movie }}</p>
    </div>
  </div>
</template>
