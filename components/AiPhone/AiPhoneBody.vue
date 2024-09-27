<template>
  <div class="AiPhoneBody">
    <AiPhoneArea :ai="ai"/>
    <AiPhoneStyle :ai="ai"/>
    <AiPhoneImages :ai="ai"/>
    <AiPhoneButton :ai="ai"/>
  </div>
</template>
<script setup lang="ts">
import type {IAi} from "~/components/Slides/SlideAi.vue";

defineProps<{
  ai: IAi
}>()
</script>
<style lang="scss">
.AiPhoneBody {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>