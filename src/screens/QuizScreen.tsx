import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, Text, RadioButton } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { getRandomQuestions } from "../utils/question";
import { Question } from "../data/questions";

type Props = NativeStackScreenProps<RootStackParamList, "Quiz">;

export default function QuizScreen({ route, navigation }: Props) {
    const { mode } = route.params;

    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [questions] = useState(getRandomQuestions());

    const [timeLeft, setTimeLeft] = useState(10);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const currentQuestion = questions[current] as Question;

    useEffect(() => {
        if (mode === "timed") {
            setTimeLeft(10);
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timerRef.current!);
                        handleNext(); // auto-next if time runs out
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timerRef.current!);
        }
    }, [current, mode]);

    const handleNext = () => {
        if (mode !== "timed") clearInterval(timerRef.current!);

        const isCorrect = selected === currentQuestion.correctAnswerIndex;

        if (isCorrect) {
            setScore(score + 1);
        }

        // Special case: Survival mode ends immediately on first mistake
        if (mode === "survival" && !isCorrect) {
            Alert.alert(
                "Game Over",
                "You answered incorrectly in Survival mode."
            );
            return navigation.replace("Result", { score, mode });
        }

        if (current + 1 < questions.length) {
            setCurrent(current + 1);
            setSelected(null);
        } else {
            navigation.replace("Result", { score, mode });
        }
    };

    return (
        <View style={styles.container}>
            <Text variant="titleMedium">
                {`Question ${current + 1} of ${questions.length}`}
            </Text>
            <Text style={styles.question}>{currentQuestion.question}</Text>

            {mode === "timed" && (
                <Text style={styles.timer}>{`Time left: ${timeLeft}s`}</Text>
            )}

            <RadioButton.Group
                onValueChange={(val) => setSelected(Number(val))}
                value={selected?.toString() ?? ""}
            >
                {currentQuestion.options.map((option, index) => (
                    <RadioButton.Item
                        key={index}
                        label={option}
                        value={index.toString()}
                        status={selected === index ? "checked" : "unchecked"}
                    />
                ))}
            </RadioButton.Group>

            <Button
                mode="contained"
                onPress={handleNext}
                disabled={selected === null && mode !== "timed"}
                style={styles.button}
            >
                {current + 1 === questions.length ? "Finish Quiz" : "Next"}
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: "center",
    },
    question: {
        marginVertical: 20,
        fontSize: 18,
    },
    timer: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 10,
        color: "#d32f2f",
    },
    button: {
        marginTop: 20,
    },
});
