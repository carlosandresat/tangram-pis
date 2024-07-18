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
import { Textarea } from "@/components/ui/textarea"

export function EscribirHistoria() {

  return (
    <Card className="w-full max-w-4xl">
    <CardHeader>
      <CardTitle>Ejercicio 3: Escribir Historia</CardTitle>
      <CardDescription>Escribe una historia relacionada a la palabra descubierta en el ejercicio 1</CardDescription>
    </CardHeader>
    <CardContent>
        <Textarea placeholder="Escribe tu historia aquí..." maxLength={1000} className="h-40"></Textarea>
    </CardContent>
  </Card>

  )
}
