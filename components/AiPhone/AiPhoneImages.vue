<template>
  <div class="AiPhoneImages">
    <div
        v-for="(image, index) in images"
        class="AiPhoneImages__Image"
        :class="ai.styleImageChosen !== null ?  ai.styleImageChosen === index ? '--selected' : '--unselected' : ''"
    >
      <div class="AiPhoneImages__Image-Title">
        {{ image.title }}
      </div>
      <div class="AiPhoneImages__Image-Bg">
        <img :src="image.src" alt="">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type {IAi} from "~/components/Slides/SlideAi.vue";

defineProps<{
  ai: IAi
}>()

const images = [
  {
    title: 'Cyberpunk',
    src: '/images/ai/cyberpunk.jpg'
  },
  {
    title: 'Oil painting',
    src: '/images/ai/oil-painting.jpg'
  },
  {
    title: 'Psycodelic',
    src: '/images/ai/psycodelic.jpg'
  },
  {
    title: 'Medieval',
    src: '/images/ai/medieval.jpg'
  },
]
</script>
<style lang="scss">
.AiPhoneImages {
  display: grid;
  gap: 6px;
  grid-template-columns: repeat(2, 1fr);
  margin-left: -3px;
  margin-right: -3px;

  &__Image {
    display: flex;
    align-items: flex-end;
    position: relative;
    aspect-ratio: 1/1;
    overflow: hidden;
    color: #FFFFFF;
    border-radius: 10px;
    border: 3px solid transparent;
    transition: .3s;

    &-Title {
      z-index: 1;
      font-weight: 700;
      position: relative;
      font-size: 0.8em;
      padding: 9px;
    }

    &-Bg {
      position: absolute;
      inset: -1%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &.--selected {
      border-color: #0073BA;
    }

    &.--unselected {
      opacity: 0.5;
    }
  }
}

@media screen and (max-width: 1240px) {
  .AiPhoneImages__Image-Title {
    font-size: 0.5em;
    padding: 5px;
  }
  .AiPhoneImages__Image {
    &.--selected {
      border-width: 2px;
    }
  }
}

@media screen and (max-width: 767px) {
  .AiPhoneImages {
    gap: 2px;
  }
  .AiPhoneImages__Image {
    border-radius: 6px;
    &.--selected {
      border-width: 1px;
    }
  }
  .AiPhoneImages__Image-Title {
    padding: 2px;
    font-size: 0.4em;
  }
}
</style>