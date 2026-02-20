'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface QuizQuestion {
  question: string;
  options: string[];
}

export function QuizSection() {
  const { t } = useTranslation();
  const questions = t('quiz.questions', { returnObjects: true }) as QuizQuestion[];

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

  const [doubleIndices, setDoubleIndices] = useState<number[]>(() => getDoubleIndices());

  const maxScore = questions.length + doubleIndices.length;

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    // correct answer is always index 0
    if (selectedAnswer === 0) {
      const pointsToAdd = doubleIndices.includes(currentQuestion) ? 2 : 1;
      setScore(s => s + pointsToAdd);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(c => c + 1);
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
      <section id="quiz" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto max-w-4xl">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">{t('quiz.completed')}</CardTitle>
              <Badge variant="secondary" className="text-lg px-4 py-2 m-auto">
                Score: {score}/{maxScore}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-xl text-gray-700">
                {score === maxScore
                  ? t('quiz.perfectScore')
                  : score >= maxScore / 2
                    ? t('quiz.goodScore')
                    : t('quiz.lowScore')}
              </p>
              <p className="text-gray-600">{t('quiz.workshopHint')}</p>
              <Button onClick={resetQuiz} size="lg">
                {t('quiz.retry')}
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
          <h2 className="text-4xl font-bold text-primary mb-4">{t('quiz.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('quiz.subtitle')}</p>
        </div>

        <Card
          className={
            selectedAnswer !== null
              ? selectedAnswer === 0
                ? 'ring-2 ring-green-500'
                : 'ring-2 ring-red-500'
              : ''
          }
        >
          <CardHeader>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Badge variant="outline">
                  {t('quiz.questionOf', { current: currentQuestion + 1, total: questions.length })}
                </Badge>
                {doubleIndices.includes(currentQuestion) && (
                  <Badge variant="secondary" className="bg-accent/40">
                    {t('quiz.doublePoints')}
                  </Badge>
                )}
              </div>
              <Badge variant="secondary">
                Score: {score}/{maxScore}
              </Badge>
            </div>
            <CardTitle className="text-2xl mt-4">{t('quiz.topicTitle')}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">
              {questions[currentQuestion].question}
            </h3>

            <div className="grid gap-3">
              {questions[currentQuestion].options.map((option, index) => {
                const isAnswered = selectedAnswer !== null;
                const correctIndex = 0;
                let extra = '';
                if (isAnswered) {
                  if (index === correctIndex) {
                    extra = 'bg-green-100 border border-green-500 text-green-800';
                  } else if (index === selectedAnswer && selectedAnswer !== correctIndex) {
                    extra = 'bg-red-100 border border-red-500 text-red-800';
                  } else {
                    extra = 'opacity-70';
                  }
                }

                return (
                  <Button
                    key={index}
                    variant={
                      isAnswered ? 'outline' : selectedAnswer === index ? 'default' : 'outline'
                    }
                    className={`text-left justify-start h-auto p-4 ${extra}`}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={isAnswered}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span>{option}</span>
                      {isAnswered &&
                        (index === correctIndex ? (
                          <span className="ml-4 text-green-600 text-lg" aria-hidden>
                            ✓
                          </span>
                        ) : index === selectedAnswer ? (
                          <span className="ml-4 text-red-600 text-lg" aria-hidden>
                            ✗
                          </span>
                        ) : null)}
                    </div>
                  </Button>
                );
              })}
            </div>

            <div className="text-center">
              {selectedAnswer !== null && (
                <Button onClick={handleNextQuestion} size="lg">
                  {currentQuestion + 1 < questions.length
                    ? t('quiz.nextQuestion')
                    : t('quiz.finishQuiz')}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
