import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function JuegoTangram({ nivel }: { nivel: number }) {
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
        <div className="aspect-video w-full md:p-8">
          <iframe
            key={nivel}
            src="https://www.cokitos.com/juegos/trz-tangram/"
            className="w-full h-full rounded-md"
          ></iframe>
        </div>
        <p className="md:hidden text-sm text-muted-foreground mt-2">Recomendamos rotar horizontalmente la pantalla del celular para una mejor experiencia</p>
      </CardContent>
    </Card>
  );
}
