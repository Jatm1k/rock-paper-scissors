<script setup lang="ts">
import type {GameStatus} from "@/types/GameStatus";
import type {Hand} from "@/types/Hand";

interface Props {
  gameStatus: GameStatus,
  playerHand: Hand,
  computerHand: Hand,
}



defineProps<Props>()

</script>

<template>
  <div class="hands">
    <img class="player-hand" :src="`src/assets/${playerHand.value}.png`" alt="" :class="{shakePlayer: gameStatus == 'process'}"/>
    <img class="computer-hand" :src="`src/assets/${computerHand.value}.png`" alt="" :class="{shakeComputer: gameStatus == 'process'}"/>
  </div>
</template>

<style scoped>

</style>