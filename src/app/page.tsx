import { ModeToggle } from "@/components/mode-toggle";
import { Juego } from "@/components/juego";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center border-b fixed top-0 w-full bg-background z-10 justify-between md:h-20">
      <div className="h-12 w-12 md:h-16 md:w-16">

        <Image src="/UCE.png" alt="UCE Logo" height={300} width={300}></Image></div>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/resultados"
          >
            Resultados
          </Link>
        </nav>
        <div className="h-12 w-12 md:h-16 md:w-16">
        <Image src="/Facultad.png" alt="Facultad Logo" height={300} width={300} className="rounded-full"></Image></div>
      </header>

      <main className="flex flex-col items-center p-8 w-full min-h-[calc(100vh-65px)] pt-24">
        <div className="self-start ">
          <ModeToggle></ModeToggle>
        </div>
        <Juego />
      </main>
      <footer className="flex flex-col gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t md:items-start">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          Desarrollado por{" "}
          <span className="font-bold text-foreground">
          Arias Michelle, Cabrera Karen, Guayta Katherine, Santillán Adrián y Suarez Nathali
          </span>
          .
        </p>
      </footer>
    </>
  );
}
