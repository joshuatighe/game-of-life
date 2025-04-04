import CellRow from './CellRow'

const Board = ({ cells, handleCellClick }) => {
  return (
    <div className="flex flex-col w-150 h-150 gap-0.5 pixel-corners">
      {cells.map(cellRow =>
        <CellRow 
          cellRow={cellRow}
          handleCellClick={handleCellClick}
          key={cellRow[0].y}
        />
      )}
    </div>
  )
}

export default Board