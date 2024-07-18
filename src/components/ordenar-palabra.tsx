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

export function OrdenarPalabra() {

  return (
    <Card className="w-full max-w-4xl">
    <CardHeader>
      <CardTitle>Ejercicio 1: Ordenar Palabra</CardTitle>
      <CardDescription>Dale click a 2 casilleros para intercambiar su orden hasta encontrar la palabra escondida</CardDescription>
    </CardHeader>
    <CardContent>
        <div className="flex w-full justify-center space-x-2">
            <Button className="">A</Button>
            <Button className="">B</Button>
            <Button className="">C</Button>
            <Button className="">D</Button>
            <Button className="">E</Button>
        </div>
    </CardContent>
  </Card>

  )
}
