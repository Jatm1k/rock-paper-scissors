<script setup lang="ts">

import type {Score} from "@/types/Score";

interface Props {
  gameScore: Score,
}

defineProps<Props>()
</script>

<template>
  <div class="score">
    <div class="player-score">
      <h2>Игрок</h2>
      <p>{{ gameScore.player }}</p>
    </div>
    <div class="computer-score">
      <h2>Компьютер</h2>
      <p>{{ gameScore.computer }}</p>
    </div>
  </div>
</template>