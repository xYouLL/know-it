import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

import HomeScreen from "./src/screens/HomeScreen";
import QuizScreen from "./src/screens/QuizScreen";
import ResultScreen from "./src/screens/ResultScreen";
import HighScoresScreen from "./src/screens/HighScoresScreen";

export type QuizMode = "classic" | "timed" | "survival";

export type RootStackParamList = {
    Home: undefined;
    Quiz: { mode: QuizMode };
    Result: { score: number; mode: QuizMode };
    ["High Scores"]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: "Know It?!" }}
                    />
                    <Stack.Screen name="Quiz" component={QuizScreen} />
                    <Stack.Screen name="Result" component={ResultScreen} />
                    <Stack.Screen
                        name="High Scores"
                        component={HighScoresScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
