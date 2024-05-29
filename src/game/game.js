import {ComputerPlayer, RealPlayer} from "../player/player";
import {clearBoards, placeShips} from "../dom/manipulateDOM";

export class Game {
    constructor() {
        this.player = new RealPlayer()
        this.computer = new ComputerPlayer()
    }

    newRound = () => {
        this.player.clearBoard()
        this.computer.clearBoard()
        clearBoards()
        this.computer.generateBoard()
        placeShips(this)
    }
}