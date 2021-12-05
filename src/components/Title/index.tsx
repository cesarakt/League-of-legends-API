import { Container } from './styles'

interface TitleProps {
  name: string
}

export function Title({ name }: TitleProps) {
  return (
    <Container>
      <div></div>
      <span>{name}</span>
      <div></div>
    </Container>
  )
}
