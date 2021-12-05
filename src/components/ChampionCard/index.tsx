import { Container } from './styles'

interface ChampionCardProps {
  id: string
  name: string
  title: string
}

export function ChampionCard({ name, title, id }: ChampionCardProps) {
  return (
    <Container>
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
        alt={name}
      />
      <div>
        <h1>{name}</h1>
        <span>{title.toUpperCase()}</span>
      </div>
    </Container>
  )
}
