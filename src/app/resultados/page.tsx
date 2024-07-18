import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

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
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Respuestas Otenidas
        </h1>
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