"use client";

import { OrdenarPalabra } from "@/components/ordenar-palabra";
import { JuegoTangram } from "@/components/juego-tangram";
import { EscribirHistoria } from "@/components/escribir-historia";
import { IngresarNombre } from "@/components/ingresar-nombre";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { palabras } from "@/data/palabras";


export function Juego() {
  const [nivel, setNivel] = useState<number>(1);
  const [nombre, setNombre] = useState<string>("");
  const [palabra, setPalabra] = useState<string>("conejo");
  const [palabraIngresada, setPalabraIngresada] = useState<string>("");
  const [historia, setHistoria] = useState<string>("");
  const [palabrasSeleccionadas, setPalabrasSeleccionadas] = useState<string[]>([]);
  const [jugando, setJugando] = useState<boolean>(true);

  useEffect(() => {
    // Seleccionar 10 palabras aleatorias del array `palabras`
    const palabrasRandom = [];
    const palabrasCopy = [...palabras];
    while (palabrasRandom.length < 10) {
      const randomIndex = Math.floor(Math.random() * palabrasCopy.length);
      palabrasRandom.push(palabrasCopy.splice(randomIndex, 1)[0]);
    }

    // Ordenar las palabras seleccionadas por longitud
    const palabrasOrdenadas = palabrasRandom.sort((a, b) => a.length - b.length);
    setPalabrasSeleccionadas(palabrasOrdenadas);
    setPalabra(palabrasOrdenadas[nivel - 1]);
  }, [jugando]);


  useEffect(() => {
    if (palabrasSeleccionadas.length > 0) {
      setPalabra(palabrasSeleccionadas[nivel - 1]);
    }
  }, [nivel, palabrasSeleccionadas]);


  const nextLevel = () => {
    console.log(nombre, palabra, palabraIngresada, historia)
    setHistoria("")
    if(nivel===10){
      setJugando(false)
      return
    }
    setNivel(nivel+1)
    window.scroll(0,0)
  }
  if(jugando){
    return (
      <div className="w-full flex flex-col justify-center items-center pt-8 space-y-6">
        <IngresarNombre nombre={nombre} setNombre={setNombre}/>
  
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-6">
          Nivel {nivel.toString()}
        </h2>
        <OrdenarPalabra palabra={palabra} setPalabraIngresada={setPalabraIngresada}/>
        <JuegoTangram nivel={nivel}/>
        <EscribirHistoria setHistoria={setHistoria} historia={historia}/>
        <div className="max-w-4xl flex justify-center md:justify-end w-full">
          <Button onClick={nextLevel}>Siguiente Nivel</Button>
        </div>
      </div>
    );  } else {
      return(
        <div className="w-full flex flex-col justify-center items-center space-y-6 my-auto">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-center">
          Felicidades {nombre}, has completado el juego
        </h2>
        <Button onClick={()=> {setJugando(true); setNivel(1)}}>Comenzar otra vez</Button>
      </div>
      )

    }
  
}
