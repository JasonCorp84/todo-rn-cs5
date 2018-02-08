import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Todo from './Todo'


class Home extends React.Component {

  render()
  {
    const { navigate } = this.props.navigation;
    return (
      <View style={container}>
            <Button
        title="Todo"
        onPress={() =>
          navigate('Todo')
        }
      />
        <Text> TODO </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

const Routes = StackNavigator({
  Home: {screen: Home, navigationOptions: ({navigation}) => ({ header: false }) },
  Todo: { screen: Todo},
},
);
export default Routes;

const { container } = styles;