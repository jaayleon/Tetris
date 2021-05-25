
// All code must go between here
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')  // Query selctor lets us connect to html file
    let squares = Array.from(document.querySelectorAll('.grid div'))  // let squares be an array of 200 divs
    const scoreDisplay = document.querySelector('#score')
    const startBtn = document.querySelector('#start-button')  // # lets us select an  'id'
    const pauseBtn = document.querySelector('#pause-button')
    const width = 10
    const initialRotation = 0
    let nextRandom = 0
    let timerId // it is set to null
    let score = 0  // initial score is set to 0
    
    const lTetromino = [
        [width, width+1, width+2, 2*width],
        [0, 1, width+1, 2*width +1],
        [2, width, width+1, width+2],
        [1, width+1, 2*width + 1, 2*width+2]
    ]
    
    
    const jTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const sTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
    ]
    
    const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]

    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]

    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
    ]

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

    let currentPosition = 4
    let random = Math.floor(Math.random()*theTetrominoes.length) // gives us the index of a random tetromino
    let current = theTetrominoes[random][0] // l tetrominoes first rotation
    let currentRotation = 0
    

    // Gets the first rotation in the first tetromino
    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    draw()

    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }
    
    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        freeze()
    }

    function freeze() {
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
            // Star new tetromino
            random = nextRandom
            nextRandom = Math.floor(Math.random() *theTetrominoes.length)
            current = theTetrominoes[random][currentRotation]
            currentPosition = 4
            draw()
            displayShape()
            addScore()
            gameOver()
        }
    }

    // Create left hand boundary of tetromino
    function moveLeft() {
        undraw()
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

        if(!isAtLeftEdge) currentPosition -= 1
        
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition += 1
        }

        draw()
    }

    function moveRight() {
        undraw()
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)

        if(!isAtRightEdge) currentPosition += 1
        
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition -= 1
        }

        draw()
    }

    function rotate() {
        undraw()
        currentRotation ++
        if(currentRotation == current.length){
            currentRotation =0
        }
        current = theTetrominoes[random][currentRotation]
        draw()
    }

    // Assign to functions to keyCodes
    function control(e) {
        if(e.keyCode ==37){
            moveLeft()
        }
        if(e.keyCode ==39){
            moveRight()
        }
        if(e.keyCode ==38){
            rotate()
        }
        if(e.keyCode ==40){
            moveDown()
        }
    }
    document.addEventListener('keyup', control)  // if key is pressed we evoke the control function

    // Show next tetromnio
    const displaySquares = document.querySelectorAll('.mini-grid div')
    const displayWidth = 4
    let displayIndex = 0
    

    //Tetrominos without rotation
    const upNextTetrominos = [
        [1, displayWidth+1, displayWidth*2+1, 2],
        [0,displayWidth,displayWidth+1,displayWidth*2+1],
        [1,displayWidth,displayWidth+1,displayWidth+2],
        [0,1,displayWidth,displayWidth+1],
        [1,displayWidth+1,displayWidth*2+1,displayWidth*3+1]
    ]

    // Display shape in mini-grid
    function displayShape() {
        // remove any trace of tetromino from entire grid
        displaySquares.forEach(square => {
            square.classList.remove('tetromino')
        })
        upNextTetrominos[nextRandom].forEach(index => {
            displaySquares[displayIndex+index].classList.add('tetromino')
        })
    }

    // Add functionality to the button
    startBtn.addEventListener('click', () => {
        if (timerId == null) {
            draw()
            timerId = setInterval(moveDown, 500)
            nextRandom = Math.floor(Math.random()*theTetrominoes.length)
            displayShape()
        }
    })

    // Add Score
    function addScore() {
        for (let i=0; i<199; i+= width) {   // This for loop loops over every row
            const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]

            if (row.every(index => squares[index].classList.contains('taken'))) { // if the row is full of blocks
                score += 10
                scoreDisplay.innerHTML = score
                row.forEach(index => {
                    squares[index].classList.remove('taken')
                    squares[index].classList.remove('tetromino')
                })
                const squaresRemoved = squares.splice(i, width)  // selcts the squares of that completed row
                squares = squaresRemoved.concat(squares)
                squares.forEach(cell => grid.appendChild(cell))

            }
        }
    }

    // GG
    function gameOver() {
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            scoreDisplay.innerHTML = 'patay'
            clearInterval(timerId)
        }
    }

// added pauseBtn, separated functionality of start and pause...
// changed if statement--> if (timerId == null) and deleted else statement, event now only starts.

//⣿⡇⣿⣿⣿⠛⠁⣴⣿⡿⠿⠧⠹⠿⠘⣿⣿⣿⡇⢸⡻⣿⣿⣿⣿⣿⣿⣿
//⢹⡇⣿⣿⣿⠄⣞⣯⣷⣾⣿⣿⣧⡹⡆⡀⠉⢹⡌⠐⢿⣿⣿⣿⡞⣿⣿⣿
//⣾⡇⣿⣿⡇⣾⣿⣿⣿⣿⣿⣿⣿⣿⣄⢻⣦⡀⠁⢸⡌⠻⣿⣿⣿⡽⣿⣿
//⡇⣿⠹⣿⡇⡟⠛⣉⠁⠉⠉⠻⡿⣿⣿⣿⣿⣿⣦⣄⡉⠂⠈⠙⢿⣿⣝⣿
//⠤⢿⡄⠹⣧⣷⣸⡇⠄⠄⠲⢰⣌⣾⣿⣿⣿⣿⣿⣿⣶⣤⣤⡀⠄⠈⠻⢮
//⠄⢸⣧⠄⢘⢻⣿⡇⢀⣀⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠄⢀
//⠄⠈⣿⡆⢸⣿⣿⣿⣬⣭⣴⣿⣿⣿⣿⣿⣿⣿⣯⠝⠛⠛⠙⢿⡿⠃⠄⢸
//⠄⠄⢿⣿⡀⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⡾⠁⢠⡇⢀
//⠄⠄⢸⣿⡇⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣫⣻⡟⢀⠄⣿⣷⣾
//⠄⠄⢸⣿⡇⠄⠈⠙⠿⣿⣿⣿⣮⣿⣿⣿⣿⣿⣿⣿⣿⡿⢠⠊⢀⡇⣿⣿
//⠒⠤⠄⣿⡇⢀⡲⠄⠄⠈⠙⠻⢿⣿⣿⠿⠿⠟⠛⠋⠁⣰⠇⠄⢸⣿⣿⣿
//⠄⠄⠄⣿⡇⢬⡻⡇⡄⠄⠄⠄⡰⢖⠔⠉⠄⠄⠄⠄⣼⠏⠄⠄⢸⣿⣿⣿
//⠄⠄⠄⣿⡇⠄⠙⢌⢷⣆⡀⡾⡣⠃⠄⠄⠄⠄⠄⣼⡟⠄⠄⠄⠄⢿⣿⣿

pauseBtn.addEventListener('click', () => {
        clearInterval(timerId)
        timerId = null
})

})