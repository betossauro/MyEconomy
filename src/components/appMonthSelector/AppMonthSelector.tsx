import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, useColorScheme } from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import moment from 'moment';
import Colors from '../../constant/Colors';
import { styles } from './AppMonthSelectorStyle';
import Icon from 'react-native-vector-icons/Ionicons';

interface AppMonthSelectorProps {
  initialDate?: Date;
  minimumDate?: Date;
  maximumDate?: Date;
  locale?: string;
  color?: string;
  size?: string;
}

export default function AppMonthSelector({
  initialDate = new Date(),
  minimumDate = new Date(),
  maximumDate = new Date(2025, 5),
  locale = 'br',
}: AppMonthSelectorProps) {
  const [date, setDate] = useState(initialDate);
  const [show, setShow] = useState(false);

  const showPicker = useCallback((value: boolean) => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;
      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker],
  );

  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <View style={styles.parentContainer}>
      <View style={[styles.container, isDarkTheme
        ? { backgroundColor: Colors.bgDark }
        : { backgroundColor: Colors.bgLight }]}>
        <View style={styles.input}>
        <TouchableOpacity 
          onPress={() => showPicker(true)}
          style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}
        >
          <Text style={[styles.text, { color: isDarkTheme ? Colors.fontDark : Colors.fontLight }]}>Selecione o mês</Text>
          <Icon name="caret-down" color={isDarkTheme ? Colors.fontDark : Colors.fontLight} size={24} />
        </TouchableOpacity>
          {show && (
            <MonthPicker
              onChange={onValueChange}
              value={date}
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              locale={locale}
            />
          )}
        </View>
      </View>
    </View>
  );
}
