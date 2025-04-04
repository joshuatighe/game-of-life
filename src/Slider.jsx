const Slider = ({ name, min, max, value, setValue }) => {
  const handleValueChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="flex gap-5 p-2">
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={handleValueChange}
      />
      {name}
    </div>
  )
}

export default Slider