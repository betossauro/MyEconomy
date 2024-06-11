import React, { useEffect, useState } from "react";
import { Alert, View, useColorScheme } from "react-native";
import AppHeader from "../../components/appHeader/AppHeader";
import avatar from '../../../assets/avatar.png';
import Colors from "../../constant/Colors";
import { styles } from "./ExpenseStyle";
import AppLabel from "../../components/appLabel/AppLabel";
import AppTextForm from "../../components/appTextForm/AppTextForm";
import AppButton from "../../components/appButton/AppButton";
import { useTheme } from '../../ThemeContext';
import AppTextFormDate from "../../components/appTextForm/AppTextFormDate";
import { atualizarDespesa, getDespesaById, cadastrarDespesa } from "../../services/ExpenseService";
import { createDateFromMes, formatDate } from "../../utils/DateFormatter";

interface ExpenseProps {
  navigation?: any;
  route?: any;
}

export default function Expense({ navigation, route }: ExpenseProps) {
  const { isDarkTheme } = useTheme();
  const [id, setId] = useState(null);
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [date, setDate] = useState(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if(route && route.params != undefined){
      setId(route.params.id);
    }
  }, [route]);

  useEffect(() => {    
    const fetchExpense = async () => {
      await getDespesaById(id)
        .then((response) => {
          setNome(response.data.descricao);
          setValor(String(response.data.valor));
          const dt = createDateFromMes(response.data.mes);
          handleChangeDate(dt);
        })
      };

    if(id != null){
      fetchExpense();
    }
  }, [id]);

  useEffect(() => {
    if(nome != "" && valor != "" && date != ""){
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [nome, valor, date]);

  const handlePressRegistrar = async () => {
    const mes = formatDate(date);
    
    if(id != null){
      await atualizarDespesa(id, nome, Number(valor), mes)
        .then((response) => {
          setId(null);
          setNome("");
          setValor("");
          setDate(date);
          Alert.alert('Sucesso', 'Despesa atualizada!');
          handlePressHistorico
        })
        .catch((error) => {
          Alert.alert('Erro', 'Ocorreu algum erro ao atualizar a despesa');
        });

    } else {
      await cadastrarDespesa(nome, Number(valor), mes)
        .then((response) => {
          setNome("");
          setValor("");
          setDate(null);
          Alert.alert('Sucesso', 'Despesa cadastrada');
          handlePressHistorico
        })
        .catch((error) => {
          Alert.alert('Erro', error.message);
        });
    }
  }

  const handlePressHistorico = () => {
    navigation.navigate('ExpenseHistory');
  }

  const handleChangeDate = (date: Date) => {
    setDate(date);
  };

  return (
    <View style={[styles.container, isDarkTheme
      ? { backgroundColor: Colors.bgDark }
      : { backgroundColor: Colors.bgLight }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 }}>
        <AppHeader nome="Despesa" isDarkTheme={isDarkTheme} avatar={avatar} navigation={navigation}/>
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Nome" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextForm
          value={nome} onChangeText={setNome} placeholder="Digite sua despesa" maxLength={16} isDarkTheme={isDarkTheme}/>
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Valor" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextForm
          value={valor} onChangeText={setValor} placeholder="Digite o valor" keyboardType="decimal-pad" returnKeyType="done" isDarkTheme={isDarkTheme}/>
      </View>
      <View style={styles.labelContainer}>
        <AppLabel text="Mês" isDarkTheme={isDarkTheme}></AppLabel>
      </View>
      <View style={styles.buttons}>
        <AppTextFormDate
          value={date} onChange={handleChangeDate} isDarkTheme={isDarkTheme} format='monthYear'/>
      </View>
      <View style={[styles.buttons, styles.margin]}>
        <AppButton text={id != null ? "Atualizar" : "Registrar"} isDarkTheme={isDarkTheme} onPress={handlePressRegistrar} disabled={disabled}></AppButton>
        <AppButton text="Histórico" isDarkTheme={isDarkTheme} onPress={handlePressHistorico}></AppButton>
      </View>
    </View>
  );
}
  