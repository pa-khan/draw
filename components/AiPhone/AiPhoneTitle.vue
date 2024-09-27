<template>
  <div class="AiPhoneTitle">
    <slot />
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.AiPhoneTitle {
  font-size: 0.86em;
  font-weight: 700;
}

@media screen and (max-width: 1240px) {
  .AiPhoneTitle {
    font-size: 0.55em;
  }
}

@media screen and (max-width: 767px) {
  .AiPhoneTitle {
    font-size: 0.3em;
  }
}
</style>