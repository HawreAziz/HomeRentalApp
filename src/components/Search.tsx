import React from 'react'
import { StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

interface Props {
    placeHolder: string;
}

interface StyleProps {
    container: ViewStyle;
    searchView: ViewStyle;
    tuneView: ViewStyle;
}

const Search: React.FC<Props> = ({ placeHolder }): React.ReactElement => {
    return (
        <View style={styles.container}>
            <View style={styles.searchView} >
                <Icon name='search' size={28} color={COLORS.grey} />
                <TextInput placeholder={placeHolder} style={{ fontSize: 16 }} />
            </View>
            <View style={styles.tuneView}>
                <Icon name='tune' size={28} color={COLORS.white} />
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create<StyleProps>({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    searchView: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.light,
        padding: 12,
        borderRadius: 10,
        marginRight: 10,
    },
    tuneView: {
        height: 50,
        padding: 10,
        backgroundColor: COLORS.dark,
        borderRadius: 10
    }
})
