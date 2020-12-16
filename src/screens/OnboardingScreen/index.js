import React, {useState, useRef} from 'react';
import {
  Dimensions,
  View,
  Image
} from 'react-native'
import Button from '../../components/Button'
import ButtonSecundary from '../../components/ButtonSecundary'
import Carousel, {Pagination} from 'react-native-snap-carousel';

import logo from '../../assets/logo.png'

import {
  Container,
  ContainerButton,
  Content,
  Title,
  SubTitle,
  Header
} from './styles';

const OnboardingScreen = ({navigation}) => {
  const carouselRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const windowWidth = Dimensions.get('window').width;

  const [data] = useState([
    {
      title:"Conta digital com zero mensalidade e anuidade.",
      subtitle: "Um banco 100% digital"
    },
    {
      title:"Tudo ilimitado e gratuito",
      subtitle: "Nada de taxas em transferências, boletos de depósito, investimentos e recargas."
    },
    {
      title:"Aproveite a melhor experiência em serviços financeiros.",
      subtitle: "O banco que mima você."
    }
  ])

  const renderItem = ({item}) => {
    return(
      <View>
        <Title>{item.title}</Title>
        <SubTitle>{item.subtitle}</SubTitle>
      </View>
    )
  }

  return(
    <Container>
      
      <Content>
        <Header>
          <Image source={logo} style={{width:200, height:100}} resizeMode="contain" />
        </Header>
        <Carousel
          ref={carouselRef}
          data={data}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          onSnapToItem={(index) => setActiveSlide(index) }
        />

        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          containerStyle={{backgroundColor: 'transparent' }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          inactiveDotStyle={{
            opacity:0.5
          }}
          inactiveDotOpacity={0.5}
          inactiveDotScale={0.6}
        />
      </Content>
      
      <ContainerButton>
        <Button onPress={() => navigation.navigate("PrepareScreen")} >Abrir minha conta</Button>
        <ButtonSecundary onPress={() => navigation.navigate("LoginDocumentScreen")} >Já sou cliente</ButtonSecundary>
      </ContainerButton>
    </Container>
  );
}

export default OnboardingScreen;