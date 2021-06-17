
/**
 * This object contains the seven tetromino's shape and colour in their original orientation 
 * as well as the "zero" tetromino which represents no tetromino (for game initilization)
 * Orientations and rotations based off of "Nintendo rotation system" : https://strategywiki.org/wiki/Tetris/Rotation_systems
 */
export const TETROMINOS = {
    
    zero: { shape: [[0]], color: '0, 0, 0'},  // No Tetromino

    I: {
       shape: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            ["I", "I", "I", "I"],
            [0, 0, 0, 0]
        ],
        color: '36, 95, 223'
    },

    O: {
        shape: [
             [0, 0, 0, 0],
             [0, "O", "O", 0],
             [0, "O", "O", 0],
             [0, 0, 0, 0]
         ],
         color: '36, 95, 223'
     },

    J: {
        shape: [
            [0, 0, 0],
            ["J", "J", "J"],
            [0, 0, "J"]
         ],
         color: '36, 95, 223'
     },

     L: {
        shape: [
            [0, 0, 0],
            ["L", "L", "L"],
            ["L", 0, 0]
         ],
         color: '36, 95, 223'
     },

     S: {
        shape: [
            [0, 0, 0],
            [0, "S", "S"],
            ["S", "S", 0]
         ],
         color: '36, 95, 223'
     },

     T: {
        shape: [
            [0, 0, 0],
            ["T", "T", "T"],
            [0, "T", 0]
         ],
         color: '36, 95, 223'
     },

     Z: {
        shape: [
            [0, 0, 0],
            ["Z", "Z", 0],
            [0, "Z", "Z"]
         ],
         color: '36, 95, 223'
     }
}

export const randomTetromino = () => {
    const tetrominoes = ["I", "O", "J", "L", "S", "T", "Z"];
    const tetrominoIndex = Math.floor(Math.random() * tetrominoes.length)
    return tetrominoes[tetrominoIndex]
}