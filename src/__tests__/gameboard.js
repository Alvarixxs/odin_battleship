import {Gameboard} from '../gameboard/gameboard';

test('add ship', () => {
    let board = new Gameboard(10);

    board.addShip([3,3],3,'x');
    expect(board.ships.length).toBe(1);

    board.addShip([4,4],3,'y');
    expect(board.ships.length).toBe(2);
})

test('add ship outside bounds', () => {
    let board = new Gameboard(10);
    board.addShip([9,9],2,'x')
    expect(board.ships.length).toBe(0)

    board.addShip([0,7],'3','y')
    expect(board.ships.length).toBe(0)
})

test('add ship to occupied', ()=> {
    let board = new Gameboard(10);
    board.addShip([3,3],3,'x');

    board.addShip([4,3],3,'y')
    expect(board.ships.length).toBe(1)

    board.addShip([4,0],4,'y')
    expect(board.ships.length).toBe(1)
})

test('receive attack hit', () => {
    let board = new Gameboard(10);
    board.addShip([3,3],3,'x');
    board.receiveAttack([5,3])
    expect(board.hits.length).toBe(1)
    expect(board.misses.length).toBe(0)
})

test('receive attack miss', () => {
    let board = new Gameboard(10);
    board.addShip([3,3],3,'x');
    board.receiveAttack([3,5])
    expect(board.hits.length).toBe(0)
    expect(board.misses.length).toBe(1)
})

test('receive attack twice in same spot', () => {
    let board = new Gameboard(10);
    board.addShip([3,3],3,'x');
    board.receiveAttack([5,3])
    board.receiveAttack([5,3])
    expect(board.hits.length).toBe(1)
    expect(board.misses.length).toBe(0)
})

test('all ships sunk', ()=> {
    let board = new Gameboard(10);
    board.addShip([3,3],1,'x');
    board.receiveAttack([3,3])
    expect(board.allShipsSunk()).toBeTruthy()
})