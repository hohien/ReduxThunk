
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import UserFlatList from './components/UserFlatList';
export default class UsersScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UserFlatList /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
