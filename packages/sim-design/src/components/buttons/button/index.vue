<script setup lang="ts">
import { useSlots } from 'vue'

export interface BtnProps {
  type?: 'full' | 'text' | 'border'
  color?: string
}

const props = withDefaults(defineProps<BtnProps>(), {
  type: 'full',
  color: 'rgba(36, 107, 253, 1)',
})
const slots = useSlots()
const btnClass = {
  full: `bg-[--btn-color]`,
  text: 'bg-transparent',
  border: `border-2 border-[--btn-color]`,
}
</script>

<template>
  <button class="sim-button px-8 py-3 inline-block rounded-full text-sm font-bold" :class="btnClass[props.type]">
    <template v-if="slots?.default">
      <slot />
    </template>
    <template v-else>Please insert slots</template>
  </button>
</template>

<style>
.sim-button {
  --btn-color: v-bind('props.color');
}
</style>
