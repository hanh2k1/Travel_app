import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { colors, shadow, sizes, spacing } from "../constants/theme";
import { TouchableOpacity } from "react-native";
import FavoriteButton from "./FavoriteButton";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import TripDetailsScreen from "../screens/TripDetailsScreen";

const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 220;

const TripsList = ({ list }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {list.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.cardContainer}
            key={item.id}
            onPress={() => {
              navigation.navigate('TripDetails', {trip: item})
            }}
          >
            <View style={[styles.card, shadow.light]}>
            <SharedElement id={`trip.${item.id}.image`} >
              <View style={styles.imageBox}>
                <Image style={styles.image} source={item.image} />
              </View>
              </SharedElement>
              <View style={styles.footer}>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
                <FavoriteButton />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    overflow: "hidden",
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    resizeMode: "cover",
  },
  cardContainer: {
    marginLeft: spacing.l,
    marginBottom: spacing.l,
  },
  footer: {
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginVertical: 4,
    fontSize: sizes.body,
    color: colors.primary,
    fontWeight: "bold",
  },
  location: {
    fontSize: sizes.body,
    color: colors.lightGray,
  },
});

export default TripsList;
