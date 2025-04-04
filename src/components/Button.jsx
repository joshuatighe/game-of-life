const Button = ({ text, icon, handleClick }) => {
  const iconURL = `https://unpkg.com/pixelarticons@1.8.1/svg/${icon}.svg`

  return (
    <div className="hover:bg-stone-600 p-2 pixel-corners text-md">
      <button 
        className="flex gap-2"
        onClick={handleClick}
      >
        {text}
        <img 
          src={iconURL} 
          width={18}
          height={18}
          className="invert-90"
        />
      </button>
    </div>

  )
}

export default Button