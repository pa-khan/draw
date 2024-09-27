<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount, computed, type Ref} from 'vue';

const emits = defineEmits(['ended'])

const totalTime = 10 * 60;
const timeLeft = ref(totalTime);
const timer: Ref<ReturnType<typeof setInterval> | null> = ref(null);

const updateTimer = () => {
  if (timeLeft.value > 0) {
    timeLeft.value--;
  } else if (timer.value){
    emits('ended')
    clearInterval(timer.value);
  }
};

onMounted(() => {
  timer.value = setInterval(updateTimer, 1000);
});

onBeforeUnmount(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
});
</script>

<template>
  <div class="Timer">
    <div class="Timer__Text">50% discount reserved for</div>
    <div class="Timer__Value">{{ formattedTime }}</div>
  </div>
</template>

<style lang="sass">
.Timer
  text-align: center
  &__Text
    font-size: 24px
    font-weight: 700
  &__Value
    font-size: 150px
    letter-spacing: 6px
    line-height: 120px
    margin-top: 22px
    font-family: "Bebas Neue", sans-serif
    text-shadow: 0px 0px 20px rgba(#13121E, .6)

@media (max-width: 767px)
  .Timer
    &__Text
      font-size: 16px
</style>
