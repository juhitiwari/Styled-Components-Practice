import React from 'react';
import { SafeAreaView,StatusBar, ScrollView } from 'react-native';
import styled from 'styled-components';
import {AntDesign} from '@expo/vector-icons'

export default function App() {

  const attractions=[
    {
      name:"Amer Fort",
      info:"Palace | 4.6",
      image:require("./assets/amer.jpeg")

    },{

      name:"Albert Museum",
      info:"Musuem | 4.5",
      image:require("./assets/albert.jpg")

    },{
      name:"Jal Mahal",
      info:"Palace | 4.2",
      image:require("./assets/jalmahal.jpg")
    }
  ]

  return (
    <Container>

    <StatusBar barStyle="light-content"/>
      <PlaceBackground source={require("./assets/background.jpg")}>
        <SafeAreaView>
          <MenuBar>
            <BackButton>
            <AntDesign
              name="arrowleft"
              size={24}
              color="#FFF"/>
            <Text style={{marginLeft:10}}>City Attractions</Text>
            </BackButton>
            <AntDesign
              name="pushpin"
              size={24}
              color="#FFF"/>
          </MenuBar>
        
          <City>
            <Text title bold>Jaipur</Text>
            <Divider/>
            <Text large bold>The Pink City</Text>
            <Text small>Rajasthan, India</Text>
          </City>
          <Button>
            <Text small bold>VISIT JAIPUR</Text>
          </Button>
        </SafeAreaView>
      </PlaceBackground>
      
      <CityAttractions>
        <Text dark large bold>Places to Visit in Jaipur</Text>
        <Text dark small>12 Attractions found</Text>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
        <Attractions>
        
          {attractions.map((attraction,index)=>{
            return (

              <Attraction key={index}>
                <AttractionImage source={attraction.image}/>
                <AttractionInfo>
            <Text dark bold>{attraction.name}</Text>
            <Text dark small>{attraction.info}</Text>
                </AttractionInfo>
              <AntDesign
                name="pushpino"
                size={18}
                color="#000"/>
              </Attraction>
            )
          })}
         

        </Attractions>
        </ScrollView>
        
      </CityAttractions>
      

    </Container>
  );
}

const Container=styled.View`
    flex:1;
    background-color:#FFF;

`

const PlaceBackground=styled.ImageBackground`
  width:100%;

`

const MenuBar=styled.View`
  flex-direction:row;
  justify-content:space-between;
  padding:16px
`

const BackButton =styled.View`
  flex-direction:row;
  align-items:center

`

const Text=styled.Text`
  color:${(props)=>(props.dark?"#000":"#FFF")};
  font-weight:${(props)=>(props.bold?"bold":"normal")};

  

  ${({title,large,small})=>{
    switch(true){
      case title:
        return `font-size:32px`;
      case large:
        return `font-size:20px`;
      case small:
        return `font-size:13px`;
    }
  }}

  
  
`

const City=styled.View`
  padding:0 32px;
  margin:120px 0 32px 0;
`

const Divider=styled.View`
  border-bottom-color:#FFF;
  border-bottom-width:2px;
  width:150px;
  margin:8px 0 
` 

const Button=styled.TouchableOpacity`
  margin:0 0 48px 32px;
  background-color:rgba(255,255,255,0.3);
  align-self:flex-start;
  padding:6px 18px;
  border-radius:100px

`
const CityAttractions=styled.View`
  margin-top:-24px;
  padding:32px;
  background-color:#fff;
  border-top-left-radius:24px;
  border-top-right-radius:24px;
  flex:1
 

`
const Attractions=styled.View`
padding:16px;


`

const Attraction=styled.View`
flex-direction:row;
align-items:center;
margin-bottom:16px;


`
const AttractionImage=styled.Image`
width:60px;
height:60px;
border-radius:8px;


`
const AttractionInfo=styled.View`
flex:1;
margin-left:12px



`
