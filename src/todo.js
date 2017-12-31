import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { actionCreators } from './actions/ActionTodo';

import Title from '../src/components/title';
import Footer from '../src/components/footer';
import Input from '../src/components/input';
import List from '../src/components/list';

const mapStateToProps = (state) => ({
  items: state.items,
})

class Todo extends React.Component {
  
  addItem = (item) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.addItem(item));
  }

  removeItem = (index) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.removeItem(index));
  }

  toggleItemCompleted = (index) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.toggleItemCompleted(index));
  }

  removeCompleted = () => {
    const {dispatch} = this.props;
    dispatch(actionCreators.removeCompleted());
  }

  render() {

    const {items} = this.props;

    return (
      <View style={styles.container}>
        <Title> Todo List </Title>
        <Input
          placeholder={'Enter an task to do!'}
          onSubmit={this.addItem}
        />
        <View style={styles.divider}/>
        <List
          items={items}
          onRemoveItem={this.removeItem}
          onToggleItemCompleted={this.toggleItemCompleted}
        />
        <View style={styles.divider} />
        <Footer onRemoveCompleted={this.removeCompleted} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'darkgray',
  },
});

export default connect(mapStateToProps)(Todo)