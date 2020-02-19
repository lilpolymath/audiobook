import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Icon2 from 'react-native-vector-icons/Ionicons';

export class BookInfo extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            resizeMode={'cover'}
            style={styles.imageContainer}
            source={require('../assets/closeup-man.jpg')}
          />
          <TouchableOpacity style={styles.cancel}>
            <Icon2 name="md-more" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Main')}
            style={styles.back}>
            <Icon2 name="md-arrow-back" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.contentContainer}>
          <View style={styles.tags}>
            <View
              style={[styles.tagButton, {backgroundColor: 'rgb(255,95,88)'}]}>
              <Text style={[styles.buttonText]}>Love</Text>
            </View>
            <View style={styles.tagButton}>
              <Text style={styles.buttonText}>Humor</Text>
            </View>
          </View>
          <Text
            style={[
              styles.mainText,
              {fontSize: 22, marginBottom: 10, fontWeight: 'bold'},
            ]}>
            Keep Smiling after a Photoshop's crash.
          </Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Text>
          <View style={[styles.second, {marginBottom: 15}]}>
            <View style={styles.credits}>
              <View>
                <Image
                  style={styles.creditImage}
                  source={require('../assets/adult-beard.jpg')}
                />
              </View>
              <View>
                <Text style={styles.creditTitle}>Author</Text>
                <Text style={styles.authorName}>Adedapo Favour</Text>
              </View>
            </View>
            <View style={styles.credits}>
              <View>
                <Image
                  style={styles.creditImage}
                  source={require('../assets/woman-happy.jpg')}
                />
              </View>
              <View>
                <Text style={styles.creditTitle}>Storyteller</Text>
                <Text style={styles.authorName}>Jane C. Doe</Text>
              </View>
            </View>
          </View>
          <View style={styles.chaptersInfo}>
            <View style={[styles.second, styles.info]}>
              <Text style={styles.mainText}>Chapters</Text>
              <Text style={styles.creditTitle}>23 Total</Text>
            </View>
            <View>
              <View style={styles.chapterInfo}>
                <View style={styles.chapterContent}>
                  <Text style={styles.chapter}>Chapter 1</Text>
                  <Text style={styles.secondText}>
                    How to supress the desire to die.
                  </Text>
                  <Text style={styles.creditTitle}>18 minutes</Text>
                </View>
                <View>
                  <Icon2 name="md-play" size={30} color="rgb(255,204,83)" />
                </View>
              </View>
              <View style={styles.chapterInfo}>
                <View style={styles.chapterContent}>
                  <Text style={styles.chapter}>Chapter 3</Text>
                  <Text style={styles.secondText}>
                    Feed your focus, starve distractions.
                  </Text>
                  <Text style={styles.creditTitle}>39 minutes</Text>
                </View>
                <View>
                  <Icon2 name="md-pause" size={30} color="rgb(255,204,83)" />
                </View>
              </View>
              <View style={styles.chapterInfo}>
                <View style={styles.chapterContent}>
                  <Text style={styles.chapter}>Chapter 4</Text>
                  <Text style={styles.secondText}>
                    How to supress the desire to die.
                  </Text>
                  <Text style={styles.creditTitle}>18 minutes</Text>
                </View>
                <View>
                  <Icon2 name="md-play" size={30} color="rgb(255,204,83)" />
                </View>
              </View>
              <View style={styles.chapterInfo}>
                <View style={styles.chapterContent}>
                  <Text style={styles.chapter}>Chapter 5</Text>
                  <Text style={styles.secondText}>
                    How to supress the desire to die.
                  </Text>
                  <Text style={styles.creditTitle}>18 minutes</Text>
                </View>
                <View>
                  <Icon2 name="md-play" size={30} color="rgb(255,204,83)" />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default BookInfo;
