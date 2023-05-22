import React from "react";
import { Text, TextInput, View, ScrollView, Pressable } from "react-native";
import styles from "./Signup.screen.styles";
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Button from "../../components/Button/Button";



export default function Signup(){
    const [matricule, setMatricule] = React.useState<string>("");
    const [fullName, setFullName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [faculty, setFaculty] = React.useState<string>("");
    const [department, setDepartment] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [confirmPassword, setConfirmPassword] = React.useState<string>("");

    return(
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>ATTENDLY</Text>
                </View>

                <View>
                    <Text style={styles.signupTitle}>Sign up</Text>
                    <Text style={styles.signupDesc}>Welcome, Kindly Enter Your Data.</Text>
                </View>

                <View>
                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>
                            <AntDesign name="idcard" color={styles.iconsColor.color} size={25} />
                        </View>
                        <TextInput placeholder="Matriculation Number" onChangeText={(value)=>setMatricule(value)} />
                    </View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="person" color={styles.iconsColor.color} size={25}/>
                        </View>
                        <TextInput placeholder="Full Name" onChangeText={(value)=>setFullName(value)} />
                    </View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>
                            <MaterialIcons name="email" color={styles.iconsColor.color} size={25} />
                        </View>
                        <TextInput placeholder="Institutional Email" onChangeText={(value)=>setEmail(value)} />
                    </View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>

                        </View>
                        <TextInput placeholder="Faculty" onChangeText={(value)=>setFaculty(value)} />
                    </View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>

                        </View>
                        <TextInput placeholder="Department" onChangeText={(value)=>setDepartment(value)} />
                    </View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="key" color={styles.iconsColor.color} size={25} />
                        </View>
                        <TextInput placeholder="Password" onChangeText={(value)=>setPassword(value)} />
                    </View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="key" color={styles.iconsColor.color} size={25} />
                        </View>
                        <TextInput placeholder="Confirm Password" onChangeText={(value)=>setConfirmPassword(value)} />
                    </View>
                </View>

                <View style={styles.btnContainer}>
                    <Button text="Sign Up" />
                </View>

                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>Have An Account?</Text>
                    <Pressable>
                        <Text style={styles.signinText}>SignIn</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}