import CoffeeDelivery from '../../../../assets/CoffeeDelivery.svg'
import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import { RegularText } from '../../../../components/Typography';
import { InfoWithIcon } from '../../../../components/InfoWithIcon';
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

export function Intro() {
    const { colors } = useTheme()
    return (
        <IntroContainer>
            <IntroContent className='container'>
                <div>

                    <section>

                        <IntroTitle size='xl'>
                            Encontre o café perfeito para qualquer hora do dia
                        </IntroTitle>
                        <RegularText size='l' color='subtitle' as="h3">
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </RegularText>
                    </section>
                    <BenefitsContainer>
                        <InfoWithIcon
                            iconBg={colors['brand-yellow-dark']}
                            icon={<ShoppingCart weight='fill' size={16}/>}
                            text="Compra simples e segura"
                        />
                        <InfoWithIcon
                            iconBg={colors['base-text']}
                            icon={<Package weight='fill' size={16}/>}
                            text="Embalagem mantém o café intacto"
                        />
                        <InfoWithIcon
                            iconBg={colors['brand-yellow']}
                            icon={<Timer weight='fill' size={16}/>}
                            text="Entrega rápida e rastreada"
                        />
                        <InfoWithIcon
                            iconBg={colors['brand-purple-dark']}
                            icon={<Coffee weight='fill' size={16}/>}
                            text="O café chega fresquinho até você"
                        />
                    </BenefitsContainer>
                </div>
                <img src={CoffeeDelivery} alt="glass of coffee" />

            </IntroContent>
        </IntroContainer>
    )
}

