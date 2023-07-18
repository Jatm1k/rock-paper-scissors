<script setup lang="ts">
import GameBattlefield from "@/components/GameBattlefield.vue";
import GameHands from "@/components/GameHands.vue";
import type {Hand} from "@/types/Hand";
import type {GameStatus} from "@/types/GameStatus";
import {computed} from "vue";

interface Props {
  gameStatus: GameStatus,
  gameHands: Hand[],
  playerHand: Hand,
  computerHand: Hand,
}

const props = defineProps<Props>()

const title = computed(() => {
  switch (props.gameStatus) {
    case 'draw':
      return 'Ничья'
    case 'w-computer':
      return 'Победил компьютер'
    case 'w-player':
      return 'Победил игрок'
    case "choice":
      return 'Сделайте выбор'
    default:
      return 'Цу-е-фа'
  }
})

const showIf = (status: GameStatus) => {
  return {fadeOut: props.gameStatus == status, fadeIn: props.gameStatus != status}
}

const emit = defineEmits<{
  (e: 'setHand', hand: Hand): void
}>()
</script>

<template>
  <div class="match" :class="showIf('menu')">
    <h2 class="winner">{{ title }}</h2>
    <GameBattlefield :player-hand="playerHand" :computer-hand="computerHand" :game-status="gameStatus"/>
    <GameHands :class="showIf('process')" :game-hands="gameHands" @set-hand="(hand: Hand) => emit('setHand', hand)"/>
  </div>
</template>