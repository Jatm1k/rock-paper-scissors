import {ref} from "vue";
import type {GameStatus} from "@/types/GameStatus";


export const useGameStatus = () => {
    const gameStatus = ref<GameStatus>('menu')
    const startGame = () => {
        gameStatus.value = 'choice'
    }

    return {gameStatus, startGame}
}