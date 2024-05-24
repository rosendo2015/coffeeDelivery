import { Header } from '../../components/Header'
import { Container } from './styles'
import CoffeeDelivery from '../../assets/CoffeeDelivery.svg'
import { FaCartShopping } from 'react-icons/fa6'
import { FaBox, FaClock, FaCoffee } from 'react-icons/fa'
import { CardProduct } from '../../components/CardProduct'

export function Home() {
  return (
    <Container>
      <Header></Header>
      <main>
        <div className='topMain'>
          <div>
            <div className='top'>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </div>
            <div className='wrapperList'>
              <div>
                <div className='itemList'>
                  <span><FaCartShopping/></span>
                  <p>Compra simples e segura</p>
                </div>
                <div className='itemList'>
                  <span><FaClock/></span>
                  <p>Embalagem mantém o café intacto</p>
                </div>
              </div>
              <div>
                <div className='itemList'>
                  <span><FaBox/></span>
                  <p>Entrega rápida e rastreada</p>
                </div>
                <div className='itemList'>
                  <span><FaCoffee/></span>
                  <p>O café chega fresquinho até você</p>
                </div>
              </div>
            </div>
          </div>
          <img src={CoffeeDelivery} alt="copo de café" />
        </div>
        <CardProduct/>
      </main>
    </Container>
  )
}
