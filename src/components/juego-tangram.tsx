import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function JuegoTangram() {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Ejercicio 2: Armar Figura</CardTitle>
        <CardDescription>
          Completa el siguiente juego de Tangram seleccionando la figura
          correspondiente a la palabra descubierta y armando la figura
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video w-full p-8">
          <iframe
            src="https://www.cokitos.com/juegos/trz-tangram/"
            className="w-full h-full rounded-md"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
}
