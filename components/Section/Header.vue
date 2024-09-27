<script setup lang="ts">
defineProps<{
  currentSlide: Number
}>();

const emits = defineEmits(['setSlide'])

const isOpen = ref(false)


function toggleClass() {
  isOpen.value = !isOpen.value;
}

const links = [
  'Main',
  'Ai Image Generation',
  'AR Drawing',
  'Drawing Sketches',
  'Coloring Images',
  'Library'
]

function onClickLink(value: number) {
  isOpen.value = false
  emits('setSlide', value)
}
</script>

<template>
  <div class="Header">
    <Case>
      <div class="Header__Wrap">
        <div class="Header__Logo">
          <img src="/images/logo.svg" alt="">
        </div>
        <div
            class="Header__Nav"
            :class="{isOpen: isOpen}"
        >
          <div
              v-for="(link, index) in links"
              class="Header__Nav-Link"
              :class="currentSlide === index? 'isActive' : ''"
              @click="onClickLink(index)"
          >
            {{ link }}
          </div>
        </div>
        <div
            class="Header__Ham"
            @click="toggleClass"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Case>
  </div>
</template>

<style lang="sass">
.Header
  top: 0
  z-index: 1000
  width: 100%
  padding: 34px 0
  position: absolute

  &__Wrap
    gap: 32px
    display: flex
    align-items: center
    justify-content: space-between

  &__Logo
    width: 100%
    max-width: 250px

  &__Nav
    padding: 2px
    display: flex
    border-radius: var(--border-rad)
    background: var(--color-secondary)
    text-align: center

    &-Link
      min-width: 170px
      padding: 8px 14px
      font-weight: 500
      transition: .4s ease-in-out
      display: flex
      cursor: pointer
      align-items: center
      justify-content: center
      border-radius: var(--border-rad)

      &.isActive
        background: var(--color-primary)

  &__Ham
    opacity: 0
    visibility: hidden
    pointer-events: none
    gap: 7px
    width: 100%
    max-width: 250px
    display: flex
    cursor: pointer
    flex-direction: column

    div
      width: 100%
      height: 2px
      border-radius: var(--border-rad)
      background: var(--color-white)

@media screen and (max-width: 1820px)
  .Header
    &__Logo
      max-width: 220px

    &__Nav
      &-Link
        min-width: 150px

    &__Ham
      max-width: 220px

@media screen and (max-width: 1480px)
  .Header
    padding: 22px 0

    &__Logo
      max-width: 200px

    &__Nav
      &-Link
        font-size: 14px
        min-width: 140px

    &__Ham
      display: none

@media screen and (max-width: 1240px)
  .Header
    padding: 36px 0
    &__Logo
      max-width: 254px

    &__Nav
      top: 0
      right: 0
      gap: 29px
      z-index: 8
      opacity: 0
      transition: .3s
      padding: 94px 34px
      border-radius: 0
      height: 100svh
      position: fixed
      text-align: right
      visibility: hidden
      flex-direction: column
      transform: translateX(50%)
      backdrop-filter: blur(20px)
      background: rgba(#091C31, .75)

      &-Link
        font-size: 16px
        padding: 0
        min-width: auto
        justify-content: flex-end

        &.isActive
          background: none

      &.isOpen
        opacity: 1
        visibility: visible
        transform: translateX(0)

    &__Ham
      z-index: 10
      opacity: 1
      max-width: 23px
      visibility: visible
      pointer-events: all
      display: flex

@media screen and (max-width: 767px)
  .Header
    padding: 18px 0
    &__Logo
      max-width: 184px

    &__Nav
      padding: 76px 38px

    &__Ham
      gap: 5px


@media screen and (max-width: 429px)
  .Header
    &__Nav
      padding: 76px 10px 38px 38px
</style>

