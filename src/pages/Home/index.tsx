import { HomeContainer } from './styles'
import { CardProduct } from '../../components/CardProduct'
import { Intro } from './components/Intro'

export function Home() {
  return (
    <HomeContainer>
      
        <Intro />
        <h2>Nossos cafés</h2>
        <div className='wrapperCards'>
          <CardProduct />         
        </div>
      
    </HomeContainer>
  )
}

