<template>
  <div class="AiPhoneArea">
    <AiPhoneTitle class="AiPhoneArea__Title">Enter your prompt here</AiPhoneTitle>
    <div class="AiPhoneArea__Field">
      <div class="AiPhoneArea__Text" :class="ai.textStarted ? '--animate' : ''">
        <div class="AiPhoneArea__Text-Wrap">Beautiful girl in magic forest with butterflies dark sky</div>
      </div>
      <div class="AiPhoneArea__Cursor"></div>
    </div>
  </div>
</template>
<script setup lang="ts">

import AiPhoneTitle from "~/components/AiPhone/AiPhoneTitle.vue";
import type {IAi} from "~/components/Slides/SlideAi.vue";

defineProps<{
  ai: IAi
}>()
</script>

<style lang="scss">
.AiPhoneArea {
  display: flex;
  flex-direction: column;
  height: 20%;
  margin-bottom: 4%;

  &__Title {
    margin-bottom: 4%;
  }

  &__Field {
    display: flex;
    align-items: flex-start;
    height: 100%;
    background: rgba(255, 255, 255, 0.23);
    border-radius: 10px;
    padding: 2%;
    gap: 1%;
  }

  &__Text {
    font-size: .7em;
    overflow: hidden;
    width: 0%;
    height: 14%;
    white-space: nowrap;
    transition: .8s;

    &-Wrap {
      overflow: hidden;
    }

    &.--animate {
      width: 75%;
    }
  }

  &__Cursor {
    width: 1px;
    height: 10%;
    background: #009DFF;
    margin-top: 0.5%;
  }
}

@keyframes phone-text {
  from {
    width: 0%;
  }

  to {
    width: 70%;
  }
}

@media screen and (max-width: 1480px) {
  .AiPhoneArea__Text {
    height: 24%;
    &.--animate {
      width: 80%;
    }
  }
}
@media screen and (max-width: 1240px) {
  .AiPhoneArea__Text {
    font-size: 0.5em;
  }
}
@media screen and (max-width: 767px) {
  .AiPhoneArea__Text {
    font-size: 0.3em;
  }
  .AiPhoneArea__Field {
    border-radius: 6px;
  }
}

</style>