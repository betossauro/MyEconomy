import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import AppTitleMain from '../appTitle/AppTitleMain';
import AppSubtitle from '..//appSubtitle/AppSubtitle';
import { useNavigation } from '@react-navigation/native';
import { styles } from './AppHeaderStyle';

interface AppHeaderProps {
  nome: string;
  isDarkTheme: boolean;
  avatar: any;
  navigation?: any; 
  route?: string; 
}

export default function AppHeader({ nome, avatar, route, navigation, isDarkTheme }: AppHeaderProps) {
  const changeRoute = () => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <View>
        <AppTitleMain text={`Olá ${nome} 👋`} isDarkTheme={isDarkTheme} />
        <AppSubtitle text={"É bom te ver por aqui!"} isDarkTheme={isDarkTheme} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
          source={ avatar }
          style={styles.image}
          />
      </TouchableOpacity>
    </View>
  );
};
