import React from 'react';
import {
    Text, WebView, View
} from 'react-native';



const Chart = () => (
    <View>
        <WebView
            source={{ uri: 'https://github.com/facebook/react-native' }}
            style={{ marginTop: 40 }}
            
        />
    </View>
)
export default Chart;