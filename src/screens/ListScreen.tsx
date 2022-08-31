import * as React from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import ContactItem from '../components/ContactItem';
import tw from 'tailwind-react-native-classnames';
import {IContact} from '../stores/types';

import FloatButton from '../components/FloatButton';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {fetchContact} from '../contactSlice';

interface IProps {
  navigation: any;
}

const ListScreen: React.FC<IProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const contactLs = useSelector(
    (state: RootState) => state.contactList.contacts,
  );

  React.useEffect(() => {
    dispatch(fetchContact());
  });

  return (
    <View style={styles.container}>
      <FlatList
        style={[tw`flex flex-col w-full px-2`]}
        data={contactLs}
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
