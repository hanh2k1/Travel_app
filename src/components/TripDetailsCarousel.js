import React from "react";
import { FlatList, View, StyleSheet} from "react-native";


const TripDetailsCarousel = ({slides}) =>{
    return(
        <FlatList data={slides}   renderItem={() =>{
            return(
                <View></View>
            )
        }}/> 
    )
}

const styles = StyleSheet.create({

});

export default TripDetailsCarousel;