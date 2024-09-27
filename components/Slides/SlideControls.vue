<template>
  <div class="Slide__Controls">
    <div class="Slide__Arrow" @click="nextSlide">
      <img src="/images/button-next.svg" alt="">
    </div>
    <div class="Slide__Pagination">
      <div
          v-for="(_, index) in slides"
          class="Slide__Pagination-Dot"
          :class="currentSlide == index ? 'isActive' : ''"
          @click="currentSlide = index"
      />
    </div>
    <Button class="Slide__Button-Fixed">Get it Now</Button>
  </div>

</template>
<script setup lang="ts">

import {currentSlide, nextSlide, slides} from "~/single/slider";
</script>