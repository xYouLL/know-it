import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { HighScore } from "../screens/HighScoresScreen";

const Modes = {
    classic: "Classic mode",
    survival: "Survival mode",
    timed: "Timed mode",
};

export default function HighScoreCard({
    item,
    scoreId,
}: {
    item: HighScore;
    scoreId: number;
}) {
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Text>{`#${scoreId + 1}  Score: ${item.score}`}</Text>
                <Text>{Modes[item.mode]}</Text>
                <Text variant="bodySmall">
                    {new Date(item.date).toLocaleString()}
                </Text>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 6,
    },
});
