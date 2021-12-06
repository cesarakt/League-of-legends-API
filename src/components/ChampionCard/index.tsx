import { Container } from './styles'

interface ChampionCardProps {
  id: string
  name: string
  title: string
  click: () => void
  setSkinName: (name: string) => void
}

export function ChampionCard({
  name,
  title,
  id,
  click,
  setSkinName
}: ChampionCardProps) {
  function openModal(name: string) {
    setSkinName(name)
    click()
  }
  return (
    <Container>
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
        alt={name}
      />

      <div>
        <button onClick={() => openModal(name)}>
          <h1>{name}</h1>
          <span>{title.toUpperCase()}</span>
        </button>
      </div>
    </Container>
  )
}
