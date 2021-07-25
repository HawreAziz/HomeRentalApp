import React from 'react'
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    ViewStyle,
    ScrollView,
    Pressable
} from 'react-native'
import { ScreenProps } from '../../types'
import Card from '../components/Card'
import Category from '../components/Category'
import CategoryCard from '../components/CategoryCard'
import Header from '../components/Header'
import Search from '../components/Search'
import COLORS from '../consts/colors'
import houses from '../consts/houses';

const optionList = [
    { title: "Buy a home", image: require('../assets/house1.jpg') },
    { title: "Rent a home", image: require('../assets/house2.jpg') },
]


const categories = ['Popular', 'Recommended', 'Nearest'];

interface StyleProps {
    cardContainer: ViewStyle;
    categoryContainer: ViewStyle;
}

const HomeScreen: React.FC<ScreenProps<'Home'>> = ({ navigation }) => {
    const [categoryIndex, setCategoryIndex] = React.useState(0);

    const OptionList: React.FC = () => {
        return (
            <View style={styles.cardContainer}>
                {
                    optionList.map((house, index) => {
                        return <Card key={index} house={house} />
                    })
                }
            </View>
        );
    }


    const Categories: React.FC = () => {
        return (
            <View style={styles.categoryContainer}>
                {
                    categories.map((category, index) => {
                        return (
                            <Pressable key={index} onPress={() => setCategoryIndex(index)}>
                                <Category
                                    title={category}
                                    isSelected={categoryIndex === index}
                                />
                            </Pressable>
                        );
                    })
                }
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar backgroundColor={COLORS.grey} />
            <Header country='Italy' />
            <ScrollView showsVerticalScrollIndicator={false} >
                <Search placeHolder="Search address, city, location" />
                <OptionList />
                <Categories />
                <CategoryCard house={houses[0]} goToDetail={() => navigation.navigate('Detail', { house: houses[0] })} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create<StyleProps>({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30
    }

})

export default HomeScreen

