import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class AddButton extends Component {
  buttonSize = new Animated.Value(1);
  mode = new Animated.Value(0);

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.buttonSize, {
        toValue: 0.7,
        duration: 200,
      }),
      Animated.timing(this.buttonSize, {
        toValue: 1,
      }),
      Animated.timing(this.mode, {
        toValue: this.mode._value === 0 ? 1 : 0,
      }),
    ]).start();
  };

  render() {
    const sizeStyle = {
      transform: [{scale: this.buttonSize}],
    };

    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'],
    });

    const thermometerX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -100],
    });

    const thermometerY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100],
    });

    const atomX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -24],
    });

    const atomY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -150],
    });

    const hanukiahX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, 50],
    });

    const hanukiahY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100],
    });

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            left: thermometerX,
            top: thermometerY,
            position: 'absolute',
          }}>
          <View style={styles.secondButton}>
            <Icon name="thermometer" size={22} color="#FFF" />
          </View>
        </Animated.View>
        <Animated.View
          style={{
            left: atomX,
            top: atomY,
            position: 'absolute',
          }}>
          <View style={styles.secondButton}>
            <Icon name="atom" size={22} color="#FFF" />
          </View>
        </Animated.View>
        <Animated.View
          style={{
            left: hanukiahX,
            top: hanukiahY,
            position: 'absolute',
          }}>
          <View style={styles.secondButton}>
            <Icon name="hanukiah" size={22} color="#FFF" />
          </View>
        </Animated.View>
        <Animated.View style={[styles.button, sizeStyle]}>
          <TouchableHighlight
            onPress={this.handlePress}
            underlayColor="#7F58FF">
            <Animated.View style={{transform: [{rotate: rotation}]}}>
              <Icon name="plus" size={22} color="#FFF" />
            </Animated.View>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    backgroundColor: '#7F58FF',
    height: 64,
    width: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -60,
    shadowColor: '#7F58FF',
    shadowOffset: {height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  secondButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#7F58FF',
  },
});
