import {Player} from "../player/player";

export const clearBoards = function() {
    let playerBoard = document.getElementById('player-board');
    let computerBoard = document.getElementById('computer-board');

    while (playerBoard.firstChild) {
        playerBoard.removeChild(playerBoard.firstChild);
    }

    while (computerBoard.firstChild) {
        computerBoard.removeChild(computerBoard.firstChild);
    }
}

const updateButton = function(button, action) {
    if (action === 'miss') {
        button.className = 'water-item'
    }
    else if (action === 'hit') {
        button.className = 'hit-item'
    }
}

const addAllItems = function (game) {
    let playerBoard = document.getElementById('player-board');
    let computerBoard = document.getElementById('computer-board');

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let playerButton = document.createElement('button');
            let computerButton = document.createElement('button');
            if (game.player.gameboard.occupied([i,j])!==-1) {
                playerButton.className = 'ship-item'
            }
            else {
                playerButton.className = 'grid-item'
            }
            playerButton.id = 'P'+i+j
            console.log(playerButton.id)
            computerButton.className = 'computer-item'
            playerBoard.appendChild(playerButton)
            computerBoard.appendChild(computerButton)
            computerButton.addEventListener('click', ev => {
                if (computerButton.className === 'computer-item') {
                    updateButton(computerButton, game.computer.gameboard.receiveAttack([i, j]))
                    if (game.computer.gameboard.allShipsSunk()===true) {
                        showTextDialog('You won!', game)
                    }
                    let computerMove
                    let action
                    do {
                        computerMove = game.computer.generateMove()
                        action = game.player.gameboard.receiveAttack(computerMove)
                        game.computer.lastMove.tries++
                    } while (action ==='error')
                    let button = document.getElementById('P'+computerMove[0]+computerMove[1])
                    updateButton(button, action)
                    game.computer.updateLastMove(action, computerMove)
                    if (game.player.gameboard.allShipsSunk()===true) {
                        showTextDialog('Computer won :(', game)
                    }
                }
            })
        }
    }
}

export const initBoards = function(game, player, computer) {
    addAllItems(game, player, computer)
}

export const placeShips = function(game) {
    const player = game.player
    let dialog = document.getElementById('dialog')
    let axis = 'y'
    const ships = Object.keys(Player.availableShips)
    let index = 0

    let p = document.createElement('p')
    p.textContent='PLACE YOUR ' + ships[0].toUpperCase()
    p.className = 'dialog-text'
    dialog.appendChild(p)

    let buttonPlayAgain = document.createElement('button')
    buttonPlayAgain.textContent = 'ROTATE'
    buttonPlayAgain.addEventListener('click', ev => {
        axis = (axis==='x') ? 'y': 'x'
    })
    dialog.appendChild(buttonPlayAgain)

    let div = document.createElement('div')
    div.id = 'init-board'
    dialog.appendChild(div)
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let button = document.createElement('button')
            button.className = 'computer-item'
            button.id = 'I'+i+j
            div.appendChild(button)
            button.addEventListener('click',ev=> {
                let ret = player.gameboard.addShip([i,j],Player.availableShips[ships[index]],axis)
                console.log(ret)
                if (ret === true) {
                    for (let k=0; k<Player.availableShips[ships[index]]; k++) {
                        if (axis==='x') {
                            let aux = i+k
                            let shipButton = document.getElementById('I'+aux+j)
                            shipButton.className='ship-item'
                        }
                        if (axis==='y') {
                            let aux = j+k
                            let shipButton = document.getElementById('I'+i+aux)
                            shipButton.className='ship-item'
                        }
                    }
                    index++
                    if (index === ships.length) {
                        while (dialog.firstChild) {
                            dialog.removeChild(dialog.firstChild)
                        }
                        dialog.style.display = 'none'
                        dialog.close()
                        initBoards(game)
                    }
                    else {
                        p.textContent = 'Place your ' + ships[index].toUpperCase()
                    }
                }
            })
            let hoverDiv = document.createElement('div')
            hoverDiv.style.position = 'absolute';
            hoverDiv.style.display = 'flex'
            hoverDiv.style.pointerEvents = 'none'

            button.addEventListener('mouseenter', () => {
                while (hoverDiv.firstChild) {
                    hoverDiv.removeChild(hoverDiv.firstChild)
                }
                hoverDiv.style.flexDirection = (axis==='x') ? 'column' : 'row'
                let width = button.offsetWidth
                for (let h = 0; h < Player.availableShips[ships[index]]; h++) {
                    let hoverDivChild = document.createElement('div')
                    hoverDivChild.style.width=width+'px'
                    hoverDivChild.style.height=width+'px'
                    hoverDivChild.className = 'ship-item'
                    hoverDivChild.style.opacity = '0.8'
                    hoverDiv.appendChild(hoverDivChild)
                }
                dialog.appendChild(hoverDiv)

                const rect = button.getBoundingClientRect();
                const rect1 = dialog.getBoundingClientRect()
                const absoluteTop = rect.top + window.scrollY - rect1.top
                const absoluteLeft = rect.left + window.scrollX - rect1.left

                // Set the position of hoverDiv
                hoverDiv.style.top = absoluteTop + 'px';
                hoverDiv.style.left = absoluteLeft + 'px';
                console.log(hoverDiv.style.top)
                console.log(hoverDiv.style.left)
            })
            button.addEventListener('mouseout', () => {
                dialog.removeChild(hoverDiv)
            })
        }
    }

    dialog.style.display = 'flex'
    dialog.showModal()
}

const showTextDialog = function (text, game) {
    let dialog = document.getElementById('dialog')
    let p = document.createElement('p')
    p.textContent = text
    p.className = 'dialog-text'
    dialog.appendChild(p)
    let button = document.createElement('button');
    button.textContent = 'play again'
    dialog.appendChild(button)
    button.addEventListener('click', ev => {
        while (dialog.firstChild) {
            dialog.removeChild(dialog.firstChild)
        }
        dialog.style.display='flex'
        dialog.close()
        game.newRound()
    })
    dialog.style.display = 'flex'
    dialog.showModal()}
