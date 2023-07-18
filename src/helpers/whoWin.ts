import type {Hand} from "@/types/Hand";
import type {GameStatus} from "@/types/GameStatus";

export const whoWin = (player: Hand, computer: Hand): GameStatus => {
    switch (player.value) {
        case 'rock':
            return computer.value === 'paper' ? 'w-computer' : 'w-player'
        case 'paper':
            return computer.value === 'scissors' ? 'w-computer' : 'w-player'
        case 'scissors':
            return computer.value === 'rock' ? 'w-computer' : 'w-player'
        default:
            return 'draw'
    }
}