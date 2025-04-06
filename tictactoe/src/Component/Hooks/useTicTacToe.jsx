import { useState } from 'react'


const useTicTacToe = ({gridSize}) => {

const initialBoard = () => Array(gridSize).fill(null);

const [board, setBoard] = useState(initialBoard());
const [isXNext, setIsXNext] = useState(true);


const calculateWinner = (currentBoard) => {
    const size = Math.sqrt(currentBoard.length);
    const winningConditions = [];

    // Generate winning conditions for rows and columns
    for (let i = 0; i < size; i++) {
        const row = [];
        const col = [];
        for (let j = 0; j < size; j++) {
            row.push(i * size + j);
            col.push(j * size + i);
        }
        winningConditions.push(row, col);
    }

    // Generate winning conditions for diagonals
    const diagonal1 = [];
    const diagonal2 = [];
    for (let i = 0; i < size; i++) {
        diagonal1.push(i * size + i);
        diagonal2.push(i * size + (size - 1 - i));
    }
    winningConditions.push(diagonal1, diagonal2);

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
            return currentBoard[a];
        }
    }

    return null;
};

const handleClick = (index) =>{
    const winner = calculateWinner(board);
   
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
}


const statusMessage = () =>{
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins`;
    if (!board.includes(null)) return `It's a draw!`;
    return `Player ${isXNext ? "X" : "O"} turn`;
}

const resetGame = () =>{
    setBoard(initialBoard());
    setIsXNext(true);
}


return {board, calculateWinner, handleClick, statusMessage, resetGame};
};

export default useTicTacToe