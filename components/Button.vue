<template>
  <div class="Button">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.Button
  z-index: 1
  padding: 26px 16px
  font-size: 32px
  font-family: "Bebas Neue", sans-serif
  text-transform: uppercase
  width: 100%
  transition: .3s
  border-radius: var(--border-rad-lg)
  background: var(--color-primary)
  position: relative
  justify-content: center
  align-items: center
  text-align: center
  cursor: pointer
  display: flex
  &:hover
    background: var(--color-hover)

@media screen and (max-width: 1480px)
  .Button
    padding: 22px 16px

@media screen and (max-width: 767px)
  .Button
    padding: 18px 16px
</style>