"use client";

import { OrdenarPalabra } from "@/components/ordenar-palabra";
import { JuegoTangram } from "@/components/juego-tangram";
import { EscribirHistoria } from "@/components/escribir-historia";
import { IngresarNombre } from "@/components/ingresar-nombre";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { palabras } from "@/data/palabras";
import { Temporizador } from "@/components/temporizador";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import Image from "next/image";

const generateChartData = (puntaje:number) => {
  const chartData = [
    { puntaje: puntaje, fill: "var(--color-puntaje)" },
  ]
  return chartData
}

const chartConfig = {
  puntaje: {
    label: "Puntaje",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Juego() {
  const [nivel, setNivel] = useState<number>(1);
  const [nombre, setNombre] = useState<string>("");
  const [palabra, setPalabra] = useState<string>("conejo");
  const [palabraIngresada, setPalabraIngresada] = useState<string>("");
  const [historia, setHistoria] = useState<string>("");
  const [palabrasSeleccionadas, setPalabrasSeleccionadas] = useState<string[]>(
    []
  );
  const [jugando, setJugando] = useState<boolean>(false);
  const [tiempo, setTiempo] = useState<number>(0);
  const [puntaje, setPuntaje] = useState<number>(0);

  useEffect(() => {
    // Seleccionar 10 palabras aleatorias del array `palabras`
    const palabrasRandom = [];
    const palabrasCopy = [...palabras];
    while (palabrasRandom.length < 10) {
      const randomIndex = Math.floor(Math.random() * palabrasCopy.length);
      palabrasRandom.push(palabrasCopy.splice(randomIndex, 1)[0]);
    }

    // Ordenar las palabras seleccionadas por longitud
    const palabrasOrdenadas = palabrasRandom.sort(
      (a, b) => a.length - b.length
    );
    setPalabrasSeleccionadas(palabrasOrdenadas);
    setPalabra(palabrasOrdenadas[nivel - 1]);
  }, [jugando]);

  useEffect(() => {
    if (palabrasSeleccionadas.length > 0) {
      setPalabra(palabrasSeleccionadas[nivel - 1]);
    }
  }, [nivel, palabrasSeleccionadas]);

  const handleTimeUpdate = (time: number) => {
    setTiempo(time);
  };

  const nextLevel = () => {
    if(palabra === palabraIngresada){
      setPuntaje(puntaje+1)
    }
    const resultados = {
      nombre,
      nivel,
      palabra,
      success: palabra === palabraIngresada ? true : false,
      historia: historia,
      tiempo,
    };
    console.log(resultados);
    setHistoria("");
    if (nivel === 10) {
      setJugando(false);
      return;
    }
    setNivel(nivel + 1);
    window.scroll(0, 0);
  };
  if (jugando) {
    return (
      <><Image src="/tangram-logo.webp" alt="App Logo" height={90} width={90} className="rounded-full"></Image>
      <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6 text-center ${jugando ? "hidden": ""}`}>
        Juego de Ordenar Palabras
      </h1>
      <div className="w-full flex flex-col justify-center items-center pt-8 space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-6">
          Nivel {nivel.toString()}
        </h2>
        <Temporizador nivel={nivel} onTimeUpdate={handleTimeUpdate} />
        <OrdenarPalabra
          palabra={palabra}
          setPalabraIngresada={setPalabraIngresada}
          nivel={nivel}
        />
        <JuegoTangram nivel={nivel} />
        <EscribirHistoria setHistoria={setHistoria} historia={historia} />
        <div className="max-w-4xl flex justify-center md:justify-end w-full">
          <Button onClick={nextLevel} className={
            `${nivel > 7 ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : nivel > 4 ? "bg-green-400 hover:bg-green-400/90": ""}`
          }>{nivel === 10 ? "Ver Puntaje" : "Siguiente Nivel"}</Button>
        </div>
      </div>
      </>
    );
  }
  if (jugando === false && nivel === 10) {
    return (
      <><Image src="/tangram-logo.webp" alt="App Logo" height={90} width={90} className="rounded-full"></Image>
      <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6 text-center ${jugando ? "hidden": ""}`}>
        Juego de Ordenar Palabras
      </h1>
      <div className="w-full flex flex-col justify-center items-center space-y-6 my-auto">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-center">
          Felicidades{" "}
          <span className="font-bold text-muted-foreground">{nombre}</span>, has
          completado el juego
        </h2>
        <div className="h-80 w-full flex items-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-full max-h-[250px]"
        >
          <RadialBarChart
            data={generateChartData(puntaje)}
            startAngle={0}
            endAngle={puntaje*36}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="puntaje" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {puntaje}/10
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Puntaje
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
        </div>
        <Button
          onClick={() => {
            setNivel(1);
            setPuntaje(0);
          }}
        >
          Comenzar otra vez
        </Button>
      </div>
      </>
    );
  }
  if (jugando === false && nivel === 1) {
    return (
      <><Image src="/tangram-logo.webp" alt="App Logo" height={90} width={90} className="rounded-full"></Image>
      <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6 text-center ${jugando ? "hidden": ""}`}>
        Juego de Ordenar Palabras
      </h1>
      <div className="w-full flex flex-col justify-center items-center space-y-6 my-auto">
        <IngresarNombre nombre={nombre} setNombre={setNombre} />
        <Button
          onClick={() => {
            setJugando(true);
          }}
        >
          ¡Comenzar!
        </Button>
      </div>
      </>
    );
  }
}
