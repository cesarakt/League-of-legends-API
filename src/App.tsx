import { useState } from 'react'
import Modal from 'react-modal'

import { Header } from './components/Header'
import { Title } from './components/Title'
import { Champions } from './components/Champions'
import { ChampionModal } from './components/ChampionModal'

import { GlobalStyle } from './assets/styles/global'

Modal.setAppElement('#root')

export function App() {
  const [isChampionModalOpen, setIsChampionModalOpen] = useState(false)

  function handleOpenChampionModal() {
    setIsChampionModalOpen(true)
  }

  function handleCloseChampionModal() {
    setIsChampionModalOpen(false)
  }
  return (
    <>
      <Header />
      <Title name="CAMPEÕES" />
      <Champions handleOpenChampionModal={handleOpenChampionModal} />

      <ChampionModal
        isOpen={isChampionModalOpen}
        onRequestClose={handleCloseChampionModal}
      />

      <GlobalStyle />
    </>
  )
}
