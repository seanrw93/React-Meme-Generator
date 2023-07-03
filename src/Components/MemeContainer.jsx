import React from 'react'

const MemeContainer = (props) => {
  return (
    <div className='meme-container' ref={props.handleRef}>
            <div className='top-text meme-text'>
                <h1>{props.memeUrl && props.topValue}</h1>
            </div>
            <img  
                className='meme-image' 
                src={props.memeUrl}
            />
            <div className='bottom-text meme-text'>
                <h1>{props.memeUrl && props.bottomValue}</h1>
            </div>
    </div>
  )
}

export default MemeContainer