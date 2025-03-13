
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

const Quotes = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Presupuestos</h1>
          <p className="text-muted-foreground">Gestiona tus presupuestos y ofertas</p>
        </div>
        <Button className="flex gap-2 items-center">
          <PlusIcon size={18} />
          <span>Nuevo Presupuesto</span>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Listado de Presupuestos</CardTitle>
          <CardDescription>Visualiza y administra tus presupuestos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-8 text-muted-foreground">
            Esta sección está en desarrollo. ¡Pronto podrás gestionar todos tus presupuestos desde aquí!
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quotes;
