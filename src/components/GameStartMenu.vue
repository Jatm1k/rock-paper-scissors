<script setup lang="ts">
import type {GameStatus} from "@/types/GameStatus";

interface Props {
  gameStatus: GameStatus,
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'startGame'): void
}>()
</script>

<template>
  <div class="intro" :class="{fadeOut: gameStatus != 'menu'}">
    <h1>Камень, ножницы, бумага</h1>
    <button @click="emit('startGame')">Играть</button>
  </div>
</template>