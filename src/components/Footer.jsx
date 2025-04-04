const Footer = () => {
  return (
    <div>
      <div className="absolute inset-x-0 bottom-0 justify-self-center m-2 text-sm text-stone-500">
        made with <a className="hover:underline" href="https://react.dev/" target="_blank">react</a> and <a href="https://tailwindcss.com/" className="hover:underline" target="_blank">tailwindcss</a>
      </div>
      <div className="absolute inset-x-0 bottom-0 justify-self-end m-2 text-sm text-stone-500">
        <a href="https://github.com/joshuatighe/game-of-life" target="_blank">
          <img 
            src="https://unpkg.com/pixelarticons@1.8.1/svg/github.svg" 
            width={24}
            height={24}
            className="invert-40 hover:invert-75"
          />
        </a>
      </div>
    </div>
  )
}

export default Footer