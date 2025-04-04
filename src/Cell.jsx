const Cell = ({ cell, handleCellClick }) => {
  return (
    <div 
      className={cell.alive ? 
        "bg-green-700 flex-1 text-center text-3xl" : 
        "bg-stone-600 flex-1 text-center text-3xl hover:bg-stone-400"
      } 
      onClick={handleCellClick}
      x={cell.x}
      y={cell.y}
    >
    </div>
  )
}

export default Cell