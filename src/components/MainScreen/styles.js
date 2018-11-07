import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    marginTop: (Platform.OS === 'ios') ? 18 : 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageContainer: {
    alignSelf: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  views: {
    margin: 5
  },
  boundContainer: {
    margin: 5,
  },
  bound: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginHorizontal: 30
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE",
  }
});
