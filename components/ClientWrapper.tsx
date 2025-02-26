"use client"

import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";
import SchematicWrapped from "./Schematicwrapped";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const schematicPubKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;
    if (!schematicPubKey) {
        throw new Error("No Schematic Publishable Key found. Please add it to your .env.local file")
    } 
  return (
        <ClerkProvider>
            <SchematicProvider publishableKey={schematicPubKey}>
                <SchematicWrapped>
                    {children}
                </SchematicWrapped>
            </SchematicProvider>
        </ClerkProvider>
  );
}
