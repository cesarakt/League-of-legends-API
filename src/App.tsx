import { useEffect, useState } from 'react'

import { apiVersion } from './services/api'
import { Header } from './components/Header'
import { Title } from './components/Title'
import { Champions } from './components/Champions'

import { GlobalStyle } from './assets/styles/global'

export function App() {
  const [version, setVersion] = useState('')

  async function getVersion() {
    try {
      const response = await apiVersion.get(
        'https://ddragon.leagueoflegends.com/api/versions.json'
      )
      const dataVersion = response.data[0]
      setVersion(dataVersion)
    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    getVersion()
  }, [])

  return (
    <>
      <Header />
      <Title name="CAMPEÕES" />
      <Champions version={version} />
      <GlobalStyle />
    </>
  )
}
