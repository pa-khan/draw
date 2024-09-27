<script setup lang="ts">
import "./assets/styles/style.sass"
</script>

<template>
  <NuxtPage />
</template>

<style lang="sass">
.Inner
  min-height: 100vh
  overflow-y: auto


.Bg-Img
  inset: 0
  width: 100%
  height: 100vh
  position: fixed
  animation: zoom-bg linear 35s infinite
  //padding-bottom: calc(3rem + env(safe-area-inset-bottom))
  img
    width: 100%
    height: 100%
    object-fit: cover
  &:before, &:after
    width: 100%
    height: 25%
    position: absolute
    mix-blend-mode: multiply
    background: linear-gradient(180deg, rgba(33,82,82,1) 40%, rgba(6,31,52,0) 100%)
    content: ""
  &:after
    bottom: 0
    transform: scale(1, -1)

.Bg-Dark
  border-radius: var(--border-rad)
  background: rgba(#091C31, 0.75)
  backdrop-filter: blur(20px)

@keyframes zoom-bg
  0%
    transform: scale(1)
  50%
    transform: scale(1.4)
  100%
    transform: scale(1)

</style>