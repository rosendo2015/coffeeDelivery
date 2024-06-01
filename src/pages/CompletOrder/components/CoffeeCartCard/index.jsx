import { ActionsContainer, CoffeeCartCardContainer, RemoveButtonContainer } from './styles'
import Coffee001 from '../../../../assets/coffee001.png'
import { RegularText } from '../../../../components/Typography'
import { QuantityInput } from '../../../../components/QuantityInput'
import { Trash } from '@phosphor-icons/react'
export function CoffeeCartCard() {
    return (
        <CoffeeCartCardContainer>
            <div>
                <img src={Coffee001} alt="coffee" />
                <div>
                    <RegularText color='subtitle'>Expresso Tradicional</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small"/>
                        <RemoveButtonContainer>
                            <Trash size={16} />
                            REMOVER
                        </RemoveButtonContainer>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ 9,90</p>
        </CoffeeCartCardContainer>
    )
}