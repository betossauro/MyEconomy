import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import AppTitleMain from '../appTitle/AppTitleMain';
import AppSubtitle from '../appSubtitle/AppSubtitle';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constant/Colors';
import { styles } from './AppHeaderHomeStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../ThemeContext';

interface AppHeaderHomeProps {
  nome: string;
  isDarkTheme: boolean;
  avatar: any;
  navigation?: any; 
  route?: string;
  showAvatar?: boolean;
  toggleTheme?: () => void;
}

export default function AppHeaderHome({ nome, avatar, route, navigation, showAvatar = true }: AppHeaderHomeProps) {
  const { isDarkTheme, toggleTheme } = useTheme();
  const changeRoute = () => {
    navigation.navigate(route);
  };


  return (
    <View style={styles.container}>
      <View>
        <AppTitleMain text={`Olá, ${nome} 👋`} isDarkTheme={isDarkTheme} />
        <AppSubtitle text={"É bom te ver por aqui!"} isDarkTheme={isDarkTheme} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {toggleTheme && (
          <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 40 }}>
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
    </View>
  );
};