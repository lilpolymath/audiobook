import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

export class margin extends Component {
  static navigationOptions = {
    header: null,
  };

  renderHeader = () => {
    return (
      <View style={styles.viewOne}>
        <Text style={styles.header}>About Me</Text>
        <View style={styles.headerCard}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.headerCardPicture}
              source={require('../assets/adult-beard.jpg')}
            />
            <View style={{width: 200, justifyContent: 'space-evenly'}}>
              <Text style={styles.name}>Adedapo Ayobami</Text>
              <Text style={styles.title}>
                I am not sure of what I can do anymore.
              </Text>
            </View>
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.about}>
              Some random text filled with self appraisal goes here. Some random
              text filled with self appraisal goes here.
            </Text>
          </View>
        </View>
      </View>
    );
  };

  renderRequests = () => {
    return (
      <View style={styles.viewTwo}>
        <View style={styles.second}>
          <Text style={{textAlign: 'center'}}>
            Some Woke content goes here.
          </Text>
        </View>
        <ScrollView>
          <View style={styles.card}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              enim cursus mi venenatis facilisis. Interdum et malesuada fames ac
              ante ipsum primis in faucibus.
            </Text>
          </View>
          <View style={styles.card}>
            <Text>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Quisque consequat interdum ligula, sit
              amet sollicitudin magna.
            </Text>
          </View>
          <View style={styles.card}>
            <Text>
              Aliquam pulvinar neque quam, vitae rhoncus velit egestas sed. Sed
              hendrerit, enim lacinia accumsan tincidunt, metus augue fermentum
              nibh, vel tempor lectus lectus vitae libero.
            </Text>
          </View>
          <View style={styles.card}>
            <Text>
              Duis laoreet maximus hendrerit. Aliquam ullamcorper et est sed
              dictum. Proin eu nisi id felis malesuada interdum. In id ante
              condimentum, rutrum nisl at, tempor diam.
            </Text>
          </View>
          <View style={styles.card}>
            <Text>
              Duis laoreet maximus hendrerit. Aliquam ullamcorper et est sed
              dictum. Proin eu nisi id felis malesuada interdum. In id ante
              condimentum, rutrum nisl at, tempor diam.
            </Text>
            <Text style={{justifyContent: 'flex-end'}}>Testing out</Text>
          </View>
        </ScrollView>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderRequests()}
      </View>
    );
  }
}

export default margin;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'whitesmoke',
  },
  viewOne: {
    height: height * 0.28,
    backgroundColor: 'purple',
    alignItems: 'center',
    width: width,
  },
  viewTwo: {
    paddingTop: 55,
    paddingHorizontal: 25,
    alignItems: 'center',
    zIndex: -1,
    display: 'flex',
    flex: 1,
  },
  headerCard: {
    backgroundColor: 'white',
    height: height * 0.25,
    zIndex: 3,
    width: width * 0.8,
    borderRadius: 30,
    flexDirection: 'column',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 10,
  },
  header: {
    paddingVertical: 15,
    fontSize: 20,
    color: 'white',
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
  },
  headerCardPicture: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 15,
  },
  card: {
    height: 100,
    // flexDirection: 'column',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    // marginHorizontal: 15,
  },
  title: {
    fontSize: 12,
  },
  second: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems:
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
