import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '/GitHub/PlantManager/my-project/src/pages/styles/colors';
import wateringImg from '/GitHub/PlantManager/my-project/assets/watering.png';
import fonts from '/GitHub/PlantManager/my-project/src/pages/styles/fonts';

export function Welcome() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={ styles.wrapper}>
            <Text style={ styles.title }>
                Gerencie { '\n' }
                suas plantas de{ '\n' }
                forma fácil{ '\n' }
            </Text>

            <Image 
            style={ styles.image } 
            source={ wateringImg } 
            resizeMode='contain'
            />

            <Text style={ styles.subtitle }>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.7}
            >
                <Entypo 
                    name="chevron-thin-right"
                    style={styles.buttonIcon}
                />
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,

    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 36,
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },

    image: {
        height: Dimensions.get('window').width * 0.7
    },

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },

    buttonIcon: {
        color: colors.white,
        fontSize: 26,
    }
})