import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import leftImage from './assets/left-image.jpg'; 
import rightImage from './assets/right-image.jpg';
import usericon from './assets/user-icon.jpg';
import workImage from './assets/work-image.png';
import hobbiesImage from './assets/hobbies-image.jpg';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hello, Devs</Text>
          <Text style={styles.subText}>14 tasks today</Text>
        </View>
        <Image
          style={styles.image}
          source={usericon} 
        />
        <TextInput style={styles.input} />
      </View>
      <TextInput
        style={styles.searchBox}
        placeholder="Search"
        placeholderTextColor="#000"
      />
      <Text style={styles.category}>Categories</Text>
      <View style={styles.categoriesContainer}>
        <View style={styles.leftBox}>
          <Text style={styles.boxText}>Exercise</Text>
          <Text style={styles.boxSubText}>12 Tasks</Text>
          <Image
            style={styles.boxImage}
            source={leftImage}
          />
        </View>
        <View style={styles.rightBox}>
          <Text style={styles.boxText}>Study</Text>
          <Text style={styles.boxSubText}>12 Tasks</Text>
          <Image
            style={styles.boxImage}
            source={rightImage}
          />
        </View>
      </View>
      <View style={[styles.categoriesContainer, { top: 471 }]}>
        <View style={styles.leftBox}>
          <Text style={styles.boxText}>Work</Text>
          <Text style={styles.boxSubText}>8 Tasks</Text>
          <Image
            style={styles.boxImage}
            source={workImage}
          />
        </View>
        <View style={styles.rightBox}>
          <Text style={styles.boxText}>Hobbies</Text>
          <Text style={styles.boxSubText}>5 Tasks</Text>
          <Image
            style={styles.boxImage}
            source={hobbiesImage}
          />
        </View>
      </View>
     
      <Text style={styles.task}>Ongoing Tasks</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE2',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  textBox: {
    width: 354,
    height: 52,
    position: 'absolute',
    top: 75,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 1,
  },
  text: {
    width: 170,
    height: 52,
    fontSize: 35,
    color: 'black',
    textAlignVertical: 'center',
  },
  subText: {
    fontSize: 14,
    top: -10,
    color: 'black',
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 140, 
    borderRadius: 25,
  },
  input: {
    flex: 1,
    height: 52,
    opacity: 0,
  },
  searchBox: {
    position: 'absolute',
    width: 270,
    height: 49,
    left: 20,
    top: 150,
    borderWidth: 0,
    borderRadius: 12,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#000',
    backgroundColor: '#fff',
  },
  category: {
    fontSize: 20,
    position: 'absolute',
    top: 210,
    left: 20,
    color: 'black',
  },
  categoriesContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 249,
    left: 20,
    gap: 0,
  },
  leftBox: {
    width: 186,
    height: 192,
    opacity: 1,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 10,
    borderColor: '#ccc',
    marginRight: 20, 
  },
  rightBox: {
    width: 186,
    height: 192,
    opacity: 1,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 10,
    borderColor: '#ccc',
  },
  boxText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 2,
  },
  boxSubText: {
    fontSize: 12,

  },
  boxImage: {
    width: 160,
    height: 120,
  },
  task: {
    fontSize: 20,
    position: 'absolute',
    top: 700,
    left: 0, 
    right: 0, 
    color: 'black',
    paddingHorizontal: 20, 
  },

});

