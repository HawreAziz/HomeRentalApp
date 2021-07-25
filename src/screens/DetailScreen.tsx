import React from 'react'
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,
    ImageBackground,
    ImageStyle,
    ViewStyle,
    Pressable,
    Image,
} from 'react-native'
import { ScreenProps } from '../../types';
import COLORS from '../consts/colors';
import { HouseProps } from '../../types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../components/Button';

interface Props {
    house: HouseProps;
}

interface StyleProps {
    imageView: ImageStyle;
    iconView: ViewStyle;
    rateView: ViewStyle;
    priceView: ViewStyle;
    interiorView: ImageStyle;
}


const { width } = Dimensions.get('screen');

const DetailScreen: React.FC<ScreenProps<'Detail'>> = ({ navigation, route }) => {
    const { house } = route.params;
    if (!house) {
        return null;
    }

    const IconView: React.FC<{ name: string; nr?: string; }> = ({ name, nr = 2 }) => {
        return (
            <View style={{ flexDirection: 'row', marginRight: 20, alignItems: 'center' }}>
                <Icon name={name} size={20} />
                <Text style={{ marginLeft: 3 }}>{nr}</Text>
            </View>
        );
    }

    const HouseDetail: React.FC = () => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 20 }}>
                <IconView name="hotel" />
                <IconView name="bathtub" />
                <IconView name="aspect-ratio" nr="100m area" />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 15, marginTop: 20 }}>
                    <ImageBackground source={house.image} style={styles.imageView} >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingHorizontal: 20 }}>
                            <Pressable onPress={navigation.goBack} style={styles.iconView}>
                                <Icon name='arrow-back-ios' size={20} color={COLORS.grey} />
                            </Pressable>
                            <View style={styles.iconView}>
                                <Icon name='favorite' size={20} color={COLORS.red} />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>
                    <View style={{}}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{house.title}</Text>
                        <Text style={{ fontSize: 16, color: COLORS.grey, marginTop: 5 }}>{house.location}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.rateView}>
                            <Text style={{ fontWeight: 'bold', color: COLORS.white }}>4.8</Text>
                        </View>
                        <Text style={{ marginTop: 10, marginLeft: 5, fontWeight: 'bold' }}>165 raitings</Text>
                    </View>
                </View>
                <HouseDetail />
                <Text style={{ color: COLORS.grey, marginHorizontal: 20, marginTop: 15 }}>{house.details}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={house.interiors}
                    keyExtractor={(_, key) => key.toString()}
                    renderItem={({ item }) => <Image source={item} style={styles.interiorView} />}
                    contentContainerStyle={{ paddingLeft: 20, marginTop: 20 }}
                />
            </ScrollView>
            <View style={styles.priceView}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.blue }}>$1.500</Text>
                    <Text style={{ color: COLORS.grey }}>Total price</Text>
                </View>
                <Button title="Book Now" />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create<StyleProps>({
    imageView: {
        width: width - 40,
        height: 300,
        borderRadius: 20,
        overflow: 'hidden',
    },
    iconView: {
        height: 40,
        width: 40,
        backgroundColor: COLORS.light,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10
    },
    rateView: {
        height: 40,
        width: 40,
        padding: 5,
        backgroundColor: COLORS.blue,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    interiorView: {
        width: width / 3 - 10,
        height: 80,
        borderRadius: 10,
        marginRight: 10
    },
    priceView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.light,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center'
    }
})

export default DetailScreen;
