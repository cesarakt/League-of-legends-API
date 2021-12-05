import lineTitle from '../../assets/line-golden-title.png'
import Modal from 'react-modal'

import { Carousel } from '../Carousel'
import { Container, LoreContent, Title, SkinArea, TitleArea } from './styles'

interface ChampionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function ChampionModal({ isOpen, onRequestClose }: ChampionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <LoreContent>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              libero pharetra, consectetur ligula quis, vulputate nulla. Donec
              magna erat, egestas at enim et, blandit elementum ligula. Aliquam
              erat volutpat. Maecenas sodales consectetur velit, et bibendum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              libero pharetra, consectetur ligula quis, vulputate nulla. Donec
              magna erat, egestas at enim et, blandit elementum ligula. Aliquam
              erat volutpat. Maecenas sodales consectetur velit, et bibendum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              libero pharetra, consectetur ligula quis, vulputate nulla. Donec
              magna erat, egestas at enim et, blandit elementum ligula. Aliquam
              erat volutpat. Maecenas sodales consectetur velit, et bibendum
            </p>
          </div>
        </LoreContent>

        <SkinArea>
          <Title>
            <h1>AATROX</h1>
            <img src={lineTitle} alt="" />
          </Title>

          <TitleArea>
            <div></div>
            <span>SKINS</span>
            <div></div>
          </TitleArea>
          <Carousel />
        </SkinArea>
      </Container>
    </Modal>
  )
}
