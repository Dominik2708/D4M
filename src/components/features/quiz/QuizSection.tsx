'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

const questions: QuizQuestion[] = [
  {
    question: 'Wie lange dauert es, bis eine Plastikflasche im Meer vollständig zersetzt ist?',
    options: ['10-20 Jahre', '50-100 Jahre', '200-450 Jahre', '1000+ Jahre'],
    correct: 2,
  },
  {
    question: 'Welcher Anteil des weltweiten Plastiks wird recycelt?',
    options: ['Weniger als 10%', 'Etwa 25%', 'Etwa 50%', 'Über 75%'],
    correct: 0,
  },
  {
    question: 'Was ist Mikroplastik?',
    options: [
      'Plastikteile kleiner als 5mm',
      'Biologisch abbaubares Plastik',
      'Recyceltes Plastik',
      'Plastik aus nachwachsenden Rohstoffen',
    ],
    correct: 0,
  },
  {
    question: 'Welche Alternative bietet 3D-Druck für nachhaltige Produktion?',
    options: [
      'Nur Massenproduktion möglich',
      'Bedarfsgerechte Produktion und Materialeffizienz',
      'Höherer Materialverbrauch',
      'Ausschließlich Einwegprodukte',
    ],
    correct: 1,
  },
];

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <section id="quiz" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto max-w-4xl">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Quiz abgeschlossen!</CardTitle>
              <Badge variant="secondary" className="text-lg px-4 py-2 m-auto">
                Score: {score}/{questions.length}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-xl text-gray-700">
                {score === questions.length
                  ? 'Perfekt! Du kennst dich bestens mit Umweltthemen aus!'
                  : score >= questions.length / 2
                  ? 'Gut gemacht! Du hast ein solides Wissen über Umweltthemen.'
                  : 'Nicht schlecht! Es gibt noch einiges zu lernen über Umweltschutz.'}
              </p>
              <p className="text-gray-600">
                Besuche unsere Workshops, um mehr über nachhaltige 3D-Druck-Technologie zu erfahren!
              </p>
              <Button onClick={resetQuiz} size="lg">
                Quiz wiederholen
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 px-4 bg-blue-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Wasser-Plastik-Quiz</h2>
          <p className="text-muted-foreground text-lg">
            Teste dein Wissen über Plastikverschmutzung in unseren Gewässern
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <Badge variant="outline">
                Frage {currentQuestion + 1} von {questions.length}
              </Badge>
              <Badge variant="secondary">
                Score: {score}/{currentQuestion}
              </Badge>
            </div>
            <CardTitle className="text-2xl mt-4">Plastikverschmutzung im Wasser</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">
              {questions[currentQuestion].question}
            </h3>

            <div className="grid gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? 'default' : 'outline'}
                  className="text-left justify-start h-auto p-4"
                  onClick={() => handleAnswerSelect(index)}
                >
                  {option}
                </Button>
              ))}
            </div>

            {selectedAnswer !== null && (
              <div className="mt-6 p-4 rounded-lg bg-accent/40">
                {selectedAnswer === questions[currentQuestion].correct ? (
                  <p className="text-primary font-medium">
                    ✓ Richtig! Das ist die korrekte Antwort.
                  </p>
                ) : (
                  <p className="text-destructive font-medium">
                    ✗ Leider falsch. Die richtige Antwort ist:{' '}
                    {questions[currentQuestion].options[questions[currentQuestion].correct]}
                  </p>
                )}
              </div>
            )}

            {selectedAnswer !== null && (
              <div className="text-center">
                <Button onClick={handleNextQuestion} size="lg">
                  {currentQuestion + 1 < questions.length ? 'Nächste Frage' : 'Quiz beenden'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
