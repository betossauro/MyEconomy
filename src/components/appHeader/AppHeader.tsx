import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import AppTitleMain from '../appTitle/AppTitleMain';
import { useNavigation } from '@react-navigation/native';
import { styles } from './AppHeaderStyle';
import Colors from '../../constant/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../ThemeContext';

interface AppHeaderProps {
  nome: string;
  isDarkTheme: boolean;
  avatar?: any;
  navigation?: any; 
  route?: string;
  showAvatar?: boolean;
  toggleTheme?: () => void;
}

export default function AppHeader({ nome, avatar, route, navigation, showAvatar = true }: AppHeaderProps) {
  const { isDarkTheme, toggleTheme } = useTheme();
  const changeRoute = () => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <View>
        <AppTitleMain text={`${nome}`} isDarkTheme={isDarkTheme} />
      </View>
      {toggleTheme && (
        <TouchableOpacity onPress={toggleTheme}>
          <Icon 
            name={isDarkTheme ? 'moon' : 'sunny'} 
            size={24} 
            color={isDarkTheme ? Colors.mainDark : Colors.mainLight} 
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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
      </TouchableOpacity>
    </View>
  );
};