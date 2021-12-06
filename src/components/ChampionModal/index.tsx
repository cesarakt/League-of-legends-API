import Modal from 'react-modal'

import { Carousel } from '../Carousel'

import { Container, LoreContent, Title, SkinArea, TitleArea } from './styles'
import lineTitle from '../../assets/line-golden-title.png'
import close from '../../assets/close.svg'

interface Skins {
  id: string
  num: number
  name: string
}

interface ChampionModalProps {
  isOpen: boolean
  onRequestClose: () => void
  skins: Skins[]
  championData: any
  skinParams: any
}

export function ChampionModal({
  isOpen,
  onRequestClose,
  skins,
  championData,
  skinParams
}: ChampionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container
        style={{
          backgroundImage: `url(
              'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${skinParams.name}_${skinParams.num}.jpg'
            )`
        }}
      >
        <button type="button" onClick={onRequestClose} className="closeModal">
          <img src={close} alt="Fechar" />
        </button>

        <LoreContent>
          <div>
            <p>{championData.lore}</p>
          </div>
        </LoreContent>

        <SkinArea>
          <Title>
            <h1>{championData.name}</h1>

            <img src={lineTitle} alt="" />
          </Title>

          <TitleArea>
            <div></div>
            <span>SKINS</span>
            <div></div>
          </TitleArea>
          <Carousel skins={skins} />
        </SkinArea>
      </Container>
    </Modal>
  )
}
