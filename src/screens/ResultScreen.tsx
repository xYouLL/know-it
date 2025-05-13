import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = NativeStackScreenProps<RootStackParamList, "Result">;

export default function ResultScreen({ route, navigation }: Props) {
    const { score, mode } = route.params;

    // Whenever the screen mounts, save the score passed as a prop in the async storage
    useEffect(() => {
        const saveHighScore = async () => {
            const stored = await AsyncStorage.getItem("highScores");
            const previousScores = stored ? JSON.parse(stored) : [];
            const updated = [
                ...previousScores,
                { date: new Date().toISOString(), score, mode },
            ];
            await AsyncStorage.setItem("highScores", JSON.stringify(updated));
        };

        saveHighScore();
    }, [score]);

    return (
        <View style={styles.container}>
            <Text variant="headlineMedium" style={styles.scoreText}>
                Your Score: {score}
            </Text>

            <Button
                mode="contained"
                onPress={() => navigation.replace("Quiz", { mode })}
                style={styles.button}
            >
                Try Again
            </Button>
            <Button
                onPress={() => navigation.navigate("High Scores")}
                style={styles.button}
            >
                View High Scores
            </Button>
            <Button onPress={() => navigation.popToTop()} style={styles.button}>
                Back to Home
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        justifyContent: "center",
    },
    scoreText: {
        textAlign: "center",
        marginBottom: 40,
    },
    button: {
        marginVertical: 8,
    },
});
