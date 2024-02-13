import {View, FlatList, TouchableOpacity} from 'react-native';

import {ButtonStyled, CentredView, Text} from '../../src/styles/global';
import {ImageTitle, ProfileView, ProfileMainView, ProfileInfoView, ButtonUpdate} from './style';
import {Info} from '../../src/components/profile/info';
import {profInfo} from '../../src/data/profInfo';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from "react-redux";
import {RootState} from "../../src/store";
import React from "react";
import {Button} from "../../src/components/Button";
import {router} from "expo-router";

const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user)
    return (
      <CentredView style={{gap: 10}}>
        <Button value="Регистрация" onPress={() => router.push('/registration')}/>
        <Button value="Войти" onPress={() => router.push('/login')}/>
      </CentredView>
    )

  return (
    <View>
      <ProfileView>
        <ImageTitle source={require('../../assets/ally.jpg')}/>
        <ProfileMainView>
          <Text $size='h2'>name</Text>
          <Text $size='h3'>Статус не установлен</Text>
          <Text $size='h5' $color='textSecondary'>онлайн</Text>
        </ProfileMainView>
        <TouchableOpacity>
          <Icon name="logout" size={30} color="#FFF"/>
        </TouchableOpacity>

      </ProfileView>
      <ProfileInfoView>
        <FlatList
          horizontal
          scrollEnabled={false}
          data={profInfo}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'space-around'}}
          renderItem={({item}) => <Info number={item.number} name={item.name}/>}
        />
      </ProfileInfoView>
      <ButtonUpdate>
        <Text>Редактировать профиль</Text>
      </ButtonUpdate>
    </View>
  );
}
export default ProfilePage;
