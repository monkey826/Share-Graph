import React from 'react';
import {
    View, Text
} from 'react-native'
import Highcharts from 'highcharts';


export const HighChart = React.createClass({
    
    render() {
        const style = {
            marginTop: '25px',
            marginBottom: '0px'
        };
        return (
            <View
                style={style}
                id="chart"
            >
                <Text> Hello </Text>
            </View>
        )
    }
});
