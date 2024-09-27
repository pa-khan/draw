<script setup lang="ts">
import SliderControls from "~/components/Slides/SlideControls.vue";

defineProps<{
  active: boolean
  imageBg: string
  imageBgMob: string
}>()
</script>

<template>
  <div
      class="Slide"
      :class="active ? '--active' : ''"
  >
    <Case>
      <slot />
    </Case>
    <div class="Slide__Bg Bg-Img">
      <img :src="imageBg" alt="">
      <img :src="imageBgMob" alt="">
    </div>

    <SliderControls />
  </div>
</template>


<style lang="sass">
.Slide
  height: 0
  opacity: 0
  width: 100%
  pointer-events: none
  overflow-y: auto
  &:not(.--active)
    .Slide
      &__Title
        transform: translateX(-80%)
      &__Subtitle
        transform: translateX(-90%)
      &__Text
        opacity: 0
        &:before
          height: 0
      &__Button
        opacity: 0
  &.--active
    height: 100svh
    min-height: 950px
    padding: 160px 0
    opacity: 1
    pointer-events: all
    overflow: visible
  &__Wrap
    z-index: 1
    position: relative
  &__Titles
    gap: 5px
    line-height: .8
    font-size: 277px
    font-family: "Bebas Neue", sans-serif
    display: flex
    flex-direction: column
    &-Button
      max-width: 292px
      text-transform: none !important
  &__Title
    letter-spacing: 2.2px
    color: transparent
    -webkit-text-stroke-width: 2px
    -webkit-text-stroke-color: rgba(255, 255, 255, .7)
    transition: 1.1s
  &__Subtitle
    transition: 1.3s
    letter-spacing: 1.5px
    color: rgba(255, 255, 255, .7)
  &__Text
    width: 100%
    max-width: 590px
    padding-left: 22px
    margin-top: 8px
    line-height: 150%
    transition: 1.2s
    position: relative
    &:before
      left: 0
      width: 3px
      height: 100%
      transition: 1.3s
      background: var(--color-primary)
      border-radius: var(--border-rad)
      animation: line-grow linear .5s
      position: absolute
      content: ""
  &__Button
    transition: background .3s, opacity 1.2s
    margin-top: 42px
    max-width: 345px
  &__Preview
    top: 0
    right: 0
    position: absolute
  &__Controls
    z-index: 10
    left: 50%
    bottom: 8%
    width: 100%
    transform: translateX(-50%)
    position: fixed
  &__Arrow
    z-index: 5
    width: 85px
    margin-left: auto
    margin-right: auto
    transition: .3s
    cursor: pointer
  &__Button-Fixed
    max-width: 345px
    margin-top: 30px
    margin-left: auto
    margin-right: auto
    padding: 28px 16px !important
    display: none !important
  &__Pagination
    gap: 6px
    align-items: center
    justify-content: center
    display: none !important
    &-Dot
      width: 30px
      height: 10px
      border-radius: 5px
      transition: .3s
      cursor: pointer
      background: rgba(#fff, .6)
      &.isActive
        background: var(--color-primary)
  &__Bg
    img
      &:nth-child(2)
        display: none

@media screen and (max-width: 1820px)
  .Slide
    &__Titles
      font-size: 230px
    &.--active
      padding: 140px 0 100px

@media screen and (max-width: 1480px)
  .Slide
    &__Titles
      font-size: 180px
    &__Button
      max-width: 300px
    &__Arrow
      width: 70px

@media screen and (max-width: 1240px)
  .Slide
    &.--active
      padding: 128px 0
      min-height: 770px
    &__Titles
      font-size: 204px
    &__Text
      max-width: 470px
      margin-top: 21px
    &__Pagination
      display: flex !important
    &__Button
      display: none !important
    &__Button-Fixed
      display: flex !important
    &__Arrow
      display: none

@media screen and (max-width: 991px)
  .Slide
    &.--active
      padding: 110px 0
    &__Titles
      font-size: 120px
    &__Text
      max-width: 100%

    &__Preview
      position: relative


@media screen and (max-width: 767px)
  .Slide
    display: flex
    flex-direction: column
    position: relative
    &.--active
      padding: 76px 0
    &__Titles
      font-size: 104px
    &__Title
      -webkit-text-stroke-width: 1px
    &__Text
      font-size: 12px
      margin-top: 6px
      padding-left: 16px
    &__Controls
      bottom: 5%
      margin-top: auto
      position: absolute
    &__Pagination
      &-Dot
        width: 20px
        height: 7px
    &__Button-Fixed
      margin-top: 12px
      padding: 18px 16px !important
      max-width: 277px
    &__Bg

      img

        &:nth-child(1)
          display: none
        &:nth-child(2)
          display: block
@media screen and (max-width: 429px)
  .Slide
    &__Titles
      font-size: 65px !important
    &__Title
      font-size: 65px !important
    &__Subtitle
      font-size: 70px !important

</style>