import {Ship} from "../ship/ship";

export class Gameboard {
    constructor(size) {
        this.size = size-1
        this.ships = []
        this.hits = []
        this.misses = []
    }

    containsCoordinate = (coordinates, [xo, yo]) => {
        for (let i = 0; i < coordinates.length; i++) {
            const [x, y] = coordinates[i];
            if (x === xo && y === yo) {
                return true;
            }
        }
        return false;
    }

    fits = (coordinates,length,axis) => {
        return !((axis === 'x' && coordinates[0] + length > this.size+1) ||
            (axis === 'y' && coordinates[1] + length > this.size+1));
    }

    occupied = (coordinates) => {
        for (let i = 0; i < this.ships.length; i++) {
            if ((this.ships[i].axis === 'x' &&
                    coordinates[1]===this.ships[i].coordinates[1] &&
                    (coordinates[0]-this.ships[i].coordinates[0]>=0) &&
                    ((coordinates[0]-this.ships[i].coordinates[0])<this.ships[i].ship.length)) ||
                (this.ships[i].axis === 'y' &&
                    coordinates[0]===this.ships[i].coordinates[0] &&
                    (coordinates[1]-this.ships[i].coordinates[1]>=0) &&
                    ((coordinates[1]-this.ships[i].coordinates[1])<this.ships[i].ship.length))) {
                return i
            }
        }
        return -1
    }

    shipsClash = (coordinates, length, axis) => {
        for (let i = 0; i < length; i++) {
            if ((axis === 'x' && this.occupied([coordinates[0]+i,coordinates[1]]) !== -1) ||
                axis === 'y' && this.occupied([coordinates[0],coordinates[1]+i]) !== -1) {
                return true
            }
        }
        return false
    }

    addShip = (coordinates,length,axis) => {
        if (this.fits(coordinates,length,axis)===true &&
            this.shipsClash(coordinates,length,axis)===false) {
            this.ships.push({
                ship: new Ship(length),
                coordinates: coordinates,
                axis: axis,
            })
            return true
        }
        return false
    }

    receiveAttack = (coordinates) => {
        if ((this.containsCoordinate(this.hits, coordinates) === true) || (this.containsCoordinate(this.misses, coordinates)===true)){
            return 'error'
        }
        let index = this.occupied(coordinates)
        if (index === -1) {
            this.misses.push(coordinates)
            return 'miss'
        }
        else {
            this.hits.push(coordinates)
            this.ships[index].ship.hit()
            return 'hit'
        }
    }

    allShipsSunk = () => {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].ship.isSunk() === false) {
                return false
            }
        }
        return true
    }

    clear = () => {
        this.ships = []
        this.hits = []
        this.misses = []
    }
}