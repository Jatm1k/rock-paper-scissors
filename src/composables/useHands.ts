import {computed, ref} from "vue";
import type {Hand} from "@/types/Hand";
import {whoWin} from "@/helpers/whoWin";
import type {GameStatus} from "@/types/GameStatus";
import {useScore} from "@/composables/useScore";
import type {Ref, UnwrapRef} from "vue";


export const useHands = (gameStatus: Ref<UnwrapRef<GameStatus>>) => {

    const {gameScore, upScore} = useScore()

    const gameHands = ref<Hand[]>([
        {title: 'Камень', value: 'rock'},
        {title: 'Ножницы', value: 'scissors'},
        {title: 'Бумага', value: 'paper'},
    ])

    const defaultHand = {title: 'Камень', value: 'rock'}
    const playerHand = ref<Hand>(defaultHand)
    const computerHand = ref<Hand>(defaultHand)

    const battle = () => {
        setHandComputer()
        gameStatus.value = 'process'
        setTimeout(() => {
            gameStatus.value = 'result'
            result()
        }, 2500)
    }

    const result = () => {
        if (playerHand.value.value === computerHand.value.value) {
            gameStatus.value = 'draw'
        } else {
            gameStatus.value = whoWin(playerHand.value, computerHand.value)
            upScore(gameStatus.value)
        }
    }

    const setHandPlayer = (hand: Hand) => {
        playerHand.value = hand
        battle()
    }

    const setHandComputer = () => {
        computerHand.value = randomHand()
    }

    const randomHand = ():Hand => {
        const rand = Math.floor(Math.random() * gameHands.value.length)
        return gameHands.value[rand]
    }

    const getPlayerHand = computed<Hand>(() => {
        return gameStatus.value === 'process' ? defaultHand : playerHand.value
    })
    const getComputerHand = computed<Hand>(() => {
        return gameStatus.value === 'process' ? defaultHand : computerHand.value
    })

    return {gameScore, gameHands, setHandPlayer, getPlayerHand, getComputerHand}
}