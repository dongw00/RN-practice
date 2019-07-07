import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';

class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* 상단 바 */}
        <AddTodo />

        {/* 내용 */}
        <View>
          <VisibleTodos />
        </View>
      </View>
    );
  }
}

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
