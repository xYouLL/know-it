export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
};
  
export const questions: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "Rome", "Berlin", "Madrid"],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswerIndex: 1,
  },
  {
    id: 3,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
    correctAnswerIndex: 0,
  },
  {
    id: 4,
    question: "What is the boiling point of water at sea level?",
    options: ["100°C", "90°C", "80°C", "120°C"],
    correctAnswerIndex: 0,
  },
  {
    id: 5,
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correctAnswerIndex: 2,
  },
  {
    id: 6,
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswerIndex: 2,
  },
  {
    id: 7,
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correctAnswerIndex: 2,
  },
  {
    id: 8,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correctAnswerIndex: 1,
  },
  {
    id: 9,
    question: "Which country is famous for the Taj Mahal?",
    options: ["India", "Pakistan", "Nepal", "Bangladesh"],
    correctAnswerIndex: 0,
  },
  {
    id: 10,
    question: "What is the currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    correctAnswerIndex: 2,
  },
  {
    id: 11,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswerIndex: 2,
  },
  {
    id: 12,
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
    correctAnswerIndex: 2,
  },
  {
    id: 13,
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Cucumber", "Avocado", "Pepper"],
    correctAnswerIndex: 2,
  },
  {
    id: 14,
    question: "In which year did World War II end?",
    options: ["1942", "1945", "1948", "1950"],
    correctAnswerIndex: 1,
  },
  {
    id: 15,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Osmium", "Oxygen", "Ozone", "Oxide"],
    correctAnswerIndex: 1,
  },
  {
    id: 16,
    question: "Which organ pumps blood through the human body?",
    options: ["Lungs", "Kidney", "Brain", "Heart"],
    correctAnswerIndex: 3,
  },
  {
    id: 17,
    question: "Which company developed the iPhone?",
    options: ["Google", "Samsung", "Apple", "Microsoft"],
    correctAnswerIndex: 2,
  },
  {
    id: 18,
    question: "How many degrees are in a right angle?",
    options: ["90", "180", "45", "60"],
    correctAnswerIndex: 0,
  },
  {
    id: 19,
    question: "Which instrument has 88 keys?",
    options: ["Guitar", "Piano", "Violin", "Flute"],
    correctAnswerIndex: 1,
  },
  {
    id: 20,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    correctAnswerIndex: 0,
  },
  {
    id: 21,
    question: "Which planet is the closest to the sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    correctAnswerIndex: 2,
  },
  {
    id: 22,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswerIndex: 1,
  },
  {
    id: 23,
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "UK", "Russia"],
    correctAnswerIndex: 1,
  },
  {
    id: 24,
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    correctAnswerIndex: 2,
  },
  {
    id: 25,
    question: "Who discovered gravity when an apple fell on his head?",
    options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Stephen Hawking"],
    correctAnswerIndex: 2,
  },
  {
    id: 26,
    question: "Which continent is known as the 'Dark Continent'?",
    options: ["Asia", "Africa", "Australia", "Europe"],
    correctAnswerIndex: 1,
  },
  {
    id: 27,
    question: "Which vitamin is produced when the human body is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correctAnswerIndex: 3,
  },
  {
    id: 28,
    question: "What is the main language spoken in Brazil?",
    options: ["Spanish", "English", "Portuguese", "French"],
    correctAnswerIndex: 2,
  },
  {
    id: 29,
    question: "Which bird is known for mimicking human speech?",
    options: ["Sparrow", "Eagle", "Parrot", "Owl"],
    correctAnswerIndex: 2,
  },
  {
    id: 30,
    question: "How many colors are there in a rainbow?",
    options: ["5", "6", "7", "8"],
    correctAnswerIndex: 2,
  },
  {
    id: 31,
    question: "What do bees collect and use to make honey?",
    options: ["Pollen", "Nectar", "Water", "Sugar"],
    correctAnswerIndex: 1,
  },
  {
    id: 32,
    question: "Which famous scientist developed the theory of relativity?",
    options: ["Isaac Newton", "Marie Curie", "Nikola Tesla", "Albert Einstein"],
    correctAnswerIndex: 3,
  },
  {
    id: 33,
    question: "Which natural disaster is measured on the Richter scale?",
    options: ["Tornado", "Hurricane", "Earthquake", "Flood"],
    correctAnswerIndex: 2,
  },
  {
    id: 34,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswerIndex: 2,
  },
  {
    id: 35,
    question: "Who was the first man to walk on the moon?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
    correctAnswerIndex: 1,
  },
  {
    id: 36,
    question: "Which is the largest internal organ in the human body?",
    options: ["Heart", "Liver", "Lung", "Kidney"],
    correctAnswerIndex: 1,
  },
  {
    id: 37,
    question: "What is the main ingredient in bread?",
    options: ["Rice", "Corn", "Flour", "Barley"],
    correctAnswerIndex: 2,
  },
  {
    id: 38,
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Tiger", "Lion", "Elephant", "Leopard"],
    correctAnswerIndex: 1,
  },
  {
    id: 39,
    question: "What is H2O more commonly known as?",
    options: ["Salt", "Water", "Oxygen", "Hydrogen"],
    correctAnswerIndex: 1,
  }
];

  