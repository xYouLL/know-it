import { calculateScore, UserAnswer } from '../utils/score';

describe('calculateScore', () => {
  it('should return 0 if all answers are incorrect', () => {
    const answers: UserAnswer[] = [
      { questionId: 1, selectedIndex: 1, correctIndex: 0 },
      { questionId: 2, selectedIndex: 2, correctIndex: 1 },
    ];
    expect(calculateScore(answers)).toBe(0);
  });

  it('should return correct count of correct answers', () => {
    const answers: UserAnswer[] = [
      { questionId: 1, selectedIndex: 0, correctIndex: 0 },
      { questionId: 2, selectedIndex: 1, correctIndex: 1 },
      { questionId: 3, selectedIndex: 3, correctIndex: 2 },
    ];
    expect(calculateScore(answers)).toBe(2);
  });

  it('should return full score if all answers are correct', () => {
    const answers: UserAnswer[] = [
      { questionId: 1, selectedIndex: 2, correctIndex: 2 },
      { questionId: 2, selectedIndex: 0, correctIndex: 0 },
    ];
    expect(calculateScore(answers)).toBe(2);
  });
});
