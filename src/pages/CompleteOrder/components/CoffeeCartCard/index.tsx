import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import { 
    ActionsContainer, 
    CoffeeCartCardContainer, 
    RemoveButtonContainer 
} from './styles'
import { Trash } from '@phosphor-icons/react'
import {CartItem} from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeCartCardProps {
    coffee: CartItem;
}
export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
    const {chageCartItemQuantity, removeCartIem} = useCart()

function handleIncrease(){
    chageCartItemQuantity(coffee.id, 'increase')
}
function handleDecrease(){
    chageCartItemQuantity(coffee.id, 'decrease')
}

function handleRemove(){
    removeCartIem(coffee.id)
}

    const coffeeTotal = coffee.price * coffee.quantity;
    const formattedPrice = formatMoney(coffeeTotal)
    return (
        <CoffeeCartCardContainer>
            <div>
                <img src={`/coffees/${coffee.photo}`} alt="coffee" />
                <div>
                    <RegularText color='subtitle'>{coffee.name}</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small" onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={coffee.quantity}/>
                        <RemoveButtonContainer onClick={handleRemove}>
                            <Trash size={16} />
                            REMOVER
                        </RemoveButtonContainer>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ {formattedPrice}</p>
        </CoffeeCartCardContainer>
    )
}