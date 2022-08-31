import * as React from 'react';
import tw from 'twrnc';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {IContact, removeContact} from '../contactSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';

interface IProps {
  navigation: any;
}

const DetailScreen: React.FC<IProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const contactLs = useSelector(
    (state: RootState) => state.contactList.contacts,
  );

  const data = contactLs.find(
    (item: IContact) => item.id === navigation.getParam('id'),
  );

  const editHandler = () => {
    navigation.push('Form', {
      id: navigation.getParam('id'),
      firstName: data?.firstName,
      lastName: data?.lastName,
      age: data?.age,
      photo: data?.photo,
    });
  };

  const deleteHandler = () => {
    return Alert.alert(
      'Are your sure?',
      'Are you sure you want to remove this contact?',
      [
        {
          text: 'Yes',
          onPress: () => {
            dispatch(removeContact({id: navigation.getParam('id')}));

            navigation.goBack();
          },
        },

        {
          text: 'No',
        },
      ],
    );
  };

  return (
    <View style={[tw`flex flex-col h-full`]}>
      <View style={[tw`w-full h-2/6 bg-blue-500 `]}>
        {navigation.getParam('photo') !== 'N/A' ? (
          <Image
            style={[tw`h-full w-full`]}
            source={{
              uri: data?.photo.replace('http://', 'https://'),
            }}
          />
        ) : (
          <Text style={[tw`text-white mx-auto my-auto text-6xl`]}>
            {data?.firstName[0]}
            {data?.lastName[0]}
          </Text>
        )}
      </View>

      <View
        style={[
          tw`bg-white rounded-md mx-4 px-3 py-2 shadow-black shadow-offset-1 shadow-opacity-10 shadow-radius-1 -top-4`,
        ]}>
        <View style={[tw`border-b pb-1 border-gray-200`]}>
          <Text style={[tw`text-base font-medium `]}>
            {data?.firstName} {data?.lastName}
          </Text>
        </View>
        <View style={[tw`mt-2`]}>
          <Text>Age: {data?.age}</Text>
        </View>
      </View>
      <View
        style={[
          tw`bg-white rounded-md mx-4 px-3 py-2 shadow-black shadow-offset-1 shadow-opacity-10 shadow-radius-1 mt-2`,
        ]}>
        <View style={[tw`border-b pb-1 border-gray-200`]}>
          <Text style={[tw`text-base font-medium `]}>Other Content</Text>
        </View>
        <View style={[tw`mt-2`]}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            necessitatibus autem modi dolore nostrum enim ullam, numquam optio
            est at amet, molestiae mollitia dicta illo asperiores quidem
            deleniti velit eum.
          </Text>
        </View>
      </View>
      <View style={[tw`absolute inset-x-0 bottom-0 pb-10 `]}>
        <TouchableOpacity
          onPress={editHandler}
          style={[
            tw`flex flex-row items-center border-2 rounded-md py-2 justify-center mx-3 border-blue-400 `,
          ]}>
          <Image
            source={require('../assets/edit.png')}
            style={style.iconBlue}
          />
          <Text style={[tw`ml-1 text-blue-500 text-lg`]}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={deleteHandler}
          style={[
            tw`flex flex-row items-center border-2 rounded-md py-2 justify-center mx-3 border-red-400 mt-2`,
          ]}>
          <Image
            source={require('../assets/trash-96.png')}
            style={style.iconRed}
          />
          <Text style={[tw`ml-1 text-red-500 text-lg`]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;

const style = StyleSheet.create({
  iconBlue: {
    width: 24,
    height: 24,
    tintColor: '#3b82f6',
  },

  iconRed: {
    width: 24,
    height: 24,
    tintColor: '#ef4444',
  },
});
