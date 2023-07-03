import React from 'react'

const Form = (props) => {
  return (
    <form className='form' onSubmit={props.handleSubmit}>
            <input 
                type='text' 
                placeholder='Top text'
                onChange={props.handleChange}
                name="top"
                value={props.topValue}
            />
            <input 
                type='text' 
                placeholder='Bottom text'
                onChange={props.handleChange}
                name="bottom"
                value={props.bottomValue}
            />
            <button type="submit">
                Get a new meme image 🖼️
            </button>
        </form>
  )
}

export default Form