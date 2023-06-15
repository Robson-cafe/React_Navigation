import React from 'react'
import { View, Text, Button } from 'react-native'

export default props => (
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {props.voltar 
                ?   <Button 
                        title='Voltar'
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    /> 
                : false
            }
            {props.avancar 
                ?   <Button 
                        title='Avançar'
                        onPress={() => {
                            //props.navigation.navigate(props.avancar) - apenas navega, não coloca uma tela em cima dessa mesma tela(não empilha repetido)
                            // props.navigation.push(
                            //     props.avancar,
                            //     // {
                            //     //     numero: parseInt(Math.random() * 100)
                            //     // }
                            //     props.avancarParams
                            // )
                            props.navigation.navigate(
                                props.avancar,
                                props.avancarParams
                            )
                        }}
                    /> 
                : false
            }
        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
)