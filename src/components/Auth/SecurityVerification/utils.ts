// Generate a random math problem
export const generateMathChallenge = (): { question: string; answer: string } => {
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;

  // Ensure subtraction doesn't result in negative numbers
  if (operation === '-' && num1 < num2) {
    [num1, num2] = [num2, num1];
  }

  let answer: number;
  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      answer = num1 + num2;
  }

  return {
    question: `${num1} ${operation} ${num2} = ?`,
    answer: answer.toString()
  };
};

// Generate an image verification challenge
export const generateImageChallenge = (): { question: string; answer: string; options: string[] } => {
  const challenges = [
    {
      question: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?w=128&q=80',
      answer: 'Köpek',
      options: ['Kedi', 'Köpek', 'Kuş', 'Balık']
    },
    {
      question: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=128&q=80',
      answer: 'Kedi',
      options: ['Tavşan', 'Kedi', 'Fare', 'Köpek']
    },
    {
      question: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=128&q=80',
      answer: 'Kuş',
      options: ['Kuş', 'Kedi', 'Köpek', 'Balık']
    }
  ];

  return challenges[Math.floor(Math.random() * challenges.length)];
};