import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import COLORS from '../consts/colors'

interface Props {
    indicatorIndex: number;
    indicators: string[];
}

interface StyleProps {
    indicator: ViewStyle;
}


const Indicator: React.FC<Props> = ({ indicatorIndex, indicators }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    {
                        indicators.map((indicator, index) => {
                            return <View
                                key={indicator}
                                style={
                                    [
                                        styles.indicator, 
                                        indicatorIndex === index 
                                        ? {backgroundColor: COLORS.dark} 
                                        : { backgroundColor: COLORS.grey}
                                    ]
                                }
                            />
                        })
                    }
                </View>
    )
}


const styles = StyleSheet.create<StyleProps>({
    indicator: { 
        height: 3, 
        width: 30, 
        justifyContent: 'center', 
        marginRight: 5 
    }
})

export default Indicator
