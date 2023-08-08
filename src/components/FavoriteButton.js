import React from "react";
import { View, Image } from "react-native";
import { colors, shadow } from "../constants/theme";
import Icon from "./Icon";

const FavoriteButton = ({ active, style }) => {
  return (
    <View
      style={[
        { backgroundColor: colors.white, padding: 4, borderRadius: 20 },
        style,
        shadow.light,
      ]}
    >
      <Icon icon={active ? "FavoriteFilled" : "Favorite" } size={24} />
    </View>
  );
};

export default FavoriteButton;
