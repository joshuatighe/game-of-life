const Button = ({ text, icon, handleClick }) => {
  const iconURL = `https://unpkg.com/pixelarticons@1.8.1/svg/${icon}.svg`

  return (
      <button 
        className="flex gap-2 hover:bg-stone-600 p-2 pixel-corners text-md"
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
  )
}

export default Button