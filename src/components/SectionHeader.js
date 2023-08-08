import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Button} from "react-native";
import { colors, sizes, spacing } from "../constants/theme";

const SectionHeader = ({title, onPress, buttonTitle = 'Button'}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Button title={buttonTitle} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: spacing.l,
        marginBottom: 10,    
        marginLeft: spacing.l,
        marginRight: spacing.m
    },
    title:{
        fontSize: sizes.h3,
        fontWeight:'bold',
    }
})

export default SectionHeader;