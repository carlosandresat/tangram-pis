"use client"

import { OrdenarPalabra } from "@/components/ordenar-palabra"
import { JuegoTangram } from "@/components/juego-tangram"
import { EscribirHistoria } from "@/components/escribir-historia"

export function Juego() {

  return (
    <div>
        <OrdenarPalabra />
        <JuegoTangram />
        <EscribirHistoria />
    </div>
  )
}
