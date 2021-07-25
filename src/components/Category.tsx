import React from 'react'
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import COLORS from '../consts/colors'

interface CategoryProps {
    title: string;
    isSelected: boolean;
}


interface StyleProps {
    container: ViewStyle;
    categoryText: TextStyle;
}


const Category: React.FunctionComponent<CategoryProps> = ({ title, isSelected }) => {
    const bgColor = isSelected ? COLORS.grey : COLORS.white;
    return (
        <View style={styles.container}>
            <Text style={styles.categoryText}>{title}</Text>
            <View style={{ backgroundColor: bgColor, height: 4 }} />
        </View>
    )
}


const styles = StyleSheet.create<StyleProps>({
    container: {
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.grey,
    },
})

export default Category
