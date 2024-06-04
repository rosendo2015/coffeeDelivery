import { CardFooter, CoffeeCardContainer, CoffeeDescription, CoffeeName, Tags, AddCartWrapper } from './styles'

import { RegularText, TitleText } from '../../../../components/Typography'
import { QuantityInput } from '../../../../components/QuantityInput'
import { ShoppingCart } from '@phosphor-icons/react'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'

export interface Coffee {
    id: number,
    tags: string[],
    name: string,
    description: string,
    photo: string,
    price: number
}

interface CoffeeProps {
    coffee: Coffee;

}
export function CoffeeCard({ coffee }: CoffeeProps) {
    const [quantity, setQuantity] = useState(1)

    function handleIncrease() {
        setQuantity(state => state + 1)
    }
    function handleDecrease() {
        setQuantity(state => state - 1)
    }

    const { addCoffeeToCart } = useCart()
    function handleAddToCard() {

        const coffeeToAdd = {
            ...coffee,
            quantity,
        }
        addCoffeeToCart(coffeeToAdd)
    }

    const formatedPrice = formatMoney(coffee.price)
    return (
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} alt="coffee" />
            <Tags>
                {coffee.tags.map(tag => (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Tags>
            <CoffeeName>
                {coffee.name}
            </CoffeeName>
            <CoffeeDescription>
                {coffee.description}
            </CoffeeDescription>
            <CardFooter>
                <div>
                    <RegularText size='s'>R$</RegularText>
                    <TitleText size='m' color='text' as="strong">
                        {formatedPrice}
                    </TitleText>
                </div>
                <AddCartWrapper>
                    <QuantityInput
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={quantity}
                    />
                    <button onClick={handleAddToCard}>
                        <ShoppingCart size={22} weight='fill' />
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    )
}