import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

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
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-0fXdLj4s3iQVN5404cAxqc89i6g2gCb-Q&s' }} 
        />
        <TextInput style={styles.input} />
      </View>
      <TextInput
        style={styles.searchBox}
        placeholder="Search"
        placeholderTextColor="#000"
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    height: 52,
    marginLeft: 140, 
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
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#000',
  },

});

