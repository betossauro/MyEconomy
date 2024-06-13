import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useState } from "react";
import { Alert, RefreshControl, ScrollView, View } from "react-native";
import avatar from '../../../assets/avatar.png';
import { useTheme } from '../../ThemeContext';
import AppCard from "../../components/appCard/AppCard";
import AppHeaderHome from "../../components/appHeaderHome/AppHeaderHome";
import AppProgressBar from "../../components/appProgressBar/AppProgressBar";
import AppTextFormDate from "../../components/appTextForm/AppTextFormDate";
import Colors from "../../constant/Colors";
import { progressoMes } from "../../services/LimitService";
import { formatDate } from "../../utils/DateFormatter";
import { styles } from "./HomeStyle";

export default function Home({ navigation }) {
  const { isDarkTheme } = useTheme();
  const [nome, setNome] = useState("");
  const [date, setDate] = useState(new Date());
  const [limite, setLimite] = useState(0);
  const [despesa, setDespesa] = useState(0);
  const [progresso, setProgresso] = useState(0);    
  const [refreshing, setRefreshing] = useState(false);
  const [hasLimite, setHasLimite] = useState(true);

  const onRefresh = () => {
    setRefreshing(true);
    fetchProgresso(date)
      .then(() => setRefreshing(false));
  };

  const fetchProgresso = async (data: Date) => {
    const mes = formatDate(data)
    await progressoMes(mes)
      .then((response) => {
        if (response.data != null) {
          setHasLimite(true);
          setDespesa(response.data.gasto);
          setLimite(response.data.limite);
          setProgresso(response.data.progresso);
        } else {
          // Alert.alert('Aviso', 'Não foram encontrados dados para o mês selecionado');
          setHasLimite(false);
          setDespesa(0);
          setLimite(0);
          setProgresso(0);
        }
      })
      .catch((error) => {
        Alert.alert('Erro', 'Erro ao buscar progresso');
      });
  }

  useEffect(() => {
    AsyncStorage.getItem('nome')
      .then(nome => setNome(nome));
    fetchProgresso(date);
  }, []);

  const handleChangeDate = (data: Date) => {
    setDate(data)
    fetchProgresso(data)
  }

  return (
    <View style={[styles.container, isDarkTheme
      ? { backgroundColor: Colors.bgDark }
      : { backgroundColor: Colors.bgLight }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 60 }}>
        <AppHeaderHome nome={nome} isDarkTheme={isDarkTheme} avatar={avatar} navigation={navigation} />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{paddingHorizontal: 16}}>
          <View style={styles.buttons}>
            <AppTextFormDate value={date} onChange={handleChangeDate} isDarkTheme={isDarkTheme} format='monthYear' />
          </View>
          <View style={{paddingHorizontal: 16}}>
            <AppCard progressLevel={progresso} />
            <AppProgressBar despesa={despesa} limite={limite} hasLimite={hasLimite} progressLevel={progresso / 100}></AppProgressBar>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
