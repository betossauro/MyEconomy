import React, { useState, useEffect, useContext } from "react";
import { ScrollView, TouchableOpacity, View, useColorScheme, Text } from "react-native";
import AppHeader from "../../components/appHeader/AppHeader";
import avatar from '../../../assets/avatar.png';
import Colors from "../../constant/Colors";
import { styles } from "./ExpenseStyle";
import AppLabel from "../../components/appLabel/AppLabel";
import AppButton from "../../components/appButton/AppButton";
import { useTheme } from '../../ThemeContext';
import AppTextFormDate from "../../components/appTextForm/AppTextFormDate";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ExpenseHistory({ navigation }) {
  const { isDarkTheme } = useTheme();
  const [date, setDate] = useState(new Date());
   // const [items, setItems] = useState([]);
   const [items] = useState([
    { name: 'Ifood', amount: 20.00 },
    { name: 'Uber', amount: 12 }
  ]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://api.example.com/monthly-data');
  //     const data = await response.json();
  //     setItems(data);
  //   };

  //   fetchData();
  // }, []);

  function handleEdit(item) {
    // code to handle edit
  }
  
  function handleRemove(item) {
    // code to handle remove
  }

  return (
    <View style={[styles.container, isDarkTheme
      ? { backgroundColor: Colors.bgDark }
      : { backgroundColor: Colors.bgLight }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 }}>
        <AppHeader nome="Histórico" isDarkTheme={isDarkTheme} avatar={avatar} navigation={navigation}/>
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Mês" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextFormDate
          value={date} onChange={setDate} isDarkTheme={isDarkTheme}/>
          <ScrollView style={styles.itemContainer}>
          {items.map((item, index) => (
            <View key={index} style={[styles.item, {backgroundColor: isDarkTheme ? Colors.mainDark : Colors.mainLight, justifyContent: 'space-between', alignItems: 'center', }]}>
              <Text style={[styles.itemText, { color: isDarkTheme ? Colors.fontLight : Colors.fontDark }]}>{item.name}</Text>
              <Text style={[styles.itemText, { color: isDarkTheme ? Colors.fontLight : Colors.fontDark }]}>{`R$${item.amount}`}</Text>
              <View style={styles.iconButtons}>
                <TouchableOpacity style={[styles.iconButton, {backgroundColor: isDarkTheme ? Colors.inactiveDark : Colors.inactiveLight}]} onPress={() => handleEdit(item)}>
                  <Icon name="pencil" size={20} color={isDarkTheme ? Colors.fontLight : Colors.fontDark} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconButton, {backgroundColor: isDarkTheme ? Colors.inactiveDark : Colors.inactiveLight}]} onPress={() => handleRemove(item)}>
                  <Icon name="trash" size={20} color={isDarkTheme ? Colors.fontLight : Colors.fontDark} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
  