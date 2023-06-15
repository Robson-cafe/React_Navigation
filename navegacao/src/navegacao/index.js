import React from 'react'
import 'react-native-gesture-handler'
import { SafeAreaView, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './Stack'

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    </SafeAreaView>
)