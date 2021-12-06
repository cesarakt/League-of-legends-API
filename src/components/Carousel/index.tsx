import { MouseEvent, useRef } from 'react'

import { Container } from './styles'

import left from '../../assets/left-arrow.svg'
import right from '../../assets/right-arrow.svg'

interface Skins {
  id: string
  num: number
  name: string
}

interface CarouselProps {
  skins: Skins[]
}

export function Carousel({ skins }: CarouselProps) {
  const carousel = useRef(null)

  function handleLeftClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    console.log(carousel.current)
  }

  function handleRightClick(e: MouseEvent<HTMLButtonElement>) {}

  return (
    <Container>
      <button className="moveCarousel" onClick={handleRightClick}>
        <img src={left} alt="esquerda" />
      </button>
      <div ref={carousel}>
        {skins.map((item, index) => (
          <img
            key={index}
            src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"
            alt=""
          />
        ))}
      </div>

      <button className="moveCarousel" onClick={handleLeftClick}>
        <img src={right} alt="direita" />
      </button>
    </Container>
  )
}
