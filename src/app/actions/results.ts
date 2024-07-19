"use server"

import { palabras } from "@/data/palabras";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const insertarRespuestas = async (resultados:{
    nombre: string,
    nivel: number,
    palabra: string,
    success: boolean,
    historia: string,
    tiempo: number
}) => {
    try {
        await sql`INSERT INTO tangram_resultados (nombre, nivel, palabra, logrado, historia, tiempo) VALUES (${resultados.nombre}, ${resultados.nivel}, ${resultados.palabra}, ${resultados.success}, ${resultados.historia}, ${resultados.tiempo})`

    } catch (error) {
        console.log(error)
      return {
        error_message:
          "Hubo un error en el sistema. Contacta con los administradores por favor",
        error,
      };
    }
};

export const obtenerRespuestas = async () => {
    try {
        const { rows } = await sql`SELECT * FROM tangram_resultados ORDER BY created_at DESC`
        const respuesta = rows.map((row)=> {
            return {
                nombre: row.nombre,
                nivel: row.nivel,
                palabra: row.palabra,
                logrado: row.logrado,
                historia: row.historia,
                tiempo: row.tiempo,
            }
        })
        return respuesta
    } catch (error) {
        console.log(error)
      return null
    }
};

export const revalidarRespuestas = () => {
  revalidatePath("/resultados")
};