<script setup lang="ts">
const props = defineProps<{
  active: boolean
}>()

let currentSketchIndex = ref<number>(0)
let timeout: ReturnType<typeof setTimeout> | null = null
let interval: ReturnType<typeof setTimeout> | null = null
const sketches = [
  '/images/ar-sketch-man.svg',
  '/images/ar-sketch-body.svg',
  '/images/ar-sketch-faces.svg'
]

watch(() => props.active, () => {
  if (props.active) {
    startAnimation()
  } else {
    resetAnimation()
  }
})

onUnmounted(()=>{
  resetAnimation()
})

function startAnimation() {
  timeout = setTimeout(() => {
    interval = setInterval(()=>{
      if (currentSketchIndex.value == sketches.length - 1) {
        currentSketchIndex.value = 0
        return
      }
      currentSketchIndex.value++
    }, 2000)
  }, 1000)
}

function resetAnimation() {
  if (timeout) clearTimeout(timeout)
  if (interval) clearInterval(interval)
  currentSketchIndex.value = 0
}
</script>

<template>
  <div class="Slide__Wrap">
    <div class="Slide__Info">
      <div class="Slide__Titles">
        <div class="Slide__Title">Ar</div>
        <div class="Slide__Subtitle">Drawning</div>
      </div>
      <div class="Slide__Text">Experience the future of art with our Augmented Reality (AR) drawing feature. This
        innovative tool allows you to project your drawings onto real-world surfaces using your device’s camera. You can
        create art in your environment, making it easier to visualize how your creations fit into physical spaces. This
        feature is perfect for artists looking to merge digital creativity with real-world applications.
      </div>
      <Button class="Slide__Button">Get it Now</Button>
    </div>
    <div class="Slide__Preview">
      <div class="SlideAr__Sketches">
        <img v-for="(sketch, index) in sketches" :class="currentSketchIndex == index ? '--show' : ''" :src="sketch" alt="">
      </div>
      <div class="SlideAr__Phone">
        <img src="/images/ar-phone.svg" alt="">
      </div>
      <div class="SlideAr__Paper">
        <img src="/images/ar-paper.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.SlideAr
  &.--active
    overflow: hidden !important
  &:not(.--active)
    .SlideAr
      &__Sketches
        img
          opacity: 0
          transform: translateX(150%)
      &__Phone
        transform: translateX(150%)
      &__Paper
        transform: translateY(100%)
  &__Sketches
    z-index: 2
    width: 100%
    height: 100%
    max-height: 650px
    position: absolute
    img
      opacity: 0
      top: 90px
      left: 120px
      transition: 1.6s
      transform: rotate(8deg)
      width: max-content
      height: max-content
      position: absolute
      &.--show
        opacity: 1
  &__Phone
    z-index: 1
    top: -60px
    left: 40px
    width: 500px
    transition: 1.6s
    transform: rotate(6deg)
    position: absolute
    img
      width: 100%
      height: 100%
  &__Paper
    top: 50px
    left: 30px
    transition: 1.6s
    position: relative

@media screen and (max-width: 1820px)
  .SlideAr
    &__Sketches
      img
        left: 160px
    &__Phone
      left: 80px
    &__Paper
      left: 80px
      max-width: 700px

@media screen and (max-width: 1480px)
  .SlideAr
    &__Sketches
      max-height: 560px
      img
        left: 120px
        width: 280px
    &__Phone
      top: -40px
      left: 50px
      width: 400px
    &__Paper
      left: 50px
      max-width: 580px

@media screen and (max-width: 1240px)
  .SlideAr

    .Slide
      &__Preview
        top: 320px
        right: -145px
    &__Sketches
      img
        top: 160px
        left: 80px
        width: 300px
    &__Phone
      top: 0
      left: 0
      width: 430px
    &__Paper
      top: 110px
      left: 0
      max-width: 650px

@media screen and (max-width: 991px)
  .SlideAr
    .Slide
      &__Preview
        top: 0
        margin-top: 16px
        right: -50px

@media screen and (max-width: 767px)
  .SlideAr
    &__Sketches
      width: 200px
      max-height: 230px
      img
        top: 90px
        left: 10px
        width: 150px
    &__Phone
      left: -40px
      width: 235px
    &__Paper
      top: 50px
      left: -40px
      max-width: 340px

</style>
