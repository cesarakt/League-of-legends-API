import { useEffect, useState } from 'react'
import { apiChampions } from '../../services/api'
import { ChampionCard } from '../ChampionCard'

import { CardArea, Container } from './styles'

interface ChampionsProps {
  version: string
}

interface Champion {
  key: string
  value: any
}

export function Champions({ version }: ChampionsProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [championsData, setChampionsData] = useState<Champion[]>([])

  useEffect(() => {
    async function getChampions() {
      setIsLoading(true)
      try {
        const response = await apiChampions.get(
          `/11.23.1/data/pt_BR/champion.json`
        )
        const data = response.data.data

        const newList = []

        for (let [key, value] of Object.entries(data)) {
          const dataChampionFormat = { key, value }
          newList.push(dataChampionFormat)
        }
        console.log(newList)
        setChampionsData(newList)
        setIsLoading(false)
      } catch (error) {
        console.log(error, 'Ta dando errado')
        setIsLoading(false)
      }
    }
    getChampions()
  }, [])

  return (
    <Container>
      <CardArea>
        {!isLoading &&
          championsData.map(champion => (
            <ChampionCard
              id={champion.key}
              name={champion.value.name}
              title={champion.value.title}
            />
          ))}
      </CardArea>
    </Container>
  )
}
