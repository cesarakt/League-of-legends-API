import { useEffect, useState } from 'react'
import Modal from 'react-modal'

import { Header } from './components/Header'
import { Title } from './components/Title'
import { Champions } from './components/Champions'
import { ChampionModal } from './components/ChampionModal'

import { GlobalStyle } from './assets/styles/global'
import { apiChampions } from './services/api'

Modal.setAppElement('#root')

interface Skins {
  id: string
  num: number
  name: string
}

export function App() {
  const [isChampionModalOpen, setIsChampionModalOpen] = useState(false)
  const [skins, setSkins] = useState<Skins[]>([])
  const [skinParams, setSkinParams] = useState({})
  const [skinParam, setSkinParam] = useState('')
  const [championData, setChampionData] = useState({})

  useEffect(() => {
    async function getSkins() {
      try {
        const response = await apiChampions.get(
          `/pt_BR/champion/${skinParam}.json`
        )
        const data = response.data.data[skinParam]
        const newList: Skins[] = data.skins
        console.log(newList)
        setSkins(newList)
        setChampionData({ name: data.name, lore: data.lore })
        setSkinParams({ name: skinParam, num: newList[0].num })
      } catch (error) {
        console.log(error)
      }
    }
    getSkins()
  }, [skinParam])

  function handleOpenChampionModal() {
    setIsChampionModalOpen(true)
  }

  function handleCloseChampionModal() {
    setIsChampionModalOpen(false)
  }

  function setSkinName(name: string) {
    setSkinParam(name)
  }
  return (
    <>
      <Header />
      <Title name="CAMPEÕES" />
      <Champions
        handleOpenChampionModal={handleOpenChampionModal}
        setSkinName={setSkinName}
      />

      <ChampionModal
        isOpen={isChampionModalOpen}
        onRequestClose={handleCloseChampionModal}
        skins={skins}
        skinParams={skinParams}
        championData={championData}
      />

      <GlobalStyle />
    </>
  )
}
