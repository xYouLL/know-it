import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, Card, Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { QuizMode, RootStackParamList } from "../../App";
import HighScoreCard from "../components/HighScoreCard";

type Props = NativeStackScreenProps<RootStackParamList, "High Scores">;

export type HighScore = {
    date: string;
    score: number;
    mode: QuizMode;
};

export default function HighScoresScreen({ navigation }: Props) {
    const [scores, setScores] = useState<HighScore[]>([]);

    // On screen mount, load the scores from the async storage
    useEffect(() => {
        const loadScores = async () => {
            const stored = await AsyncStorage.getItem("highScores");
            const parsed: HighScore[] = stored ? JSON.parse(stored) : [];
            const sorted = parsed.sort((a, b) => b.score - a.score);
            setScores(sorted);
        };

        loadScores();
    }, []);

    return (
        <View style={styles.container}>
            {scores.length === 0 ? (
                <Text>No scores yet. Play the quiz to set a record!</Text>
            ) : (
                <FlatList
                    data={scores}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <HighScoreCard
                            key={item.date}
                            item={item}
                            scoreId={index}
                        />
                    )}
                />
            )}
            <Button onPress={() => navigation.popToTop()} style={styles.button}>
                Back to Home
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
    },
    button: {
        marginTop: 16,
    },
});
