import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { obtenerRespuestas } from "@/app/actions/results";
import { UpdateResultsButton } from "@/components/update-results-button";
import Image from "next/image";

export default async function Resultados() {
  const respuestas = await obtenerRespuestas();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}min ${remainingSeconds}s`;
  };

  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center border-b fixed top-0 w-full bg-background z-10 justify-between md:h-20">
        <div className="h-12 w-12 md:h-16 md:w-16">
          <Image src="/UCE.png" alt="UCE Logo" height={300} width={300}></Image>
        </div>
        <nav className=" flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Volver al juego
          </Link>
        </nav>
        <div className="h-12 w-12 md:h-16 md:w-16">
          <Image
            src="/Facultad.png"
            alt="Facultad Logo"
            height={300}
            width={300}
            className="rounded-full"
          ></Image>
        </div>
      </header>

      <main className="flex flex-col items-center p-8 w-full min-h-[calc(100vh-65px)] pt-24">
        <div className="self-start flex justify-between w-full">
          <ModeToggle></ModeToggle>
          <UpdateResultsButton></UpdateResultsButton>
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
          Respuestas Obtenidas
        </h1>
        <div className="w-full flex justify-center max-w-6xl mt-4">
          <Table>
            <TableCaption>
              Estos son los últimos resultados obtenidos por la aplicación
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Nivel</TableHead>
                <TableHead>Palabra</TableHead>
                <TableHead>Logrado</TableHead>
                <TableHead className="text-left w-[400px]">Historia</TableHead>
                <TableHead>Tiempo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {respuestas
                ? respuestas.map((respuesta, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{respuesta.nombre}</TableCell>
                      <TableCell>{respuesta.nivel}</TableCell>
                      <TableCell>{respuesta.palabra}</TableCell>
                      <TableCell>
                        {respuesta.logrado ? (
                          <Check color="#30d15b" />
                        ) : (
                          <X color="#ff1100" />
                        )}
                      </TableCell>
                      <TableCell>{respuesta.historia}</TableCell>
                      <TableCell>{formatTime(respuesta.tiempo)}</TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          Desarrollado por{" "}
          <span className="font-bold text-foreground">
            Arias Michelle, Cabrera Karen, Guayta Katherine, Santillán Adrián y
            Suarez Nathali
          </span>
          .
        </p>
      </footer>
    </>
  );
}
