import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

export class Home extends Component {
  static navigationOptions = {
    header: null,
    drawerLabel: 'Home',
    drawerIcon: () => <Icon name="home" size={22} color="black" />,
  };

  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.mainText}>My Library</Text>
          </View>
          <View style={styles.secondMain}>
            <View style={styles.second}>
              <Text style={styles.secondText}>Purchases</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>See shop</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.subTitle}>9 Total</Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              style={styles.scrolls}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Details')}
                activeOpacity={0.6}
                style={styles.pictures}>
                <Image
                  style={styles.pictures}
                  source={require('../assets/closeup-man.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('About')}
                activeOpacity={0.6}
                style={styles.pictures}>
                <Image
                  style={styles.pictures}
                  source={require('../assets/alone.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} style={styles.pictures}>
                <Image
                  style={styles.pictures}
                  source={require('../assets/afterglow.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} style={styles.pictures}>
                <Image
                  style={styles.pictures}
                  source={require('../assets/man-in-red.jpg')}
                />
              </TouchableOpacity>
            </ScrollView>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              style={styles.scrolls}>
              <TouchableOpacity activeOpacity={0.6} style={styles.pictures}>
                <Image
                  style={styles.pictures}
                  source={require('../assets/woman-collared.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} style={styles.pictures}>
                <Image
                  style={styles.pictures}
                  source={require('../assets/woman-eyeglasses.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} style={styles.pictures}>
                <Image
                  style={styles.pictures}
                  source={require('../assets/woman-sleeveless.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} style={styles.pictures}>
                <Image
                  style={styles.pictures}
                  source={require('../assets/woman-sleeved.jpg')}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View style={styles.audioBooks}>
          <View style={styles.second}>
            <Text style={styles.thirdText}>Audiobooks</Text>
            <TouchableOpacity style={styles.secondButton}>
              <Text style={styles.buttonText}>New</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.thirdSubTitle}>6 Total</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.scrolls}>
            <TouchableOpacity activeOpacity={0.6} style={styles.pictures}>
              <Image
                style={styles.pictures}
                source={require('../assets/green-leave.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.pictures}>
              <Image
                style={styles.pictures}
                source={require('../assets/on-a-bridge.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.pictures}>
              <Image
                style={styles.pictures}
                source={require('../assets/woman-happy.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.pictures}>
              <Image
                style={styles.pictures}
                source={require('../assets/smiling-woman.jpg')}
              />
            </TouchableOpacity>
          </ScrollView>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.scrolls}>
            <TouchableOpacity activeOpacity={0.6} style={styles.pictures}>
              <Image
                style={styles.pictures}
                source={require('../assets/man-in-red.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.pictures}>
              <Image
                style={styles.pictures}
                source={require('../assets/adult-beard.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.pictures}>
              <Image
                style={styles.pictures}
                source={require('../assets/woman-sleeved.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.pictures}>
              <Image
                style={styles.pictures}
                source={require('../assets/smiling-woman.jpg')}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

export default Home;
