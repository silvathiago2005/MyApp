import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { DrowerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props){
    const { user, SignOut } = useContext(AuthContext);
    return(
        <DrowerContentScrollView {...props}>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
                <Text style={{color: '#FFF', fontSize: 18, marginTop: 5}}>Bem-vindo</Text>
                <Text style={{color: '#FFF', fontSize: 17, fontWeight: 'bold', paddingBottom: 25}}>{ user && user.nome }</Text>
            </View>

            <DrawerItemList {...props} />

            <DrawerItem {...props} label="Sair do app" inactiveBackgroundColor='#c62c36' onPress={ () => SignOut() }/>
        </DrowerContentScrollView>
    );
}