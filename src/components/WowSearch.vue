<script setup>
import { ref } from "vue";

const response = ref({});

// adding delay
await new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 10);
});

try {
  const res = await fetch(
    "https://owen-wilson-wow-api.onrender.com/wows/directors"
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
  <div v-for="res in response" class="dirs">
    <p>{{ res }}</p>
  </div>
</template>
