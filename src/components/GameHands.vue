<script setup lang="ts">
import type {Hand} from "@/types/Hand";

interface Props {
  gameHands: Hand[],
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'setHand', hand: Hand): void
}>()
</script>

<template>
  <div class="options">
    <button @click="emit('setHand', hand)" v-for="hand in gameHands" :key="hand.value" :class="hand.value">{{ hand.title }}</button>
  </div>
</template>

<style scoped>

</style>