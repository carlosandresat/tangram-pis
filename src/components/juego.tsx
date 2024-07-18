"use client"

import { OrdenarPalabra } from "@/components/ordenar-palabra"
import { JuegoTangram } from "@/components/juego-tangram"
import { EscribirHistoria } from "@/components/escribir-historia"

export function Juego() {

  return (
    <div className="w-full flex flex-col justify-center items-center pt-8 space-y-6">
        <OrdenarPalabra />
        <JuegoTangram />
        <EscribirHistoria />
    </div>
  )
}
