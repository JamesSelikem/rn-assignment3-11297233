import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, FlatList } from 'react-native';
import leftImage from './assets/left-image.png'; 
import rightImage from './assets/right-image.png';
import usericon from './assets/user-icon.jpg';
import workImage from './assets/work-image.png';
import hobbiesImage from './assets/hobbies-image.jpg';
import healthImage from './assets/health-image.png';
import codeImage from './assets/code-image.jpg';
import leisureImage from './assets/leisure-image.png';
import financeImage from './assets/finance-image.png';
import searchIcon from './assets/search-icon.jpg';

export default function App() {
  const taskNames = [
    "Mobile App Development",
    "Web Development",
    "Database Design",
    "UI/UX Design",
    "Project Management",
    "Data Analysis",
    "Cybersecurity",
    "DevOps",
    "Cloud Computing",
    "Machine Learning",
    "Artificial Intelligence",
    "Networking",
    "Blockchain",
    "Internet of Things",
    "Quantum Computing"
  ];

  const tasks = taskNames.map((name, index) => ({
    id: index.toString(),
    title: name,
    
  }));

  const renderItem = ({ item }) => (
    <View style={styles.taskBox}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskDescription}>{item.description}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textBox}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>Hello, Devs</Text>
          <Text style={styles.subText}>14 tasks today</Text>
        </View>
        <Image
          style={styles.image}
          source={usericon} 
        />
        <TextInput style={styles.input} />
      </View>
      <View style={styles.searchBoxContainer}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search"
          placeholderTextColor="#000"
        />
        <Image
          style={styles.searchIcon}
          source={searchIcon}
        />
      </View>
      <Text style={[styles.category, { fontWeight: 'bold' }]}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScrollView}
        contentContainerStyle={styles.categoriesScrollViewContent}
      >
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
          
          <View style={styles.leftBox}>
            <Text style={styles.boxText}>Health</Text>
            <Text style={styles.boxSubText}>10 Tasks</Text>
            <Image
              style={styles.boxImage}
              source={healthImage}
            />
          </View>
          <View style={styles.rightBox}>
            <Text style={styles.boxText}>Code</Text>
            <Text style={styles.boxSubText}>15 Tasks</Text>
            <Image
              style={styles.boxImage}
              source={codeImage}
            />
          </View>
          <View style={styles.leftBox}>
            <Text style={styles.boxText}>Finance</Text>
            <Text style={styles.boxSubText}>6 Tasks</Text>
            <Image
              style={styles.boxImage}
              source={financeImage}
            />
          </View>
          <View style={styles.rightBox}>
            <Text style={styles.boxText}>Leisure</Text>
            <Text style={styles.boxSubText}>9 Tasks</Text>
            <Image
              style={styles.boxImage}
              source={leisureImage}
            />
          </View>
        </View>
      </ScrollView>
      <Text style={[styles.task, { fontWeight: 'bold' }]}>Ongoing Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.taskList}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0EDE2',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textBox: {
    width: 354,
    height: 52,
    marginTop: 75,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 1,
  },
  text: {
    width: 178,
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
  searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    width: 270,
    height: 49,
    marginTop: 25,
    borderWidth: 0,
    borderRadius: 12,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginRight: 10,
    fontSize: 18,
    color: '#000',
    backgroundColor: '#fff',
  },
  searchIcon: {
    width: 49,
    height: 49,
    borderRadius: 15,
    marginTop: 25,
  },
  category: {
    fontSize: 20,
    marginTop: 60,
    right: 135,
    color: 'black',
  },
  categoriesScrollView: {
    marginTop: 10,
  },
  categoriesScrollViewContent: {
    paddingHorizontal: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  rightBox: {
    width: 186,
    height: 192,
    opacity: 1,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 10,
    borderColor: '#ccc',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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
    marginTop: 20,
    width: '100%', 
    color: 'black',
    paddingHorizontal: 20, 
  },
  taskList: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  taskBox: {
    width: 354,
    height: 128,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  taskDescription: {
    fontSize: 14,
    color: '#666',
  },
});
