import React from 'react'
import { Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import COLORS from '../consts/colors'

interface ButtonProps {
    title: string;
    onPress?: () => void;
}


interface StyleProps {
    container: ViewStyle;
    textStyle: TextStyle;
}

const Button: React.FunctionComponent<ButtonProps> = ({ onPress = () => { }, title }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.container}
        >
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create<StyleProps>({
    container: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10
    },
    textStyle: {
        fontSize: 18,
        color: COLORS.white,
    }
})

export default Button
