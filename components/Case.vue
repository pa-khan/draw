<template>
  <div class="Case">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.Case
  width: calc(1840px + 20px)
  padding: 0 10px
  margin: 0 auto
  position: relative
  .case
    width: auto
    padding-left: 0
    padding-right: 0

@media screen and (max-width: 1820px)
  .Case
    width: (1440px + 20px)

@media screen and (max-width: 1480px)
  .Case
    width: (1200px + 20px)

@media screen and (max-width: 1240px)
  .Case
    width: 100%
    padding: 0 42px

@media screen and (max-width: 767px)
  .Case
    padding: 0 34px

@media screen and (max-width: 429px)
  .Case
    padding: 0 10px
</style>