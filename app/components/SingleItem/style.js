import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-end',
  },
  CardTitle: {
    position: 'absolute',
    top: -250,
    left: 0,
    right: 150,
    bottom: 20,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
  title: {
  //  marginTop: -500,
  //   padding: 200,
    color: 'white',
    fontSize: 15,
  },
  item: {
    width: screenWidth - 10,
    height: screenWidth - 10,
  },
  image: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({
      ios: 0,
      android: 1,
    }),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  group: {
    marginTop: 20,

  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the background color and opacity
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default styles;
