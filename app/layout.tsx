//@ts-nocheck
"use client"
import { Dock } from "@/components/navbar/Dock";
import { DockCard } from "@/components/navbar/DockCard";
import { Card } from "@/components/navbar/Card";
import { DockDivider } from "@/components/navbar/DockDivider";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "@/components/Particles/particlesConfig";
import { Engine } from "tsparticles-engine";

export const metadata = {
    title: "Daniele Terracciano - Web CV",
    description: "Daniele Terracciano resume"
}

export default function RootLayout({
    children,
    }: {
        children: React.ReactNode
    }) {
        const particlesInit = (engine : Engine) => {
            loadFull(engine);
        };
        const GRADIENTS = [
            'https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg',
            'https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg',
            'https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg',
            'https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg',
            'https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed-p-130x130q80.jpeg',
            'https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1-p-130x130q80.jpeg',
            null,
            'https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg',
        ]
        return (
        <html lang="en">
            <body>
            <Particles init={particlesInit} options={particlesOptions} />

                {children}
            <Dock>
                {GRADIENTS.map((src, index) =>
                src ? (
                    <DockCard key={src}>
                    <Card src={src} />
                    </DockCard>
                ) : (
                    <DockDivider key={index} />
                )
                )}
            </Dock>
            </body>
        </html>
        )
    }