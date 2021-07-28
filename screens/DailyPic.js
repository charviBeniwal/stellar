import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Alert,
    FlatList,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Linking
} from "react-native";
import axios from "axios";


export default class DailyPicScreen extends Component {
    constructor() {
        super();
        this.state = {
            apod: {}
        }
    }

    componentDidMount() {
        this.getAPOD();
    }

    getAPOD = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=iNwK0iQnf0ZW1anRXuYFz4CUs9Oaiawexo8xNW1p")
            .then(response => {
                this.setState({ apod: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                    source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                    <Text style={styles.routeText}>Astronomy picture of the day</Text>
                    <Text style={styles.titleText}>{this.state.apod.title}</Text>
                    <TouchableOpacity style={styles.listContainer}
                    onPress={()=> Linking.openURL(this.state.apod.url).catch(err => console.error("Could'nt Load Page ", err))}>
                        <View style={styles.iconContainer}>
                            <Image source={require("../assets/play-video.png")} style={{ width:50, height:50}}></Image>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    explanationText: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ?
            StatusBar.currentHeight : 0
    },
    container: {
        flex: 1
    }, backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        padding: 10
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 25,
        paddingLeft: 30
    },
    iconContainer: {
        position: "absolute",
        height: 120,
        width: 120,
        resizeMode: "contain",
        right: 20,
        top: 0
    }

})