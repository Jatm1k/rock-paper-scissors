<script setup lang="ts">
import GameScore from "@/components/GameScore.vue";
import GameStartMenu from "@/components/GameStartMenu.vue";
import GameController from "@/components/GameController.vue";
import {useGameStatus} from "@/composables/useGameStatus";
import {useHands} from "@/composables/useHands";

const {gameStatus, startGame} = useGameStatus()
const {gameScore, setHandPlayer, getPlayerHand, getComputerHand, gameHands} = useHands(gameStatus)
</script>

<template>
  <section class="game">
    <GameScore :game-score="gameScore"/>

    <GameStartMenu :game-status="gameStatus" @start-game="startGame"/>

    <GameController :player-hand="getPlayerHand" :computer-hand="getComputerHand" :game-status="gameStatus" :game-hands="gameHands" @set-hand="setHandPlayer"/>
  </section>
</template>