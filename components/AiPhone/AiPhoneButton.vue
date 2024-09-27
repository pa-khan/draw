<template>
  <div
      class="AiPhoneButton"
      :class="ai.buttonTap ? '--unscale' : ''"
  >
    Generate
  </div>
</template>
<script setup lang="ts">
import type {IAi} from "~/components/Slides/SlideAi.vue";

defineProps<{
  ai: IAi
}>()
</script>
<style lang="scss">
.AiPhoneButton {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 48px;
  color: #FFFFFF;
  font-weight: 700;
  background: #009DFF;
  border-radius: 1000px;
  margin: auto auto;
  padding: 0 40px;
  font-size: 0.8em;
  transition: .3s;
  &.--unscale {
    transform: scale(0.9);
  }
}

@media screen and (max-width: 1480px) {
  .AiPhoneButton {
    height: 34px;
  }
}
@media screen and (max-width: 1240px) {
  .AiPhoneButton {
    height: 25px;
    padding: 0 28px;
    font-size: 0.6em;
  }
}
@media screen and (max-width: 767px) {
  .AiPhoneButton {
    height: 20px;
    font-size: 0.3em;
    padding: 0 16px
  }
}
</style>