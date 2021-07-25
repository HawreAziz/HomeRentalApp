import React from 'react'
import { View, Text, StyleSheet, Image, ViewStyle, ImageStyle } from 'react-native'
import COLORS from '../consts/colors'

interface HeaderProps {
    country: string;

}


interface StyleProps {
    container: ViewStyle;
    imgView: ImageStyle;
}

const Header: React.FunctionComponent<HeaderProps> = ({ country }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 14, color: COLORS.grey, fontWeight: 'bold' }}>Location</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{country}</Text>
            </View>
            <Image source={require('../assets/person.jpg')} style={styles.imgView} />
        </View>
    )
}


const styles = StyleSheet.create<StyleProps>({
    imgView: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 20
    }
})


export default Header
