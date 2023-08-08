import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { colors, shadow, sizes, spacing } from "../constants/theme";
import FavoriteButton from "./FavoriteButton";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";


const CARD_WIDTH = sizes.width - 100;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const TopPlacesCarousel = ({ list }) => {
const navigation = useNavigation();

  return (
    <FlatList
      data={list}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="normal"
      showsHorizontalScrollIndicator={false}
      keyExtractor={(i) => i.id}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
          onPress={() => {
              navigation.navigate('TripDetails', {trip: item})
            }}
            style={{
              marginLeft: spacing.l,
              marginRight: index === list.length - 1 ? spacing.l : 0,
            }}
          >
            <View style={[styles.card, shadow.dark]}>
            <FavoriteButton style={styles.favorite}/>
            <SharedElement id={`trip.${item.id}.image`} style={StyleSheet.absoluteFillObject} >
              <View style={styles.imageBox}>
                <Image source={item.image} style={styles.image} />
              </View>
              </SharedElement>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>                
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor:colors.white,
    borderRadius: sizes.radius,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 22,
    overflow: "hidden",
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: "cover",
  },
  titleBox:{
    position:'absolute',
    top: CARD_HEIGHT - 60,
    left: 16,
  },
  title:{
    fontSize: sizes.h3,
    fontWeight:'bold',
    color: colors.white,
  },
  location:{
    fontSize: sizes.h3,
    color: colors.white,
  },
  favorite:{
    position:'absolute',
    top: spacing.m,
    right: spacing.m,
    zIndex: 1,
  },
});
export default TopPlacesCarousel;
