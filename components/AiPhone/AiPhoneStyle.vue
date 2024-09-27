<template>
  <div class="AiPhoneStyle">
    <div class="AiPhoneStyle__Head">
      <AiPhoneTitle>Choose style</AiPhoneTitle>
      <div class="AiPhoneStyle__Link">View All</div>
    </div>
    <div class="AiPhoneStyle__Tabs">
      <div
          v-for="(tab, index) in tabs"
          class="AiPhoneStyle__Tab"
          :class="index == 0 && !ai.styleUnselected ? '--current' : ''"
      >
        {{ tab }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type {IAi} from "~/components/Slides/SlideAi.vue";

defineProps<{
  ai: IAi
}>()

const tabs = [
  'Without style',
  'Random'
]
</script>
<style lang="scss">
.AiPhoneStyle {
  display: flex;
  flex-direction: column;
  height: 8.8%;
  margin-bottom: 4%;

  &__Head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2%;
  }

  &__Link {
    font-size: 0.8em;
    font-weight: 500;
    color: #009DFF;
  }

  &__Tabs {
    display: flex;
    gap: 2%;
    height: 100%;
    font-size: .8em;
  }

  &__Tab {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, 0.23);
    border: 1px solid  rgba(255, 255, 255, 0.23);
    border-radius: 10px;
    transition: .5s;
    &.--current {
      color: #009DFF;
      border-color: #009DFF;
    }
  }
}

@media screen and (max-width: 1240px) {
  .AiPhoneStyle__Tabs {
    font-size: 0.7em;
  }
  .AiPhoneStyle__Link {
    font-size: 0.5em;
  }
  .AiPhoneStyle__Tabs {
    font-size: 0.5em;
  }
}

@media screen and (max-width: 767px) {
  .AiPhoneStyle__Link {
    font-size: 0.3em;
  }
  .AiPhoneStyle__Tabs {
    font-size: 0.3em;
  }
}
</style>