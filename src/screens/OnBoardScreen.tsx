import React from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet, StatusBar, ImageStyle, FlatList, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import { ScreenProps } from '../../types';
import Button from '../components/Button';
import Indicator from '../components/Indicator';
import COLORS from '../consts/colors';


const { width, height } = Dimensions.get('screen');

interface Props {

}

interface StyleProps {
    imgView: ImageStyle;
}

const slides = [
    { id: "1", image: require('../assets/onboardImage.jpg') },
    { id: "2", image: require('../assets/house1.jpg') },
    { id: "3", image: require('../assets/onboardImage.jpg') },
]


const OnBoardScreen: React.FC<ScreenProps<'OnBoard'>> = ({ navigation }) => {
    const [currentIndicatorIndex, setCurrentIndicatorIndex] = React.useState(0);
    const [borderRadius, setBorderRadius] = React.useState(120);

    const onUpdateScreen = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const x = event.nativeEvent.contentOffset.x;
        setCurrentIndicatorIndex(Math.round(x / width));
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor='transparent' />
            <View>
                <FlatList
                    data={slides}
                    horizontal
                    contentContainerStyle={{ height: height * .5 }}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onMomentumScrollEnd={onUpdateScreen}
                    renderItem={({ item }) => {
                        return <View >
                            <Image source={item.image} style={styles.imgView} />
                        </View>
                    }} />
            </View>
            <View style={{ height: height * .5 }} >
                <Indicator indicators={slides.map(slide => slide.id)} indicatorIndex={currentIndicatorIndex} />
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginHorizontal: 20, marginTop: 30 }} >Find your</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginHorizontal: 20 }} >sweet home</Text>
                <View style={{ width: 280, paddingHorizontal: 20, paddingTop: 10 }}>
                    <Text style={{ fontSize: 16, color: COLORS.grey, lineHeight: 18 }}>Schedule visits in just a few clicks visit in just a few clicks</Text>
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                    <Button onPress={() => navigation.navigate('Home')} title='Get Started' />
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create<StyleProps>({
    imgView: {
        height: "100%",
        width,
        borderBottomLeftRadius: 100
    }

})

export default OnBoardScreen
