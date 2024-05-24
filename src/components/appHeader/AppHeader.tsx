import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import AppTitleMain from '../appTitle/AppTitleMain';
import { useNavigation } from '@react-navigation/native';
import { styles } from './AppHeaderStyle';
import Colors from '../../constant/Colors';

interface AppHeaderProps {
  nome: string;
  isDarkTheme: boolean;
  avatar?: any;
  navigation?: any; 
  route?: string;
  showAvatar?: boolean; // Add this line
}

export default function AppHeader({ nome, avatar, route, navigation, isDarkTheme, showAvatar = true }: AppHeaderProps) {
  const changeRoute = () => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <View>
        <AppTitleMain text={`${nome}`} isDarkTheme={isDarkTheme} />
      </View>
      {showAvatar && (
        <View style={{
          width: 50, height: 50, borderRadius: 25, backgroundColor: isDarkTheme ? Colors.mainDark : Colors.mainLight,
          justifyContent: 'center', alignItems: 'center'
        }}>
          <Image
            source={ avatar }
            style={styles.image}
          />
        </View>
      )}
    </View>
  );
};