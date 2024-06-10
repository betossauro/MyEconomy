import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import avatar from '../../../assets/avatar.png';
import { useTheme } from '../../ThemeContext';
import AppButton from "../../components/appButton/AppButton";
import AppHeader from "../../components/appHeader/AppHeader";
import AppLabel from "../../components/appLabel/AppLabel";
import AppTextForm from "../../components/appTextForm/AppTextForm";
import AppTextFormDate from "../../components/appTextForm/AppTextFormDate";
import Colors from "../../constant/Colors";
import { atualizarLimite, cadastrarLimite, getLimiteById } from "../../services/LimitService";
import { createDateFromMes, formatDate } from "../../utils/DateFormatter";
import { styles } from "./LimitStyle";

interface ExpenseProps {
  navigation?: any;
  route?: any;
}

export default function Limit({ navigation, route }: ExpenseProps) {
  const [id, setId] = useState(null);
  const [valor, setValor] = useState("");
  const [date, setDate] = useState<Date>();
  const [disabled, setDisabled] = useState(true);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    if(route && route.params != undefined){
      setId(route.params.id);
    }
  }, [route]);

  useEffect(() => {    
    const fetchLimit = async () => {
      await getLimiteById(id)
        .then((response) => {
          setValor(String(response.data[0].valor));
          const dt = createDateFromMes(response.data[0].mes);
          handleChangeDate(dt);
        })
      };

    if(id != null){
      fetchLimit();
    }
  }, [id]);

  useEffect(() => {
    if(valor != "" && date != null){
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [valor, date]);

  const handleChangeDate = (date: Date) => {
    setDate(date);
  };

  const handlePressRegistrar = async () => {
    const mes = formatDate(date);
    
    if(id != null){
      await atualizarLimite(id, Number(valor), mes)
        .then((response) => {
          setId(null);
          setValor("");
          setDate(new Date());
          Alert.alert('Sucesso', 'Limite atualizado!');
          handlePressConsultar
        })
        .catch((error) => {
          Alert.alert('Erro', error.message);
        });

    } else {
      await cadastrarLimite(Number(valor), mes)
        .then((response) => {
          setValor("");
          setDate(null);
          Alert.alert('Sucesso', 'Limite cadastrado');
          handlePressConsultar
        })
        .catch((error) => {
          Alert.alert('Erro', error.message);
        });
    }
  }

  const handlePressConsultar = () => {
    navigation.navigate('LimitHistory');
  } 

  return (
    <View style={[styles.container, isDarkTheme
      ? { backgroundColor: Colors.bgDark }
      : { backgroundColor: Colors.bgLight }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 60 }}>
        <AppHeader nome="Limite" isDarkTheme={isDarkTheme} avatar={avatar} navigation={navigation} />
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Valor" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextForm
          value={valor} onChangeText={setValor} placeholder="Digite o valor" keyboardType="decimal-pad" isDarkTheme={isDarkTheme}/>
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Mês" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextFormDate
          value={date} onChange={handleChangeDate} isDarkTheme={isDarkTheme} format={'monthYear'}/>
      </View>
      <View style={[styles.buttons, styles.margin]}>
        <AppButton text={id != null ? "Atualizar" : "Registrar"} isDarkTheme={isDarkTheme} onPress={handlePressRegistrar} disabled={disabled}></AppButton>
        <AppButton text="Consultar" isDarkTheme={isDarkTheme} onPress={handlePressConsultar}></AppButton>
      </View>
    </View>
  );
}
  