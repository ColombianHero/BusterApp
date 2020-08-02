import React from "react";
import { View, StyleSheet, TouchableHighlight, Animated } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";

export default class AddButton extends React.Component {
    mode = new Animated.Value(0);
    buttonSize = new Animated.Value(1);

    handlePress = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.95,
                duration: 200
            }),
            Animated.timing(this.buttonSize, {
                toValue: 1
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 0 ? 1 : 0
            })
        ]).start();
    };

    render() {
        const videoX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -100]
        });

        const videoY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -100]
        });

        const cameraX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, 50]
        });

        const cameraY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -100]
        });

    
        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"]
        });

        const sizeStyle = {
            transform: [{ scale: this.buttonSize }]
        };

        return (
            <View style={{ position: "absolute", alignItems: "center" }}>
                <Animated.View style={{ position: "absolute", left: videoX, top: videoY }}>
                    <View style={styles.secondaryButton}>
                    <Feather name="video" size={24} color="black" />
                    </View>
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: cameraX, top: cameraY }}>
                    <View style={styles.secondaryButton}>
                    <Feather name="camera" size={24} color="black" />
                    </View>
                </Animated.View>
              
                <Animated.View style={[styles.button, sizeStyle]}>
                    <TouchableHighlight onPress={this.handlePress} underlayColor="#7F58FF">
                        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                            <FontAwesome5 name="plus" size={24} color="#FFF" />
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: "#CB3122",
        position: "absolute",
        marginTop: -60,
        shadowColor: "#CB3122",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#FFFFFF"
    },
    secondaryButton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#CB3122"
    }
});
