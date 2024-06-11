import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import avatar from '../../../assets/avatar.png';
import { useTheme } from '../../ThemeContext';
import AppHeader from "../../components/appHeader/AppHeader";
import AppLabel from "../../components/appLabel/AppLabel";
import AppTextFormDate from "../../components/appTextForm/AppTextFormDate";
import Colors from "../../constant/Colors";
import { excluirLimite, getAllLimite, getLimiteByMes } from "../../services/LimitService";
import { formatDate } from "../../utils/DateFormatter";
import { styles } from "./LimitStyle";

export default function LimitHistory({ navigation }) {
  const [date, setDate] = useState(null);
  const { isDarkTheme } = useTheme();
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    if(date != null) {
      const data = formatDate(date);
      await getLimiteByMes(data)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          Alert.alert('Aviso', 'Ocorreu um erro ao buscar os limites');
        });
    } else {
      await getAllLimite()
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          Alert.alert('Aviso', 'Ocorreu um erro ao buscar os limites');
        });
      }
  };

  useEffect(() => {
    fetchData();
  }, [date]);

  function handleEdit(item) {
    navigation.navigate('Limite', {id: item.id})
  }
  
  const handleRemove = async (item) => {
    await excluirLimite(item.id)
    .then((response) => {
      fetchData();
    })
    .catch((error) => {
      Alert.alert('Aviso', 'Ocorreu um erro ao excluir o limite selecionado');
    });
  }

  return (
    <View style={[styles.container, isDarkTheme
      ? { backgroundColor: Colors.bgDark }
      : { backgroundColor: Colors.bgLight }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 60 }}>
        <AppHeader nome="Consulta" isDarkTheme={isDarkTheme} avatar={avatar} navigation={navigation} />
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Mês" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextFormDate
          value={date} onChange={setDate} isDarkTheme={isDarkTheme} format={'monthYear'}/>
        <ScrollView style={styles.itemContainer}>
          {items.map((item, index) => (
            <View key={index} style={[styles.item, { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: isDarkTheme ? Colors.mainDark : Colors.mainLight, alignItems: 'center' }]}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20 }}>
                <Text style={[styles.itemText, { color: isDarkTheme ? Colors.fontLight : Colors.fontDark }]}>{item.mes}</Text>
                <Text style={[styles.itemText, { color: isDarkTheme ? Colors.fontLight : Colors.fontDark }]}>{`R$${item.valor}`}</Text>
              </View>
              <View style={styles.iconButtons}>
                <TouchableOpacity style={[styles.iconButton, { backgroundColor: isDarkTheme ? Colors.inactiveDark : Colors.inactiveLight }]} onPress={() => handleEdit(item)}>
                  <Icon name="pencil" size={20} color={isDarkTheme ? Colors.fontLight : Colors.fontDark} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconButton, { backgroundColor: isDarkTheme ? Colors.inactiveDark : Colors.inactiveLight }]} onPress={() => handleRemove(item)}>
                  <Icon name="trash" size={20} color={isDarkTheme ? Colors.fontLight : Colors.fontDark} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        {items.length === 0 && (
          <View >
            <Text style={{ color: isDarkTheme ? Colors.fontDark : Colors.fontLight  }}>Nenhum dado encontrado.</Text>
          </View>
        )}
      </View>
    </View>
  );
}