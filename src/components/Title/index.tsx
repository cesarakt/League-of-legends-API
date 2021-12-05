import { Container } from './styles'

interface TitleProps {
  name: string
}

export function Title({ name }: TitleProps) {
  return (
    <Container>
      <div></div>
      <h1>{name}</h1>
      <div></div>
    </Container>
  )
}
