import React, { useState, useEffect, useRef} from 'react'
import DomToImage from 'dom-to-image'
import Form from "./Form"
import MemeContainer from './MemeContainer'

const Meme = () => {

    const [allMemes, setAllMemes] = useState([])

    const [meme, setMeme] = useState({
        top: "",
        bottom: "",
        url: ""
    })

    const memeContainerRef = useRef(null)
    
    const handleChange = (e) => {
        const {name, value} = e.target 
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const generateMemeUrl = (e) => {
        e.preventDefault()
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const randomUrl = allMemes[randomIndex].url
        setMeme(prevState => ({
            ...prevState,
            url: randomUrl,
            top: "",
            bottom: ""
        }))
    }

    const fetchData = () => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(json => setAllMemes(json.data.memes))
        .catch(error => {
            if (error.response) {
                switch(error.response.status) {
                    case 400: 
                        console.log('Error 400: Bad Request');
                        break;
                    case 401: 
                        console.log('Error 401: Unauthorized');
                        break;
                    case 403: 
                        console.log('Error 403: Forbidden');
                        break;
                    case 404: 
                        console.log('Error 404: Not Found');
                        break;
                    default: 
                        console.log(`Error ${error.status}: Unknown Client Error`);
                        break;
                }
            }
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

   console.log('Initial render', meme)

   const handleDownload = () => {
    DomToImage.toBlob(memeContainerRef.current).then(blob => {
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'meme.png'
      link.click()
    })
  }


  return (
    <main>
        <Form 
            handleChange={handleChange}
            handleSubmit={generateMemeUrl}
            topValue={meme.url && meme.top}
            bottomValue={meme.url && meme.bottom}
        />
        <MemeContainer
            handleRef={memeContainerRef}
            memeUrl={meme.url}
            topValue={meme.top}
            bottomValue={meme.bottom}
        />
        {meme.url && <button 
                        onClick={handleDownload}
                        className='downloadBtn'
                     >
                        Download meme 💾
                     </button>}
    </main>
  )
}


export default Meme
