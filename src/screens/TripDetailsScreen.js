import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { colors, sizes, spacing } from "../constants/theme";
import Icon from "../components/Icon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import TripDetailsCard from "../components/TripDetailsCard";
import * as Animatable from "react-native-animatable";

const TripDetailsScreen = ({ navigation, route }) => {
  const { trip } = route.params;
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Animatable.View 
      animation="fadeIn"
      delay={500}
      duration={400}
      easing="ease-in-out"
      style={[styles.backButton, { marginTop: insets.top }]}>
        <Icon
          icon={"ArrowLeft"}
          style={styles.backIcon}
          onPress={navigation.goBack}
        />
      </Animatable.View>
      <SharedElement
        id={`trip.${trip.id}.image`}
        style={StyleSheet.absoluteFillObject}
      >
        <View style={[StyleSheet.absoluteFillObject, styles.imageBox]}>
          <Image
            source={trip.image}
            style={[StyleSheet.absoluteFillObject, styles.image]}
          />
        </View>
      </SharedElement>
      <TripDetailsCard trip={trip} />
    </View>
  );
};
TripDetailsScreen.sharedElement = (route) => {
  const { trip } = route.params;
  return [
    {
      id: `trip.${trip.id}.image`,
    },
  ];
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    overflow: "hidden",
  },
  image: {
    width: sizes.width,
    height: sizes.height,
    resizeMode: "cover",
  },
  backButton: {
    position: "absolute",
    left: spacing.l,
    zIndex: 1,
  },
  backIcon: {
    tintColor: colors.white,
  },
});

export default TripDetailsScreen;
