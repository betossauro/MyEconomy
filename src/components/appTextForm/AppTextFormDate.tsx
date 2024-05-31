import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { styles } from './AppTextFormStyle';

interface AppTextFormProps {
  isDarkTheme: boolean;
  value: Date;
  onChange: (date: Date) => void;
  format?: 'monthYear' | 'fullDate';
}

export default function AppTextFormDate({
  value,
  isDarkTheme,
  onChange,
  format = 'fullDate',
}: AppTextFormProps) {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(value);
  const [dateSelected, setDateSelected] = useState(false);

  const onValueChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setDateSelected(true);
    onChange(currentDate);
  };

  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
   "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  let dateString;
  if (dateSelected) {
    if (format === 'monthYear') {
      dateString = `${monthNames[date.getMonth()]}/${date.getFullYear()}`;
    } else {
      dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
  } else {
    dateString = 'Selecione uma data';
  }

  const textColor = dateSelected ? (isDarkTheme ? 'white' : 'black') : 'gray';

  return (
    <View style={[styles.input, isDarkTheme ? styles.darkInput : styles.lightInput]}>
      <TouchableOpacity onPress={() => setShow(true)}>
        <Text style={[styles.inputWOBorder, isDarkTheme ? styles.darkInput : styles.lightInput, { color: textColor }]}>{dateString}</Text>
      </TouchableOpacity>
      {show && (
        <RNDateTimePicker
          mode="date"
          value={date}
          onChange={onValueChange}
        />
      )}
    </View>
  );
}