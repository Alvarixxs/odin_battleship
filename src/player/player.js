import {Gameboard} from "../gameboard/gameboard";

export class Player {
    static availableShips = {
        carrier: 5,
        battleship: 4,
        submarine: 3,
        destroyer: 3,
        scouter: 2,
    }
    constructor() {
        this.gameboard = new Gameboard(10)
    }

    generateBoard = () => {
        Object.keys(Player.availableShips).forEach(ship => {
            let coordinates
            let axis
            do {
                coordinates = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
                axis = Math.floor(Math.random() * 2) ? 'x' : 'y'
            }
            while (this.gameboard.addShip(coordinates,Player.availableShips[ship],axis)===false)
        })
        console.log(this.gameboard)
    }

    clearBoard = () => {
        this.gameboard.clear()
    }
}

export class RealPlayer extends Player {
    constructor() {
        super();
    }

}

export class ComputerPlayer extends Player {
    constructor() {
        super();
        this.lastMove = {
            hit: false,
            coordinates: [0,0],
            tries: 1,
        }
    }

    generateMove = () => {
        if (this.lastMove.hit) {
            if (this.lastMove.tries===1 && this.lastMove.coordinates[0]+1<10) {
                return [this.lastMove.coordinates[0]+1,this.lastMove.coordinates[1]]
            }
            else if (this.lastMove.tries===2 && this.lastMove.coordinates[0]-1>=0) {
                return [this.lastMove.coordinates[0]-1,this.lastMove.coordinates[1]]
            }
            else if (this.lastMove.tries===3 && this.lastMove.coordinates[1]+1<10) {
                return [this.lastMove.coordinates[0],this.lastMove.coordinates[1]+1]
            }
            else if (this.lastMove.tries===4 && this.lastMove.coordinates[1]-1>=0) {
                return [this.lastMove.coordinates[0],this.lastMove.coordinates[1]-1]
            }
        }
        this.lastMove.hit=false
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    }

    updateLastMove = (action, coordinates) => {
        this.lastMove.tries = 1
        if (action === 'hit') {
            this.lastMove.coordinates = coordinates
            this.lastMove.hit = true
        }
    }
}