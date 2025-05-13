import { questions } from "../data/questions"

export const getRandomQuestions = () => {
    const questionsSet = new Set();

    while (questionsSet.size < 10) {
        const randomIndex = Math.floor(Math.random() * questions.length + 1);
        questionsSet.add(questions[randomIndex])
    }

    return Array.from(questionsSet)
}