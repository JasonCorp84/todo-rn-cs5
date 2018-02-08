import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

export default TodoList = (props) => {
    return(
    <FlatList
    data={props.todos}
    renderItem={({ item, key }) => {
      return (
        <View key={item.key}>
          <Text
            onPress={() => props.handleCompletedToggle(item.key)}
            style={item.completed ? styles.lineThrough : null}
          >
            {item.text}
          </Text>
        </View>
      );
    }}
  />
)
}

const styles = StyleSheet.create({
    lineThrough: {
      textDecorationLine: 'line-through'
    },
  });
  