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

export default function Resultados() {
  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center border-b fixed top-0 w-full bg-background z-10">
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Volver al juego
          </Link>
        </nav>
      </header>

      <main className="flex flex-col items-center p-8 w-full min-h-[calc(100vh-65px)] pt-24">
        <div className="self-end">
          <ModeToggle></ModeToggle>
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
          Respuestas Obtenidas
        </h1>
        <div className="w-full flex justify-center max-w-6xl mt-4">
          <Table>
            <TableCaption>
              Estos on los últimos resultados obtenidos por la aplicación
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Palabra</TableHead>
                <TableHead>Logrado</TableHead>
                <TableHead className="text-left w-[400px]">Historia</TableHead>
                <TableHead>Tiempo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>Nombre Ejemplo</TableCell>
                <TableCell>Conejo</TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris dapibus, lorem sit amet condimentum consequat, nisl
                  felis mattis nunc, sed semper magna nisl ac metus. Cras dui
                  nisl, ultricies sit amet risus at, lacinia dignissim urna.
                  Etiam eu efficitur arcu.
                </TableCell>
                <TableCell>3min 8s</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2</TableCell>
                <TableCell>Nombre Ejemplo</TableCell>
                <TableCell>Perro</TableCell>
                <TableCell>
                  <X />
                </TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris dapibus, lorem sit amet condimentum consequat, nisl
                  felis mattis nunc, sed semper magna nisl ac metus. Cras dui
                  nisl, ultricies sit amet risus at, lacinia dignissim urna.
                  Etiam eu efficitur arcu.
                </TableCell>
                <TableCell>1min 20s</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Desarrollado por{" "}
          <span className="font-bold text-foreground">
            Integrante 1, Integrante 2, Integrante 3
          </span>
          .
        </p>
      </footer>
    </>
  );
}
