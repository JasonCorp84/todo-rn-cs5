import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  AsyncStorage
} from 'react-native';
import TodoList from './TodoList'


export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      todos: []
    };
  }

  handleButtonPress = () => {
    this.setState(prevState => {
      let { text, todos } = prevState;
      return {
        text: '',
        todos: [...todos, { key: text + todos.length, text, completed: false }]
      };
    });
  };
componentDidMount() {
    const todoList = AsyncStorage.getItem('todos');

    todoList.then(todos => {
        if(todos) {
            console.log(todos)
            this.setState({todos : JSON.parse(todos)})
        } else {
            console.log('NADAAAA TODOOO NENEEE')
        }
    })
}
  componentWillUnmount() { 
      const todoList = this.state.todos.slice();
      if (todoList.length > 0) {
          AsyncStorage.setItem('todos', JSON.stringify(todoList), (error) => {
              if (error) console.log('there was an error setting item', error)
          })
      }
  }

  handleTextChange = text => {
    this.setState({ text });
  };

  handleCompletedToggle = todoKey => {
    const todos = this.state.todos.slice();
    todos.map(todo => {
      if (todo.key === todoKey) {
        return (todo.completed = !todo.completed);
      }
    });
    this.setState({ todos });
  };

  render() {
    return (
      <View style={container}>
        {this.state.todos.length === 0 ? (
          <Text style={textFont}>You're free</Text>
        ) : (
          <Text style={textFont}>You got stuff to do!</Text>
        )}
        <TextInput
          onChangeText={this.handleTextChange}
          value={this.state.text}
          placeholder="Add Todo"
        />
        <Button onPress={() => this.handleButtonPress()} title="Add Todo" />
        <TodoList todos={this.state.todos} handleCompletedToggle={this.handleCompletedToggle}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lineThrough: {
    textDecorationLine: 'line-through'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFont: {
    fontSize: 28
  }
});

const { container, textFont } = styles;