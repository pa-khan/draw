<template>
      <div class="Slide__Wrap">
        <div class="Slide__Info">
          <div class="Slide__Titles">
            <div class="Slide__Title">Canvas</div>
            <div class="Slide__Subtitle">For Drawning</div>
          </div>
          <div class="Slide__Text">Our app offers a versatile canvas that allows users to draw sketches with precision
            and ease. The user-friendly interface includes various brush types, sizes, and opacity settings, enabling
            you to customize your drawing experience. You can zoom in for detailed work or zoom out to see the overall
            composition. The canvas supports multiple layers, giving you the flexibility to experiment without losing
            previous work.
          </div>
          <Button class="Slide__Button">Get it Now</Button>
        </div>
        <div class="Slide__Preview">
          <div class="SlideCanvas__Phone">
            <img src="/images/canvas-phone.svg" alt="">
          </div>
          <div class="SlideCanvas__Phone-Img">
            <img src="/images/canvas-phone-img.jpg" alt="">
          </div>
        </div>
      </div>
</template>
<style lang="sass">
.SlideCanvas
  &:not(.--active)
    .SlideCanvas
      &__Phone
        opacity: 0
        transform: translateX(150%) rotate(20deg)
      &__Phone-Img
        opacity: 0
        transition: opacity 0s
        transition-delay: 0s
  .Slide
    &__Subtitle
      letter-spacing: -4px
  &__Phone
    top: -50px
    left: -120px
    transition: 1.4s
    position: relative
  &__Phone-Img
    opacity: 1
    top: 140px
    left: -19px
    z-index: 5
    margin-left: 5px
    margin-top: 4px
    transition: opacity 1.4s
    transition-delay: 2s
    position: absolute
    width: 276px
    height: 478px
    img
      width: 100%
      height: 100%
      object-fit: cover

@media screen and (max-width: 1820px)
  .SlideCanvas
    &__Phone
      left: 30px
    &__Phone-Img
      left: 129px

@media screen and (max-width: 1480px)
  .SlideCanvas
    &__Phone
      width: 400px
    &__Phone-Img
      top: 108px
      left: 114px
      width: 230px
      height: 396px

@media screen and (max-width: 1240px)
  .SlideCanvas
    .Slide
      &__Subtitle
        font-size: 190px
        letter-spacing: 1.5px
      &__Preview
        top: 370px
        right: 60px
        transform: rotate(4deg)
    &__Phone
      width: 360px
    &__Phone-Img
      top: 92px
      left: 105px
      width: 206px
      height: 358px

@media screen and (max-width: 991px)
  .SlideCanvas
    .Slide
      &__Subtitle
        font-size: 130px
      &__Preview
        top: 0
        right: 0
    &__Phone
      top: 0
      left: auto
      margin-right: auto
      margin-left: auto
    &__Phone-Img
      top: 142px
      left: 50%
      margin-left: 3px
      transform: translateX(-50%)
      
@media screen and (max-width: 767px)
  .SlideCanvas
    .Slide
      &__Title
        font-size: 95px
      &__Subtitle
        font-size: 78px
        letter-spacing: 0
    &__Phone
      width: 235px
    &__Phone-Img
      top: 92px
      width: 134px
      height: 232px

</style>
<script setup lang="ts">
</script>