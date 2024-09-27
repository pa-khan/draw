<template>
  <div class="Footer">
    <slot />
    <template v-if="!$slots.default">
      <p>MoreAds OÜ Address: Harju maakond, Tallinn, Kristiine linnaosa, Tulika tn 17, 10613</p>
      <p>We follow applicable rules, guidelines and legislation. That’s why NO ⁃ Face Swaps, Deep Fakes or Voice Impersonations can be created!</p>
      <p>By continuing, you agree with <a href="" target="_blank">Terms & Conditions</a>, <a href="" target="_blank">Privacy policy</a> and <a href="" target="_blank">Refund policy</a></p>
    </template>
  </div>
</template>
<style lang="sass">
.Footer
  z-index: 10
  //bottom: 0
  //width: 100%
  padding: 22px 20px 28px
  text-align: center
  position: relative
  backdrop-filter: blur(20px)
  background: rgba(255, 255, 255, 0.03)
  //margin-top: auto
  p
    font-size: 13px
    line-height: 153%
    &:last-child
      margin-top: 5px
  a
    &:hover
      text-decoration-color: transparent

@media screen and (max-width: 1240px)
  .Footer
    padding: 16px 10px
    p
      font-size: 12px

@media screen and (max-width: 767px)
  .Footer
    p
      font-size: 10px
      &:last-child
        margin-top: 0

</style>
<script setup lang="ts">
</script>