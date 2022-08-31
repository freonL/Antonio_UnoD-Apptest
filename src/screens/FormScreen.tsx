import * as React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface IProps {
  navigation: any;
}

const FormScreen: React.FC<IProps> = ({navigation}) => {
  const [lastName, lastNameChange] = React.useState(
    navigation.getParam('lastName'),
  );
  const [firstName, firstNameChange] = React.useState(
    navigation.getParam('firstName'),
  );
  const [age, onChangeNumber] = React.useState<number>(
    navigation.getParam('age') || 0,
  );

  const saveHandler = () => {
    const contact = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    navigation.goBack();
  };

  return (
    <SafeAreaView style={[tw`h-full`]}>
      <View style={[tw`mt-4 px-4 `]}>
        <Text>First Name</Text>
        <TextInput
          style={[tw`border m-3 p-2 rounded-md border-gray-500`]}
          onChangeText={firstNameChange}
          value={firstName}
        />
      </View>
      <View style={[tw`mt-2 px-4`]}>
        <Text>Last Name</Text>
        <TextInput
          style={[tw`border m-3 p-2 rounded-md border-gray-500`]}
          onChangeText={lastNameChange}
          value={lastName}
        />
      </View>
      <View style={[tw`mt-2 px-4`]}>
        <Text>Age</Text>
        <TextInput
          style={[tw`border m-3 p-2 rounded-md border-gray-500`]}
          onChangeText={text => {
            if (text.trim() === '') {
              onChangeNumber(0);
              return;
            }
            onChangeNumber(parseInt(text));
          }}
          value={age.toString()}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        onPress={saveHandler}
        style={[
          tw`flex flex-row items-center rounded-md py-2 justify-center mx-3 bg-blue-500 my-auto`,
        ]}>
        <Text style={[tw`ml-1 text-white text-lg`]}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FormScreen;
