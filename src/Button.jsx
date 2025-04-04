const Button = ({ text, handleClick }) => {
  return (
    <button 
      className="hover:bg-stone-600 p-2 pixel-corners"
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button