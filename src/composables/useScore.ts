import {ref} from "vue";
import type {Score} from "@/types/Score";
import type {GameStatus} from "@/types/GameStatus";

export const useScore = () => {
    const gameScore = ref<Score>({player: 0, computer: 0})

    const upScore = (gameStatus: GameStatus) => {
        if (gameStatus === 'w-player') {
            gameScore.value.player++
        }
        if (gameStatus === 'w-computer') {
            gameScore.value.computer++
        }
    }

    return {gameScore, upScore}
}