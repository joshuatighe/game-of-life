import Cell from './Cell'

const CellRow = ({ cellRow, handleCellClick }) => {
  return (
    <div className="flex flex-1 gap-0.5">
      {cellRow.map(cell => 
        <Cell 
          cell={cell}
          handleCellClick={handleCellClick}
          key={cell.id}
        />
      )}
    </div>
  )
}

export default CellRow