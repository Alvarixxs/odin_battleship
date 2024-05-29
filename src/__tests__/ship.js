
import {Ship} from '../ship/ship';

test('ship sink', () => {
    let boat = new Ship(4)
    expect(boat.isSunk()).toBe(false)
    boat.hit()
    boat.hit()
    boat.hit()
    boat.hit()
    expect(boat.isSunk()).toBe(true)
    })