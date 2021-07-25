import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ViewStyle,
    Dimensions,
    Pressable,
    ImageSourcePropType,
    ImageStyle
} from 'react-native'
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';


interface CategoryCardProps {
    house: {
        title: string;
        location: string;
        image: ImageSourcePropType;
    },
    goToDetail: () => void;
}


interface StyleProps {
    container: ViewStyle;
    imageView: ImageStyle;
}

const { width } = Dimensions.get('screen');

const CategoryCard: React.FC<CategoryCardProps> = ({ house, goToDetail }) => {

    const DetailIcon: React.FC<{ name: string, nr?: string }> = ({ name, nr = 2 }) => {
        return (
            <View style={
                {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 20
                }
            }>
                <Icon name={name} size={20} />
                <Text style={{ color: COLORS.grey, marginLeft: 5 }}>{nr}</Text>
            </View>
        );
    }

    return (
        <Pressable onPress={goToDetail}>
            <View style={styles.container}>
                <Image source={house.image} style={styles.imageView} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{house.title}</Text>
                        <Text style={{ fontSize: 16, color: COLORS.grey }}>{house.location}</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.blue }}>$1.65</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <DetailIcon name="hotel" />
                    <DetailIcon name="bathtub" />
                    <DetailIcon name="aspect-ratio" nr="100m" />
                </View>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create<StyleProps>({
    container: {
        height: 300,
        width: width - 40,
        alignSelf: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        elevation: 15,
        marginVertical: 20,
        padding: 10
    },
    imageView: {
        width: '100%',
        height: 160,
        borderRadius: 15
    },
})

export default CategoryCard
