<template>
  <div class="Slide__Wrap">
    <div class="Slide__Titles">
      <div class="Slide__Title">Coloring Images</div>
      <div class="Slide__Subtitle">By Number</div>
    </div>
    <div class="Slide__Text">Unleash your inner artist with our coloring feature that combines traditional coloring
      techniques with modern technology. Users can upload their photos and transform them into color-by-number
      templates. This feature simplifies the coloring process while providing a fun and engaging way to bring images to
      life. Choose from a variety of color palettes or create your own!
    </div>
    <Button class="Slide__Button">Get it Now</Button>
  </div>
</template>
<style lang="sass">
@media screen and (max-width: 1240px)
  .SlideColoring
    .Slide
      &__Titles
        font-size: 165px

@media screen and (max-width: 911px)
  .SlideColoring
    .Slide
      &__Titles
        font-size: 120px

@media screen and (max-width: 767px)
  .SlideColoring
    .Slide
      &__Title
        font-size: 65px
        letter-spacing: .5px
      &__Subtitle
        font-size: 75px
</style>
