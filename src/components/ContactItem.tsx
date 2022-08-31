import * as React from 'react';
import {Image, Text, View} from 'react-native';
import tw from 'twrnc';
import {IContact} from '../stores/types';

interface IProps {
  data: IContact;
}

const ContactItem: React.FC<IProps> = ({data}) => {
  return (
    <View
      style={[
        tw`flex flex-row w-full  p-4 rounded-md mb-2 last:mb-0 bg-white  shadow-black shadow-offset-1 shadow-opacity-10 shadow-radius-1`,
      ]}>
      {data?.photo === 'N/A' || data?.photo === '' ? (
        <View style={[tw`rounded-full w-20 h-20 border`]} />
      ) : (
        <Image
          style={[tw`rounded-full w-20 h-20`]}
          source={{
            uri: data?.photo?.replace('http://', 'https://'),
          }}
        />
      )}

      <View style={[tw`flex flex-col ml-2`]}>
        <Text>
          {data.firstName} {data.lastName}
        </Text>
        <Text style={[tw`mt-2`]}>Age: {data.age}</Text>
      </View>
    </View>
  );
};

export default ContactItem;
