import { useState } from 'react'

export default function SignIn() {
  const [isLike, setIsLike] = useState(null)

  return (
    <div>
      <h1>Clique nos botões</h1>
      <div className="buttons-container">
        <button 
          className={`like-button ${isLike && 'selected'}`}
          onClick={()=>{setIsLike(true)}}
          disabled={isLike}
        >
          Gostei
        </button >
        <button 
          className={`dislike-button ${(!isLike&& isLike !== null) && 'selected'}`}
          onClick={()=>{setIsLike(false)}}
          disabled={!isLike && isLike !== null}
        >
          Não Gostei
      </button>
      </div>
    </div>
  )  
}
