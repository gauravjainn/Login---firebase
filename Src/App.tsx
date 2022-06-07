import './Config';
import React, {useEffect, useState, useCallback, useRef} from 'react';
import {View, Text, TextInput} from 'react-native';
import ApplicationStyles from './Themes/ApplicationStyles';
import RootContainer from './Navigation/RootContainer';

function App() {
  useEffect(() => {}, []);

  return (
    <View style={ApplicationStyles.applicationView}>
      <RootContainer />
    </View>
  );
}
export default App;
