import { useEffect, useState } from 'react'
import Board from './components/Board'
import Button from './components/Button'
import Slider from './components/Slider'
import ExampleBoards from './components/ExampleBoards'
import Footer from './components/Footer'
import './styles.css'

const App = () => {
  const [size, setSize]   = useState(10)
  const [cells, setCells] = useState([])
  const [run, setRun]     = useState(false)
  const [speed, setSpeed] = useState(1000)

  // when a cell (div) is clicked flip its state (if game is not running)
  const handleCellClick = (e) => {
    if (!run) {
      const x = parseInt(e.target.attributes.x.value)
      const y = parseInt(e.target.attributes.y.value)
  
      const newCells = cells.map(cellRow => cellRow.map(cell => ({ ...cell })))
      newCells[y][x].alive = !newCells[y][x].alive;
      setCells(newCells)
    }
  }

  // clears (and sets up upon site load) board
  const clearBoard = () => {
    const newCells = []

    for (let y = 0; y < size; y++) {
      const cellRow = []
      for (let x = 0; x < size; x++) {
        const cell = {
          x: x,
          y: y,
          alive: false,
          id: `${x}${y}`
        }
        cellRow.push(cell)
      }
      newCells.push(cellRow)
    }

    setCells(newCells)
  }

  // game of life rules
  const updateBoard = () => {
    console.log('updating board...')

    const newCells = cells.map(cellRow => cellRow.map(cell => ({ ...cell })))

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const neighbors = getNeighbors(x, y)

        // alive cell checks
        if (cells[y][x].alive) {
          if (neighbors < 2 || neighbors > 3) newCells[y][x].alive = false
        }

        // dead cell checks
        if (!cells[y][x].alive) {
          if (neighbors == 3) newCells[y][x].alive = true
        }

      }
    }

    setCells(newCells)
  }

  const getNeighbors = (x, y) => {
    let neighbors = 0
    if (getCellState(x - 1, y - 1)) neighbors++ // top left
    if (getCellState(x, y - 1))     neighbors++ // top
    if (getCellState(x + 1, y - 1)) neighbors++ // top right
    if (getCellState(x + 1, y))     neighbors++ // right
    if (getCellState(x + 1, y + 1)) neighbors++ // bottom right
    if (getCellState(x, y + 1))     neighbors++ // bottom
    if (getCellState(x - 1, y + 1)) neighbors++ // bottom left
    if (getCellState(x - 1, y))     neighbors++ // left

    return neighbors
  }

  const randomizeBoard = () => {
    const newCells = []

    for (let y = 0; y < size; y++) {
      const cellRow = []
      for (let x = 0; x < size; x++) {
        const cell = {
          x: x,
          y: y,
          alive: Math.random() < 0.5,
          id: `${x}${y}`
        }
        cellRow.push(cell)
      }
      newCells.push(cellRow)
    }

    setCells(newCells)
  }

  const getCellState = (x, y) => {
    // out of bounds: treat as dead
    if (x < 0 || x >= size || y < 0 || y >= size) return false;

    return cells[y][x].alive
  }

  // only run updateBoard when when run is true at a certain interval
  useEffect(() => {
    let interval

    if (run) {
      interval = setInterval(() => {
        updateBoard()
      }, speed)
    }

    return () => clearInterval(interval)
  }, [run, cells, speed])

  // stop running and clear board when size is changed
  useEffect(() => {
    setRun(false)
    clearBoard()
  }, [size])

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center flex-col gap-10">
        <div className="text-4xl animate-pulse">
          game of life
        </div>
        <div className='flex gap-4'>
          <ExampleBoards />
          <Board
            cells={cells}
            handleCellClick={handleCellClick}
          />
        </div>
        <div className='flex gap-5 text-xl'>
          <Button text={!run ? 'start simulation' : 'stop simulation'} icon={!run ? 'play': 'pause'} handleClick={() => setRun(!run)}/>
          <Button text={'reset simulation'} icon={'reload'} handleClick={clearBoard} />
          <Button text={'randomize'} icon={'chess'} handleClick={randomizeBoard} />
          <Slider name={'size'} min={1} max={100} value={size} setValue={setSize} />
          <Slider name={'speed'} min={10} max={1000} value={speed} setValue={setSpeed} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
