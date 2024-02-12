import { View, FlatList  } from 'react-native';

import { Text } from '../../src/styles/global';
import { ImageTitle, ProfileView, ProfileMainView, ProfileInfoView, ButtonUpdate } from './style';
import { Info } from '../../src/components/profile/info/index';
import { profInfo } from '../../src/data/profInfo';

const ProfilePage = () => (
<View>
  <ProfileView>
    <ImageTitle source={require('../../assets/ally.jpg')} />
    <ProfileMainView>
      <Text $size='h2'>name</Text>
      <Text $size='h3'>Статус не установлен</Text>
      <Text $size='h5' $color='textSecondary'>онлайн</Text>
    </ProfileMainView>
  </ProfileView>
  <ProfileInfoView>
    <FlatList
      horizontal
      scrollEnabled={false}
      data={profInfo}
      contentContainerStyle={{flexGrow: 1, justifyContent: 'space-around'}}
      renderItem={({item}) => <Info number={item.number} name={item.name} />}
    />
  </ProfileInfoView>
  <ButtonUpdate>
    <Text>Редактировать профиль</Text> 
  </ButtonUpdate>
</View>
  
);

export default ProfilePage;
