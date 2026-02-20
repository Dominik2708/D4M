'use client';

import { useState, useEffect } from 'react';
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
    question: 'Wie lange dauert es, bis sich Plastikmüll im Meer abgebaut hat?',
    options: ['500 Jahre', '1 Jahr', '10 Jahre', '200 Jahre'],
    correct: 0,
  },
  {
    question: 'Wie viele Tiere sterben jährlich am Plastikmüll im Meer?',
    options: ['1,5 Millionen', '10.000', '100.000', '100 Millionen'],
    correct: 0,
  },
  {
    question: 'Welches ist das größte Korallenriff auf der Erde?',
    options: ['Great Barrier Reef', 'Ningaloo Reef', 'Amazonas Reef', 'Großes Asienriff'],
    correct: 0,
  },
  {
    question: 'Wie lange ist das größte Korallenriff?',
    options: ['2.300 km', '800 km', '5.250 km', '2,3 km'],
    correct: 0,
  },
  {
    question: 'Wie tief ist der Marianengraben an seiner tiefsten Stelle?',
    options: ['11 km (≈ 11.000 m)', '25 km', '3,8 km', '1,5 km'],
    correct: 0,
  },
  {
    question: 'Wie tief kann das Licht ins Meer eindringen (noch sichtbar für Menschen)?',
    options: ['300 m', '150 m', '75 m', '37 m'],
    correct: 0,
  },
  {
    question: 'Wie viel Prozent der Ozeane sind bereits erforscht?',
    options: ['5–10 %', '2–4 %', '15–20 %', '50–60 %'],
    correct: 0,
  },
  {
    question: 'Wie lang ist die längste Bergkette im Meer?',
    options: ['65.000 km', '65 km', '650 km', '6.500 km'],
    correct: 0,
  },
  {
    question: 'Welcher Ozean ist der größte der Erde?',
    options: ['Pazifischer Ozean', 'Indischer Ozean', 'Atlantischer Ozean', 'Arktischer Ozean'],
    correct: 0,
  },
  {
    question: 'Wie viel Prozent der Erdoberfläche sind mit Wasser bedeckt?',
    options: ['71 %', '51 %', '61 %', '81 %'],
    correct: 0,
  },
  {
    question: 'Welches Meer hat den höchsten Salzgehalt?',
    options: ['Totes Meer', 'Mittelmeer', 'Schwarzes Meer', 'Nordsee'],
    correct: 0,
  },
  {
    question: 'Wie heißen die weltweiten warmen Meeresströmungen, die das Klima beeinflussen?',
    options: ['Thermohaline Zirkulation', 'Passatwinde', 'La Niña', 'Taifun-Zirkulation'],
    correct: 0,
  },
  {
    question: 'Welche Farbe des Lichts dringt am tiefsten ins Meer?',
    options: ['Blau', 'Rot', 'Gelb', 'Grün'],
    correct: 0,
  },
  {
    question: 'Welches Meer ist das größte Binnenmeer der Welt?',
    options: ['Kaspisches Meer', 'Mittelmeer', 'Schwarzes Meer', 'Rotes Meer'],
    correct: 0,
  },
  {
    question: 'Wie nennt man das Phänomen, wenn Wasserpflanzen massenhaft wachsen und das Wasser grün färben?',
    options: ['Algenblüte', 'Meeresleuchten', 'Gezeitenströmung', 'Planktonwachstum'],
    correct: 0,
  },
  {
    question: 'Wie nennt man die Zone, in der das Licht vollständig verschwindet?',
    options: ['Aphotische Zone', 'Euphotische Zone', 'Thermokline', 'Bathypelagische Zone'],
    correct: 0,
  },
  {
    question: 'Was ist die Hauptursache für Gezeiten (Ebbe und Flut)?',
    options: ['Schwerkraft von Mond und Sonne', 'Windströmungen', 'Sonnenenergie', 'Vulkanische Aktivität'],
    correct: 0,
  },
  {
    question: 'Wie viel Prozent des Meeresmülls besteht aus Plastik?',
    options: ['80 %', '20 %', '40 %', '60 %'],
    correct: 0,
  },
];

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const getDoubleIndices = () => {
    const count = Math.min(2, questions.length);
    const indices = Array.from({ length: questions.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices.slice(0, count);
  };

  const [doubleIndices, setDoubleIndices] = useState<number[]>([]);
  
  useEffect(() => {
    setDoubleIndices(getDoubleIndices());
  }, []);

  const maxScore = questions.length + doubleIndices.length;

  const handleAnswerSelect = (answerIndex: number) => {
    // once an answer is selected, further changes are prevented
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      const pointsToAdd = doubleIndices.includes(currentQuestion) ? 2 : 1;
      setScore((s) => s + pointsToAdd);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((c) => c + 1);
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
    setDoubleIndices(getDoubleIndices());
  };

  if (quizCompleted) {
    return (
      <section id="quiz" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl mb-4 text-gray-900 font-bold">Quiz abgeschlossen!</CardTitle>
              <Badge variant="secondary" className="text-lg px-4 py-2 m-auto bg-green-50 text-green-700">
                Score: {score}/{maxScore}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-xl text-gray-700 font-normal">
                {score === maxScore
                  ? 'Perfekt! Du kennst dich bestens mit Umweltthemen aus!'
                  : score >= maxScore / 2
                    ? 'Gut gemacht! Du hast ein solides Wissen über Umweltthemen.'
                    : 'Nicht schlecht! Es gibt noch einiges zu lernen über Umweltschutz.'}
              </p>
              <p className="text-gray-600 font-normal">
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
    <section id="quiz" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Wasser-Plastik-Quiz</h2>
          <p className="text-gray-600 text-lg font-normal">
            Teste dein Wissen über Plastikverschmutzung in unseren Gewässern
          </p>
        </div>

          <Card
            className={
              selectedAnswer !== null
                ? selectedAnswer === questions[currentQuestion].correct
                  ? 'ring-2 ring-green-400'
                  : 'ring-2 ring-red-400'
                : ''
            }
          >
          <CardHeader>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-gray-700 border-gray-300">
                  Frage {currentQuestion + 1} von {questions.length}
                </Badge >
                {doubleIndices.includes(currentQuestion) && (
                  <Badge variant="secondary" className="bg-yellow-50 text-yellow-700">x2 Für diese Antwort gibt es doppelte Punktzahl.</Badge>
                )}
              </div>
              <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                Score: {score}/{maxScore}
              </Badge>
            </div>
            <CardTitle className="text-2xl mt-4 text-gray-900 font-bold">Plastikverschmutzung im Wasser</CardTitle>
          </CardHeader>

            <CardContent className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">
              {questions[currentQuestion].question}
            </h3>

            <div className="grid gap-3">
              {questions[currentQuestion].options.map((option, index) => {
                const isAnswered = selectedAnswer !== null;
                const correctIndex = questions[currentQuestion].correct;
                // base classes used for all option buttons
                let extra = '';
                if (isAnswered) {
                  if (index === correctIndex) {
                    // highlight correct answer
                    extra = 'bg-green-50 text-green-900 font-bold';
                  } else if (index === selectedAnswer && selectedAnswer !== correctIndex) {
                    // highlight wrong selected answer
                    extra = 'bg-red-50 text-red-900';
                  } else {
                    extra = 'opacity-70';
                  }
                }

                return (
                  <Button
                    key={index}
                    variant={isAnswered ? 'outline' : selectedAnswer === index ? 'default' : 'outline'}
                    className={`text-left justify-start h-auto p-4 ${extra}`}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={isAnswered}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span>{option}</span>
                      {isAnswered && (
                        index === correctIndex ? (
                          <span className="ml-4 text-green-600 text-lg" aria-hidden>
                            ✓
                          </span>
                        ) : index === selectedAnswer ? (
                          <span className="ml-4 text-red-600 text-lg" aria-hidden>
                            ✗
                          </span>
                        ) : null
                      )}
                    </div>
                  </Button>
                );
              })}
            </div>

            <div className="text-center">
              {selectedAnswer !== null && (
                <Button onClick={handleNextQuestion} size="lg">
                  {currentQuestion + 1 < questions.length ? 'Nächste Frage' : 'Quiz beenden'}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
