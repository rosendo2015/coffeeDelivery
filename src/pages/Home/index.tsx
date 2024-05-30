import { HomeContainer } from './styles'
import { Intro } from './components/Intro'
import { OurCoffees } from './components/OurCoffees'

export function Home() {
  return (
    <HomeContainer>
      
        <Intro />
        <OurCoffees />
      
    </HomeContainer>
  )
}

