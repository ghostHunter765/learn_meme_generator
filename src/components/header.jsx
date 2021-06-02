import React from 'react'
import trollface from '../icons/Trollface.png'

export default function Header() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={trollface} alt="" width="100px" className="image" />
     Meme Generator
  </header>
        </div>
    )
}
