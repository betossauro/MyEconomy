import React, { useEffect, useState } from "react";
import { Alert, Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import avatar from '../../../assets/avatar.png';
import { useTheme } from '../../ThemeContext';
import AppHeader from "../../components/appHeader/AppHeader";
import AppLabel from "../../components/appLabel/AppLabel";
import AppTextFormDate from "../../components/appTextForm/AppTextFormDate";
import Colors from "../../constant/Colors";
import { excluirDespesa, getDespesasByMes } from "../../services/ExpenseService";
import { formatDate } from "../../utils/DateFormatter";
import { styles } from "./ExpenseStyle";

export default function ExpenseHistory({ navigation }) {
  const { isDarkTheme } = useTheme();
  const [date, setDate] = useState(new Date());
  const [items, setItems] = useState([]);

  const screenHeight = Dimensions.get('window').height;
  const maxHeight = screenHeight * 0.67;

  const fetchData = async () => {
    const data = formatDate(date);
    await getDespesasByMes(data)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        Alert.alert('Aviso', 'Ocorreu um erro ao buscar as despesas do mês');
      });
  };

  useEffect(() => {
    fetchData();
  }, [date]);

  function handleEdit(item) {
    navigation.navigate('Despesas', {id: item.id})
  }

  const handleRemove = async (item) => {
    await excluirDespesa(item.id)
    .then((response) => {
      fetchData();
    })
    .catch((error) => {
      Alert.alert('Aviso', 'Ocorreu um erro ao excluir a despesa selecionada');
    });
  }

  return (
    <View style={[styles.container, isDarkTheme
      ? { backgroundColor: Colors.bgDark }
      : { backgroundColor: Colors.bgLight }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 }}>
        <AppHeader nome="Histórico" isDarkTheme={isDarkTheme} avatar={avatar} navigation={navigation} />
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Mês" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextFormDate
          value={date} onChange={setDate} isDarkTheme={isDarkTheme} format='monthYear'/>
        <ScrollView style={[styles.itemContainer, { maxHeight: maxHeight }]}>
          {items.map((item, index) => (
            <View key={index} style={[styles.item, { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: isDarkTheme ? Colors.mainDark : Colors.mainLight, alignItems: 'center' }]}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20 }}>
                <Text style={[styles.itemText, { color: isDarkTheme ? Colors.fontLight : Colors.fontDark }]}>{item.descricao}</Text>
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
