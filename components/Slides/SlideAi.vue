<script setup lang="ts">
const props = defineProps<{
  active: boolean
}>()

let currentSketchIndex = ref<number>(0)
let timeout: ReturnType<typeof setTimeout> | null = null
let interval: ReturnType<typeof setTimeout> | null = null


const defaultAi: IAi = {
  textStarted: false,
  styleUnselected: false,
  styleImageChosen: null,
  buttonTap: false,
  imagesShow: false,
}

const ai: IAi = reactive({
  ...defaultAi
})

watch(() => props.active, () => {
  if (props.active) {
    startAnimation()
  } else {
    resetAnimation()
  }
})

onUnmounted(() => {
  resetAnimation()
})

function startAnimation() {
  timeout = setTimeout(() => {
    ai.textStarted = true
    timeout = setTimeout(() => {
      ai.styleUnselected = true
      timeout = setTimeout(() => {
        ai.styleImageChosen = 0
        timeout = setTimeout(() => {
          ai.buttonTap = true
          timeout = setTimeout(() => {
            ai.buttonTap = false
            ai.imagesShow = true
          }, 700)
        }, 700)
      }, 700)
    }, 700)
  }, 1000)
}

function resetAnimation() {
  if (timeout) clearTimeout(timeout)
  if (interval) clearInterval(interval)

  for (const [key, value] of Object.entries(defaultAi)) {
    ai[key as keyof IAi] = value
  }
}

export interface IAi {
  textStarted: boolean
  styleUnselected: boolean
  styleImageChosen: null | number
  buttonTap: boolean
  imagesShow: boolean
}
</script>

<template>
  <div class="Slide__Wrap">
    <div class="Slide__Info">
      <div class="Slide__Titles">
        <div class="Slide__Title">Ai Image</div>
        <div class="Slide__Subtitle">Generation</div>
      </div>
      <div class="Slide__Text">Harness the power of artificial intelligence to generate unique images based on your
        prompts or existing sketches. Our advanced AI algorithms analyze your input and produce stunning visuals that
        reflect your ideas and concepts. This feature is ideal for those seeking inspiration or looking to explore new
        artistic styles without starting from scratch.
      </div>
      <Button class="Slide__Button">Get it Now</Button>
    </div>
    <div class="Slide__Preview">
      <div class="SlideAi__Phones">
        <AiPhoneWrap :ai="ai"/>
        <div class="SlideAi__Gen SlideAi__Gen-1" :class="ai.imagesShow ? '--show' : ''">
          <img src="/images/ai/generated-image-1.jpg" alt="">
        </div>
        <div class="SlideAi__Gen SlideAi__Gen-2" :class="ai.imagesShow ? '--show' : ''">
          <img src="/images/ai/generated-image-2.jpg" alt="">
        </div>
        <!--            <div class="SlideAi__Phone-Text">-->
        <!--              <img src="/images/ai-phone-text.png" alt="">-->
        <!--            </div>-->
      </div>
    </div>
  </div>

</template>
<style lang="sass">
.SlideAi
  &.--active
    overflow: hidden !important
  &:not(.--active)
    .SlideAi
      &__Phones
        transform: translateY(100%)
  &__Phones
    top: -30px
    right: 300px
    width: 435px
    transition: 1.5s
    position: absolute

  &__Phone-Text
    z-index: 2
    top: 30px
    left: 40px
    position: absolute

  .AiPhoneWrap
    height: 900px
    transform: rotate(6.4deg)
    &__Mockup
      height: 100%


  &__Gen
    z-index: 2
    position: absolute
    opacity: 0
    transition: .6s
    overflow: hidden

    img
      display: block
      width: 100%
      height: 100%

    &-1
      width: 190px
      right: -23%
      top: 51%
      transform: rotate(11deg)
      border-radius: 23px

    &-2
      width: 330px
      right: -66%
      top: 9.5%
      transform: rotate(-14deg)
      border-radius: 36px
      transition-delay: .4s

    &.--show
      opacity: 1

@media screen and (max-width: 1820px)
  .SlideAi
    &__Phones
      right: 110px

@media screen and (max-width: 1480px)
  .SlideAi
    &__Phones
      right: 150px
      width: 340px
    .AiPhoneWrap
      height: 710px
    &__Gen-1
      width: 150px
    &__Gen-2
      width: 250px

@media screen and (max-width: 1240px)
  .SlideAi
    &__Phones
      top: 350px
      right: 170px
      width: 280px
    .AiPhoneWrap
      height: 590px
    &__Gen-1
      top: 12%
      right: -32%
      width: 130px
      border-radius: 10px
    &__Gen-2
      top: 36%
      right: -62%
      width: 220px
      border-radius: 14px

@media screen and (max-width: 991px)
  .SlideAi
    &__Phones
      top: 0
      right: 50px
      margin-top: 16px
      margin-right: auto
      margin-left: auto
      position: relative

@media screen and (max-width: 767px)
  .SlideAi
    .Slide
      &__Subtitle
        font-size: 95px
    .AiPhoneWrap
      height: 360px
      &__Case
        padding: 14% 7% 0%
    &__Phones
      right: 80px
      width: 175px
    &__Gen-1
      z-index: 4
      top: 46%
      right: -36%
      width: 85px
    &__Gen-2
      top: 0
      right: -88%
      width: 150px
</style>

