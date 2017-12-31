import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Title extends Component {

  render() {
    const {children} = this.props;

    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'blue',
      padding: 15,
      marginTop: 24,
    },
    title: {
      textAlign: 'center',
      color: 'aqua',
    },
})
  