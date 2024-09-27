<template>
  <div class="Inner">
    <SectionHeader :current-slide="currentSlide" @set-slide="value => currentSlide = value"/>


    <Slide
        v-for="(slide, index) in slides"
        :class="slide.classes" :image-bg="slide.imageBg" :image-bg-mob="slide.imageBgMob"
        :active="currentSlide == index"
        v-touch:swipe.right="prevSlide"
        v-touch:swipe.left="nextSlide"
    >
      <component :is="slide.component" :active="currentSlide == index"/>


    </Slide>

    <SectionFooter/>

  </div>
</template>

<script setup lang="ts">
import Slide from "~/components/Slides/Slide.vue";
import {currentSlide, nextSlide, prevSlide, slides} from "~/single/slider";
import SliderControls from "~/components/Slides/SlideControls.vue";
</script>