import React, { useState } from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {NoteSelectContainer, TextMain} from './style';

const NotePage = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const items = [
    { label: 'В планах', value: 'planned' },
    { label: 'Заброшенно', value: 'abandoned' },
    { label: 'Избранное', value: 'favorite' },
    { label: 'Смотрю', value: 'watching' },
  ];

  return (
    <View>
      <TextMain>Ваши заметки:</TextMain>
      <NoteSelectContainer >
        <RNPickerSelect
          onValueChange={(value) => setSelectedValue(value)}
          items={items}
          placeholder={{ label: 'Просмотренно', value: 'viewed' }}
        />
      </NoteSelectContainer>
    </View>
    
  );
};

export default NotePage;
