import * as React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ContactItem from '../components/ContactItem';
import tw from 'tailwind-react-native-classnames';
import {IContact} from '../stores/types';
import NavBar from '../components/FloatButton';
import FloatButton from '../components/FloatButton';

interface IProps {
  navigation: any;
}

const ListScreen: React.FC<IProps> = ({navigation}) => {
  const [dataLs, setDataLs] = React.useState<IContact[]>([
    {
      id: '93ad6070-c92b-11e8-b02f-cbfa15db428b',
      firstName: 'Bilbo',
      lastName: 'Baggins',
      age: 111,
      photo:
        'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
    },
    {
      id: 'b3abd640-c92b-11e8-b02f-cbfa15db428b',
      firstName: 'Luke',
      lastName: 'Skywalker',
      age: 20,
      photo: 'N/A',
    },
    {
      id: '93ad6070-c92b-11e8-b02f-cbfa15db428b',
      firstName: 'Bilbo',
      lastName: 'Baggins',
      age: 111,
      photo:
        'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
    },
    {
      id: 'b3abd640-c92b-11e8-b02f-cbfa15db428b',
      firstName: 'Luke',
      lastName: 'Skywalker',
      age: 20,
      photo: 'N/A',
    },
    {
      id: '93ad6070-c92b-11e8-b02f-cbfa15db428b',
      firstName: 'Bilbo',
      lastName: 'Baggins',
      age: 111,
      photo:
        'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
    },
    {
      id: 'b3abd640-c92b-11e8-b02f-cbfa15db428b',
      firstName: 'Luke',
      lastName: 'Skywalker',
      age: 20,
      photo: 'N/A',
    },
    {
      id: '93ad6070-c92b-11e8-b02f-cbfa15db428b',
      firstName: 'Bilbo',
      lastName: 'Baggins',
      age: 111,
      photo:
        'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
    },
    {
      id: 'b3abd640-c92b-11e8-b02f-cbfa15db428b',
      firstName: 'Luke',
      lastName: 'Skywalker',
      age: 20,
      photo: 'N/A',
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        style={[tw`flex flex-col w-full px-2`]}
        data={dataLs}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate('Detail', item);
            }}>
            <ContactItem data={item} />
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={[tw`flex flex-col w-full px-2`]}
        onPress={() => {
          navigation.navigate('Form');
        }}>
        <FloatButton />
      </TouchableOpacity>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
  },
});
