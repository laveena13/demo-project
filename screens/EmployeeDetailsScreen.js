import React, {Component} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,TextInput,Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



export default function EmployeeDetailsScreen(props) {

        const users = props.route.params.users;


    return (
        <View style={styles.container}>

            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.headingView}>
                    <Text  style={[{marginLeft:20,marginRight:20,color:'white'},styles.headingText]}>Email</Text>
                    <Text  style={[{marginRight:20,color:'white'},styles.headingText]}>Name</Text>
                    <Text  style={[{marginRight:20,color:'white'},styles.headingText]}>Phone Number</Text>
                    <Text  style={{marginRight:20,color:'white',flex:.3}}>Age</Text>
                    <Text  style={{marginRight:20,color:'white',flex:.3}}>Salary</Text>
                </View>
                <View style={styles.welcomeContainer}>
                   {
                        users.map((data,key)=>{
                         return(
                             <View style={{flexDirection:'row',flex:1,borderWidth:1.5,borderColor:'gray'}}>
                             {/*<Text>{data.avatar}</Text>*/}
                                 <Text style={{marginLeft:20,marginRight:20,flex:.3}}>{data.email}</Text>
                             <Text style={{marginLeft:20,marginRight:20,flex:.3}}>{data.name}</Text>
                             <Text style={{marginRight:30,flex:.3}}>{data.employee_phone_number}</Text>
                             <Text style={{marginRight:20,flex:.2}}>{data.age}</Text>
                             <Text style={{marginRight:20,flex:.2}}>{data.salary}</Text>
                             {/*<Text>{data.profile_image}</Text>*/}
                             </View>

                         )
                     } )
                   }

                </View>
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    headingText:{
        flex:.3
    },
    headingView:{
        flexDirection:'row',
        flex:1,
        // marginTop:20,
        paddingTop: 30,
        paddingBottom:30,
        backgroundColor:'black'
    }

});
