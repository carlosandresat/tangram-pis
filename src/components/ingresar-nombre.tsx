"use client";

import { Input } from "@/components/ui/input";

export function IngresarNombre({nombre, setNombre}:{nombre:string, setNombre:React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <div className="flex items-center space-x-4 w-full max-w-xl justify-center">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Ingresa tu nombre:
      </h4>
      <Input className="ml-auto" value={nombre} onChange={(e)=> setNombre(e.target.value)} maxLength={30}></Input>
    </div>
  );
}
