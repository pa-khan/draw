<script lang="ts">
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<template>
  <div
    class="Toggle"
    @click="toggleClass"
    :class="{isActive: isActive}"
  >
    <span></span>
  </div>
</template>

<style lang="sass">
.Toggle
  padding: 1px
  width: 45px
  height: 24px
  border-radius: var(--border-rad)
  position: relative
  background: #354B82
  cursor: pointer
  span
    left: 2px
    top: 50%
    width: 22px
    height: 22px
    transition: .3s
    border-radius: 50%
    transform: translateY(-50%)
    background: var(--color-white)
    position: absolute
  &.isActive
    background: var(--color-primary)
    span
      left: calc(100% - 22px - 2px)

</style>