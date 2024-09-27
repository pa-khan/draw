<script setup lang="ts">
import Toggle from "~/components/Toggle.vue";

const isTimerEnded = ref(false)

const features = [
  {
    img: "/images/features-canvas.svg",
    text: 'Canvas for Drawing Sketches',
  },
  {
    img: "/images/features-ar.svg",
    text: 'AR Drawing',
  },
  {
    img: "/images/features-coloring.svg",
    text: 'Coloring Images by Number with Photo Upload',
  },
  {
    img: "/images/features-ai.svg",
    text: 'AI Image Generation',
  },
  {
    img: "/images/features-library.svg",
    text: 'Library for Storing Your Creations',
  }
]

const plans = [
  {
    period: '1-WEEK',
    priceNew: '2.99',
    priceOld: '5.99',
    priceDaily: '0.42',
    priceDailyOld: '0.85',
    isPopular: false
  },
  {
    period: '1-MONTH',
    priceNew: '9.99',
    priceOld: '19.99',
    priceDaily: '0.33',
    priceDailyOld: '0.66',
    isPopular: true
  },
  {
    period: '1-YEAR',
    priceNew: '19.99',
    priceOld: '39.99',
    priceDaily: '0.05',
    priceDailyOld: '0.11',
    isPopular: false
  },
]

const currentPlan = ref(1)

</script>

<template>
  <div class="Paywall">
    <Case>
      <div class="Paywall__Wrap">
        <div class="Paywall__Logo">
          <img src="/images/logo.svg" alt="">
        </div>
        <Timer class="Paywall__Timer" @ended="isTimerEnded = true"></Timer>
        <div class="Paywall__Features Bg-Dark">
          <div class="Paywall__Features-Side">
            <div class="Paywall__Features-SideText">Features</div>
          </div>
          <div class="Paywall__Features-List">
            <div
                class="Paywall__Features-Item"
                v-for="feature in features"
            >
              <div class="Paywall__Features-Img">
                <img :src="feature.img" alt="">
              </div>
              <div class="Paywall__Features-Text">{{ feature.text }}</div>
            </div>

          </div>
        </div>
        <div class="Paywall__Trial Bg-Dark">
          <div class="Paywall__Trial-Text">Enable Free Trial</div>
          <Toggle class="Paywall__Trial-Toggle"></Toggle>
        </div>
        <div class="Paywall__Plans">
          <div
              class="Paywall__Plans-Item"
              :class="currentPlan == index ? 'isSelected' : ''"
              v-for="(plan, index) in plans"
              @click="currentPlan = index"
          >
            <div
                v-if="plan.isPopular"
                class="Paywall__Plans-Label"
            >
              Most Popular
            </div>
            <div class="Paywall__Plans-Wrap Bg-Dark">
              <div class="Paywall__Plans-Period">{{ plan.period }} plan</div>
              <div class="Paywall__Plans-PriceNew">${{ !isTimerEnded ? plan.priceNew : plan.priceOld }}</div>
              <template v-if="!isTimerEnded">
                <div class="Paywall__Plans-PriceOld">${{ plan.priceOld }}</div>
                <div class="Paywall__Plans-PriceDaily"><span>${{ plan.priceDaily }}</span> per day</div>
                <div class="Paywall__Plans-PriceDailyOld">${{ plan.priceDailyOld }} per day</div>
              </template>
            </div>
          </div>
        </div>
        <Button class="Paywall__Button">Get it Now</Button>
      </div>
    </Case>
    <div class="Paywall__Bg Bg-Img">
      <img src="/images/paywall-bg.jpg" alt="">
    </div>
  </div>

</template>

<style lang="sass">
.Paywall
  padding: 38px 0
  position: relative

  &__Wrap
    gap: 10px
    z-index: 10
    width: 100%
    max-width: 560px
    margin-left: auto
    margin-right: auto
    position: relative
    flex-direction: column
    align-items: center
    display: flex

  &__Timer
    margin-top: 20px

  &__Features
    width: 100%
    display: flex

    &-Side
      width: 60px
      display: flex
      align-items: center
      position: relative
      border-right: 1px solid rgba(#fff, .2)

    &-SideText
      left: 46px
      font-size: 24px
      font-weight: 700
      letter-spacing: 7.8px
      min-height: 233px
      text-transform: uppercase
      transform: rotate(-90deg)
      position: absolute

    &-List
      gap: 14px
      padding: 22px 26px
      width: calc(100% - 60px)
      flex-direction: column
      display: flex

    &-Item
      display: flex
      align-items: center

    &-Img
      width: 25px

    &-Text
      font-weight: 700
      padding-left: 32px

  &__Trial
    width: 100%
    padding: 12px 20px
    display: flex
    align-items: center

    &-Text
      font-weight: 700
      padding-right: 32px
      width: calc(100% - 45px)

  &__Plans
    gap: 14px
    width: 100%
    display: grid
    align-items: flex-end
    grid-template-columns: repeat(3, 1fr)

    &-Label
      font-size: 12px
      font-weight: 700
      padding: 2px 8px
      border-radius: 10px 10px 0 0
      background: var(--color-primary)
      margin: 0 auto
      width: max-content

    &-Item
      &.isSelected
        .Paywall
          &__Plans
            &-Wrap
              &:before
                opacity: 1


    &-Wrap
      padding: 14px 24px
      text-align: center
      cursor: pointer
      &:before
        top: 0
        left: 0
        width: 100%
        height: 100%
        opacity: 0
        transition: .3s
        border: 3px solid var(--color-primary)
        border-radius: inherit
        position: absolute
        content: ""
      &:hover
        &:before
          opacity: 1

    &-Period
      font-weight: 700
      margin-bottom: 10px
      text-transform: uppercase

    &-PriceNew
      font-size: 40px
      font-weight: 700
      color: var(--color-primary)

    &-PriceOld
      font-size: 14px
      font-weight: 700
      text-align: right
      margin-top: -5px

    &-PriceDaily
      padding: 6px
      font-size: 13px
      font-weight: 700
      line-height: 1
      margin-top: 14px
      color: var(--color-dark)
      border-radius: 10px
      background: var(--color-white)
      position: relative

      &:before
        width: 0
        height: 0
        left: 50%
        top: -10px
        border-radius: 10px
        transform: translateX(-50%)
        border-style: solid
        border-width: 0 62px 11px 62px
        border-color: transparent transparent #ffffff transparent
        position: absolute
        content: ""

      span
        margin-bottom: -2px
        font-size: 32px
        display: block

    &-PriceDailyOld
      opacity: .5
      font-size: 14px
      font-weight: 700
      margin-top: 12px
      text-decoration: line-through

  &__Button
    max-width: 345px
    margin-top: 20px

@media (max-width: 767px)
  .Paywall
    padding: 18px 0 38px

    &__Wrap
      max-width: 370px


    &__Logo
      max-width: 184px

    &__Features
      &-Side
        width: 40px

      &-SideText
        font-size: 20px

      &-List
        gap: 9px
        padding: 17px 15px
        width: calc(100% - 40px)

      &-Text
        font-size: 12px
        padding-left: 12px

    &__Trial
      &-Text
        font-size: 13px

    &__Plans
      gap: 8px

      &-Label
        font-size: 10px
        padding: 3px 10px

      &-Wrap
        padding: 10px 5px 12px
        &:before
          border-width: 1px

      &-Period
        font-size: 13px
        margin-bottom: 4px

      &-PriceNew
        font-size: 32px

      &-PriceOld
        font-size: 10px
        margin-top: -4px
        margin-right: 13px

      &-PriceDaily
        padding: 2px 6px 6px

        span
          font-size: 30px

        &:before
          top: -7px
          border-width: 0 50px 8px 50px

      &-PriceDailyOld
        font-size: 10px
        margin-top: 8px

    &__Button
      max-width: 277px
      margin-top: 10px
</style>