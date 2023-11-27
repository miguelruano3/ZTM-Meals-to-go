import React from "react"
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native"
import { Searchbar } from "react-native-paper"
import { RestaurantInfoCard } from "../component/restaurant-info-card.component"
import styled from "styled-components"

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`
const SearchContainer = styled.View`
  padding: 16px;
  background-color: ${props => props.theme.colors.ui.primary};
`
const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantInfoCard />
          <Text>list</Text>
        </RestaurantListContainer>
      </SafeArea>
    </>
  );
};

const styles = StyleSheet.create({});
