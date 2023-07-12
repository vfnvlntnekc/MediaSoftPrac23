import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert, 
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const SaveScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');

  const handleSaveContact = () => {
    navigation.navigate('HomeScreen');
    setName('');
    setPhone('');
    setBirthDate('');
    setStatus('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textDark}>Добавить контакт</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor="#adedce"
        placeholder="Имя"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor="#adedce"
        placeholder="Телефон"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor="#adedce"
        placeholder="Дата рождения"
        value={birthDate}
        onChangeText={setBirthDate}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor="#adedce"
        placeholder="Описание"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.inputStatus}
        placeholderTextColor="#adedce"
        placeholder="♡"
        value={status}
        onChangeText={setStatus}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveContact}>
        <Text style={styles.buttonText}>Сохранить</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const handleNewContact = () => {
    navigation.navigate('SaveScreen');
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch('https://api.example.com/data');
    //   const responseData = await response.json();
    //setData(responseData);
    // };
    //  fetchData();
    }, []);  

    // Установим стандартное значение
    const dataObjects = [
      {
        name: 'Анастасия',
        phone: '+7 927 134 56 73',
        birthDate: '16.03.2002',
        status: '♥',
        description: 'Менеджер проекта',
      },
      {
        name: 'Дарья',
        phone: '+7 937 182 47 56',
        birthDate: '15.05.2001',
        status: '',
        description: 'Бэкенд разработчик',
      }
    ]

    return (
      <View style={styles.container}>
        {dataObjects.map((dataObject, index) => (
          <View key={index} style={styles.dataContainer}>
            <Text style={styles.dataText}>{dataObject.name}               {dataObject.status}</Text>
            <Text style={styles.dataText}>{dataObject.phone}</Text>
            <Text style={styles.dataText}>{dataObject.birthDate}</Text>
            <Text style={styles.dataText}>{dataObject.description}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.button} onPress={handleNewContact}>
          <Text style={styles.buttonText}>Добавить контакт</Text>
        </TouchableOpacity>
      </View>

    );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SaveScreen" component={SaveScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textDark: {
    color: '#1b6742',
    fontSize: 30,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    backgroundColor: '#1b6742',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#adedce',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  dataContainer: {
    justifyContent: 'flex-start',
    backgroundColor: '#adedce',
    marginTop: 20,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 20,
    width: '85%',
  },
  dataText: {
    color: '#1b6742',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
    paddingHorizontal: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#1b6742',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    fontFamily: 'monospace',
  },
  inputStatus: {
    marginTop: 20,
    fontFamily: 'monospace',
    fontSize: 60,
  }
});

function handleSaveContact() {};
function handleNewContact() {};

export default App;
