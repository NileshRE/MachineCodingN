import { useState } from "react";
import useTicTacToe from "./Hooks/useTicTacToe"


const TicTacToe = () => {
  const [gridSize, setGridSize] = useState(3); 
  const {board, handleClick, statusMessage, resetGame} = useTicTacToe(gridSize*gridSize);
  const handleGridSizeChange = (size) => {
    setGridSize(size);
    resetGame(size); 
  };

  const getGridClass = (size) => {
    switch (size) {
      case 3:
        return "grid-cols-3";
      case 4:
        return "grid-cols-4";
      case 5:
        return "grid-cols-5";
      
      default:
        return ""; 
    }
  };
  

  return (
    <div className='my-2 w-[50%] mx-auto bg-indigo-700 py-6 px-12 text-white rounded-md'>
        <h1 className="text-2xl font-semibold my-8">MultiGrid 2 Player Tic Tac Toe Game</h1>
        <p className="text-lg my-4">Select Grid size you want to play in</p>
        <div className="flex justify-between my-4">
          <button className="px-12 py-3 border rounded-md hover:bg-indigo-400 hover:text-white" onClick={() => handleGridSizeChange(3)}>3 x 3</button>
          <button className="px-12 py-3 border rounded-md hover:bg-indigo-400 hover:text-white" onClick={() => handleGridSizeChange(4)}>4 x 4</button>
          <button className="px-12 py-3 border rounded-md hover:bg-indigo-400 hover:text-white" onClick={() => handleGridSizeChange(5)}>5 x 5</button>
        </div>
        <div className="flex justify-between p-2 my-2">                      
          <h2 className="text-xl font-medium">{statusMessage()}</h2>
          <button className="p-1 border rounded-md hover:bg-indigo-400" onClick={resetGame}>Reset Game</button>
        </div>
        <div className={`grid ${getGridClass(gridSize)}`}>
          {board?.map((b,index)=>{
            return <button key={index} onClick={()=>handleClick(index)} disabled={b !== null}
            className="p-12 border rounded-md hover:bg-indigo-400">{b}</button>
          })}
        </div>
    </div>
  )
}

export default TicTacToe