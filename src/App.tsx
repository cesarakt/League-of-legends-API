import { Header } from './components/Header'
import { Title } from './components/Title'
import { Champions } from './components/Champions'

import { GlobalStyle } from './assets/styles/global'

export function App() {
  return (
    <>
      <Header />
      <Title name="CAMPEÕES" />
      <Champions />
      <GlobalStyle />
    </>
  )
}
