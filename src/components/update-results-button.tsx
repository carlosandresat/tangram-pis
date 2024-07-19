"use client";
import { Button } from "@/components/ui/button";
import { revalidarRespuestas } from "@/app/actions/results";

export function UpdateResultsButton() {
  const resolveOnClick = () => {
    revalidarRespuestas();
  };

  return <Button onClick={resolveOnClick}>Actualizar</Button>;
}
