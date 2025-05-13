export type UserAnswer = {
    questionId: number;
    selectedIndex: number;
    correctIndex: number;
  };
  
export function calculateScore(answers: UserAnswer[]): number {
    return answers.reduce((total, answer) => {
        return total + (answer.selectedIndex === answer.correctIndex ? 1 : 0);
    }, 0);
}
  