<script setup>
import { RouterLink, RouterView } from "vue-router";
import Owen from './Owen.vue'

</script>

<template>
  <div class="headings">
    <h1>Owen Wilson Shrine</h1>
    <h2>See all the legendary Wows</h2>
  </div>
  <div class="page-wrapper">
  <p class="txt">
    Owen Cunningham Wilson (born November 18, 1968) is an American actor. 
    He has had a long association with filmmaker Wes Anderson with whom he shared writing 
    and acting credits for Bottle Rocket (1996), Rushmore (1998), and The Royal Tenenbaums 
    (2001), the last of which earned him a nomination for the Academy Award and 
    BAFTA Award for Best Screenplay. He has also appeared in Anderson's The Life Aquatic
    with Steve Zissou (2004), The Darjeeling Limited (2007), The Grand Budapest Hotel (2014),
    and The French Dispatch (2021). Wilson also starred in the Woody Allen romantic comedy Midnight
    in Paris (2011) as unsatisfied screenwriter Gil Pender, a role which earned him a Golden
    Globe Award nomination. In 2014 he appeared in Paul Thomas Anderson's Inherent Vice, and 
    Peter Bogdanovich's She's Funny That Way. <br><br>
    He also says wow, like a lot.
  </p>
  <h2 class="h2t">Let's see:</h2>
    <Suspense>
      <Owen/>
    </Suspense>
  </div>
</template>



<style scoped>
</style>
