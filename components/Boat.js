import React from 'react';
import { Text, View, Image } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const Boat = ({name, description, picture, icon_name, icon_color}) => {
    return (
        <View>
            <Text></Text>
            <Text style={{fontSize: 24, fontFamily: "serif", fontWeight:"bold"}}>
                <FontAwesome6 name={icon_name} color={icon_color} size={20} />
                {name}
            </Text>
            <Text style={{color:"grey"}}>
                {description}
            </Text>
            <Image source={picture}
                   style={{width: 400, height: 350}}/>
        </View>
    )
};


export default Boat;