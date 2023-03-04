import logo from './logo.svg'
import './App.css'
import moon from './resources/moon.jpg'
import land from './resources/land.jpg'
import cat from './resources/cat.gif'
import sexysax from './resources/sexysax.mp4'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'
//download image from pexels

function App() {
    const ref = useRef()
    return (
        <div>
            <audio
                id='sexysax'
                controls
                hidden
            >
                <source
                    src={sexysax}
                    type='audio/mpeg'
                ></source>
            </audio>
            <Parallax
                pages={4}
                ref={ref}
            >
                <ParallaxLayer
                    offset={0}
                    speed={1}
                    factor={4}
                    style={{
                        backgroundImage: `url(${moon})`,
                        backgroundSize: 'cover',
                    }}
                ></ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    speed={0.5}
                    factor={4}
                    style={{
                        backgroundImage: `url(${land})`,
                        backgroundSize: 'cover',
                    }}
                ></ParallaxLayer>
                <ParallaxLayer
                    offset={0.2}
                    speed={0.05}
                    onClick={() => ref.current.scrollTo(3)}
                >
                    <h2
                        style={{
                            textAlign: 'center',
                            fontSize: 72,
                            color: 'white',
                        }}
                    >
                        Welcome to my website
                    </h2>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={3.2}
                    speed={2}
                >
                    <h2
                        style={{
                            textAlign: 'center',
                            fontSize: 72,
                            color: 'white',
                        }}
                    >
                        Web development is fun!
                    </h2>
                </ParallaxLayer>
                <ParallaxLayer
                    sticky={{ start: 1.3, end: 2.4 }}
                    style={{ textAlign: 'center' }}
                >
                    <img
                        src={cat}
                        style={{ textAlign: 'center' }}
                    ></img>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default App
