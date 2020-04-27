import React, { useState,useEffect } from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,TextInput,Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FloatingLabel from '../components/FloatingLabel'
import  axios from '../services/axiosConfig';

export default function HomeScreen(props) {

    //create states
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address,setAddress]=useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState('');
  const [salary, setSalary] = useState('');
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [location, setLocation] = useState('');

// find the coordinates
   function findCoordinates(){
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);

                setLocation(location);
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };


//get api for employees
 function getEmployee() {
     axios.get('/employee')
        .then(res => {
          setEmployees(res.data);
        })
  }
  useEffect(() => {
    getEmployee()

  }, );
//updating value in the list
 function update(e) {
     let data = {
         "employee_name": name,
         "employee_phone_number": phoneNumber,
         "age": age,
         "salary":salary,
         "email": email


     };
    axios.put('/employee/:id', data)
        .then(res => console.log(res.data));
  }
  //adding value to the list
    function addingDetailToList() {

        let data = {
            "employee_name": name,
            "employee_phone_number": phoneNumber,
            "age": age,
            "salary":salary,
            "email": email
        };
        return axios.post('/employees', data).then((response) => {

                console.log(response.data);
            }).catch((error) => {
            console.log('error..................................')
        });
    }
    function isValidForm () {
        return phoneNumber && phoneNumber.length >= 10;
    }

    // navigate to employee detail screen
  function onSubmit(e) {
    props.navigation.navigate("EmployeeDetails",{users:employees})
  }

  return (
      <View style={styles.container}>
          <Text style={styles.formHeading}>
              Employee Details Form</Text>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
              <Text style={{fontSize:14,
                  fontWeight:'bold'}}>Please Enter The Details</Text>
                <View style={{justifyContent:'center',alignItems:'center',marginTop: 30,marginBottom:30}}>
                    <FloatingLabel
                        labelStyle={isFocused ? styles.labelInputOnFocus : styles.labelInputOnBlur}
                        inputStyle={styles.input}
                        style={isFocused ? styles.formInputOnFoucs : styles.formInputOnBlur}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoComplete='off'
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChangeText={(text) => setName(text)}
                    >NAME</FloatingLabel>
                    <FloatingLabel
                        labelStyle={isFocused ? styles.labelInputOnFocus : styles.labelInputOnBlur}
                        inputStyle={styles.input}
                        style={isFocused ? styles.formInputOnFoucs : styles.formInputOnBlur}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoComplete='off'
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChangeText={(text) => setEmail(text)}
                    >EMAIL</FloatingLabel>
                    <FloatingLabel
                        labelStyle={isFocused ? styles.labelInputOnFocus : styles.labelInputOnBlur}
                        inputStyle={styles.input}
                        style={isFocused ? styles.formInputOnFoucs : styles.formInputOnBlur}
                        keyboardType='numeric'
                        maxLength={10}
                        autoCapitalize='none'
                        autoComplete='off'
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChangeText={(text) => setPhoneNumber('')}
                    >PHONE NUMBER</FloatingLabel>
                    <FloatingLabel
                        labelStyle={isFocused ? styles.labelInputOnFocus : styles.labelInputOnBlur}
                        inputStyle={styles.input}
                        style={isFocused ? styles.formInputOnFoucs : styles.formInputOnBlur}
                        keyboardType='numeric'
                        maxLength={10}
                        autoCapitalize='none'
                        autoComplete='off'
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChangeText={(text) => setAge('')}
                    >AGE</FloatingLabel>
                    <FloatingLabel
                        labelStyle={isFocused ? styles.labelInputOnFocus : styles.labelInputOnBlur}
                        inputStyle={styles.input}
                        style={isFocused ? styles.formInputOnFoucs : styles.formInputOnBlur}
                        keyboardType='numeric'
                        maxLength={10}
                        autoCapitalize='none'
                        autoComplete='off'
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChangeText={(text) => setSalary('')}
                    >SALARY</FloatingLabel>

                    <TouchableOpacity onPress={findCoordinates}>
                        <Text style={styles.welcome}>Find My Coords?</Text>
                        <Text>Location: {location}</Text>
                    </TouchableOpacity>

                </View>

       <View style={{marginBottom:30}}>
           <Button
               onPress={addingDetailToList}
               title="Add Detail To List"
               color="#841584"
               accessibilityLabel="Learn more about this purple button"
               disabled={!isValidForm()}
           />
       </View>

           <View>
               <Button
                   onPress={onSubmit}
                   title="employee detail"
                   color="#841584"
                   accessibilityLabel="Learn more about this purple button"
               />

           </View>

              <Button
                  onPress={update}
                  title="update"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
              />

          </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
   formHeading:{
       textAlign:'center',
       fontSize:18,
       fontWeight:'bold',
       backgroundColor: 'green',
       padding:30
   },
    formInputOnFoucs: {
        borderBottomWidth: 1.5,
        borderColor: 'gray',
    },
    formInputOnBlur: {
        borderBottomWidth: 1.5,
        borderColor: 'black',
    },
    input: {
        borderWidth: 0,
        color: 'black',
        fontSize: 15,
        width:250
    },
    labelInputOnBlur: {
        fontSize: 14,
    },
    labelInputOnFocus: {
        color: 'red',
        fontSize: 13,
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
