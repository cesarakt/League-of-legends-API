import { useEffect, useState } from 'react'
import { apiChampions } from '../../services/api'

import { ChampionCard } from '../ChampionCard'

import { CardArea, Container } from './styles'

interface Champion {
  key: string
  name: string
  id: string
  title: string
}

export function Champions() {
  const [isLoading, setIsLoading] = useState(true)
  const [championsData, setChampionsData] = useState<Champion[]>([])

  useEffect(() => {
    async function getChampions() {
      setIsLoading(true)
      try {
        const response = await apiChampions.get('/pt_BR/champion.json')
        const data = response.data.data
        const newList: Champion[] = Object.values(data)

        setChampionsData(newList)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
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
              key={champion.key}
              id={champion.id}
              name={champion.name}
              title={champion.title}
            />
          ))}
      </CardArea>
    </Container>
  )
}
