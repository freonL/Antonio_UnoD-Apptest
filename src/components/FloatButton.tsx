import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import tw from 'tailwind-react-native-classnames';
import iconPlus from '../assets/plus-96.png';

const FloatButton: React.FC = () => {
  return (
    <View
      style={[
        tw`absolute rounded-full w-20 h-20 right-5 bottom-10 p-4 bg-blue-500 border border-gray-50`,
        style.shadow,
        ,
      ]}>
      <Image source={iconPlus} style={style.tintWhite} />
    </View>
  );
};

export default FloatButton;

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  tintWhite: {
    height: 45,
    width: 45,
    tintColor: '#FFFFFF',
  },
});
