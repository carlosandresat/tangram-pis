"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react";

export function OrdenarPalabra({palabra, setPalabraIngresada}:{palabra:string, setPalabraIngresada:React.Dispatch<React.SetStateAction<string>>}) {

  const [letters, setLetters] = useState<string[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  function shuffleWord(word: string): string[] {
    return word.split('').sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    const newSet = shuffleWord(palabra)
    setLetters(newSet);
    setPalabraIngresada(newSet.join(''))
  }, [palabra]);

  const handleButtonClick = (index: number) => {
    if (selectedIndices.length === 0) {
      setSelectedIndices([index]);
    } else if (selectedIndices.length === 1) {
      const newLetters = [...letters];
      const temp = newLetters[selectedIndices[0]];
      newLetters[selectedIndices[0]] = newLetters[index];
      newLetters[index] = temp;
      setLetters(newLetters);
      setSelectedIndices([]);
      setPalabraIngresada(newLetters.join(''));
    }
  };


  return (
    <Card className="w-full max-w-4xl">
    <CardHeader>
      <CardTitle>Ejercicio 1: Ordenar Palabra</CardTitle>
      <CardDescription>Dale click a 2 casilleros para intercambiar su orden hasta encontrar la palabra escondida</CardDescription>
    </CardHeader>
    <CardContent>
        <div className="flex w-full justify-center space-x-2">
        {letters.map((letter, index) => (
            <Button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={selectedIndices.includes(index) ? "ring-2 ring-ring ring-offset-2" : "hover:ring-2 hover:ring-ring hover:ring-offset-2"}

            >
              {letter}
            </Button>
          ))}
        </div>
    </CardContent>
  </Card>

  )
}
