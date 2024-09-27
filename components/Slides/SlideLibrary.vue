<template>
  <div class="Slide__Wrap">
    <div class="Slide__Titles">
      <div class="Slide__Title">Library for Storing</div>
      <div class="Slide__Subtitle">Your Creations</div>
    </div>
    <div class="Slide__Text">Never lose track of your masterpieces again! Our app includes a dedicated library where
      users can store all their creations in one convenient location. Organize your artwork by categories or tags for
      easy access later on. The library also supports sharing options, allowing you to showcase your work with friends
      or on social media platforms directly from the app.
    </div>
    <Button class="Slide__Button">Get it Now</Button>
  </div>
</template>
<style lang="sass">
.SlideLibrary
  .Slide
    &__Titles
      font-size: 250px
    &__Title
      letter-spacing: 3px
    &__Subtitle
      letter-spacing: 3px

@media screen and (max-width: 1820px)
  .SlideLibrary
    .Slide
      &__Titles
        font-size: 210px

@media screen and (max-width: 1480px)
  .SlideLibrary
    .Slide
      &__Titles
        font-size: 160px

@media screen and (max-width: 1240px)
  .SlideLibrary
    .Slide
      &__Titles
        font-size: 132px

@media screen and (max-width: 991px)
  .SlideLibrary
    .Slide
      &__Titles
        font-size: 96px
      &__Subtitle
        font-size: 106px

@media screen and (max-width: 767px)
  .SlideLibrary
    .Slide
      &__Title
        font-size: 52px
        letter-spacing: 1px
      &__Subtitle
        font-size: 62px

</style>
<script setup lang="ts">
</script>