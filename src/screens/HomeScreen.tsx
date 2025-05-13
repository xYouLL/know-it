import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
    Button,
    Text,
    RadioButton,
    SegmentedButtons,
} from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { QuizMode, RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
    const [selectedMode, setSelectedMode] = useState<QuizMode>("classic");

    return (
        <View style={styles.container}>
            <Text variant="headlineMedium" style={styles.title}>
                Welcome to Know It?!
            </Text>
            <Text variant="titleMedium">Select Quiz Mode:</Text>
            <SegmentedButtons
                style={styles.modeButtons}
                value={selectedMode}
                onValueChange={(value) => setSelectedMode(value as QuizMode)}
                buttons={[
                    {
                        value: "classic",
                        label: "Classic",
                    },
                    {
                        value: "survival",
                        label: "Survival",
                    },
                    { value: "timed", label: "Timed" },
                ]}
            />
            <Button
                mode="contained"
                onPress={() =>
                    navigation.navigate("Quiz", { mode: selectedMode })
                }
                style={styles.button}
            >
                Start Quiz
            </Button>

            <Button
                mode="outlined"
                onPress={() => navigation.navigate("High Scores")}
                style={styles.button}
            >
                View High Scores
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    title: {
        marginBottom: 24,
        textAlign: "center",
    },
    modeButtons: {
        marginBottom: 16,
    },
    button: {
        marginVertical: 8,
    },
});
