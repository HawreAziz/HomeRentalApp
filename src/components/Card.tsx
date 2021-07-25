import React from 'react'
import { ImageSourcePropType, ImageStyle, Pressable, TextStyle } from 'react-native';
import { StyleSheet, Text, Image, View, ViewStyle, Dimensions } from 'react-native'
import COLORS from '../consts/colors';

interface Props {
    house: {
        title: string;
        image: ImageSourcePropType;
    }
}

interface StyleProps {
    container: ViewStyle;
    imageView: ImageStyle;
    textView: TextStyle;
}

const { width } = Dimensions.get('screen');

const Card: React.FC<Props> = ({ house }) => {
    return (
        <Pressable onPress={() => console.log('House selected')}>
            <View style={styles.container}>
                <Image source={house.image} style={styles.imageView} />
                <Text style={styles.textView}>{house.title}</Text>
            </View>
        </Pressable>
    )
}

export default Card

const styles = StyleSheet.create<StyleProps>({
    container: {
        width: width / 2 - 30,
        height: 200,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        elevation: 15,
        padding: 10,
    },
    imageView: {
        height: 140,
        width: '100%',
        borderRadius: 10,
    },
    textView: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    }
})

