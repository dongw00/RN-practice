import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';

import Count from './src/components/Count';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <Text>React Native & Redux Example</Text>
        <Count />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
