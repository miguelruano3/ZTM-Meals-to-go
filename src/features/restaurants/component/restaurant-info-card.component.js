import React from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Spacer } from '../../../components/spacer.component'
import { Text } from '../../../components/typography/text.component'
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Title, Info, Section, Rating, SectionEnd, Open, Icon
} from './restaurant-info-card.styles'

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
    photos = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/640px-Restaurant_N%C3%A4sinneula.jpg"
    ],
    address = "100 random strest",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true
  } = restaurant

  const ratingArray = Array.from(new Array(Math.floor(rating)))
  return (
    <>
      <RestaurantCard elevation={5}>
        <Card.Content>
          <RestaurantCardCover
            style={styles.cover}
            source={{ uri: photos[0] }}
          />
          <Info>
            <Text variant="label">{name}</Text>
            <Section>
              <Rating>
                {ratingArray.map((_, index) => <SvgXml key={index} xml={star} width={20} height={20} />)}
              </Rating>
              <SectionEnd>
                {isClosedTemporarily && (
                  <Text variant="error">
                    CLOSED TEMPORARILY
                  </Text>
                )}
                <Spacer position="left" size="large">
                  {isOpenNow && <Open xml={open} width={20} height={20} />}
                </Spacer>
                <Spacer position="left" size="large">
                  <Icon source={{ uri: icon }} />
                </Spacer>
              </SectionEnd>
            </Section>
            <Address>{address}</Address>
          </Info>
        </Card.Content>
      </RestaurantCard>
    </>
  )
}

const styles = StyleSheet.create({})